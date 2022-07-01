import Connection from "../../../Databases/Connection";
import AllCollections from "../../../Databases/Models";
const Jwt_secrtet = "sk-programmer";
const joi = require("joi");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const handler = async (req, res) => {
  const schema = joi.object({
    name: joi.string().max(20).min(5).required(),
    password: joi.string(),
    email: joi
      .string()
      .email({ minDomainSegments: 2, tlds: { allow: ["com", "net"] } }),
    contactNumber: joi.string().max(10).min(10),
  });
  let requestObj = {
    name: req.body.name,
    password: req.body.password,
    email: req.body.email,
    contactNumber: req.body.contactNumber,
  };
  const errors = schema.validate(requestObj);
  console.log(errors, "my errors ");
  if (errors?.details?.length > 0) {
    return res
      .status(400)
      .json({ status: false, errors: "some errors occured" });
  } else {
    // users
    const { Bloger, User } = AllCollections();
    // checking that the data
   
    let bloger = await Bloger.findOne(
      { email: req.body.email },
      { contactNumber: req.body.contactNumber }
    );
    let user = await User.findOne(
      { email: req.body.email },
      { contactNumber: req.body.contactNumber }
    );
    if (bloger || user ) {
      return res
        .status(400)
        .json({ status: false, error: "You already exists" });
    } else {
      try {
        const salt = await bcrypt.genSalt(12);
        const secondrypassword = await bcrypt.hash(req.body.password, salt);
        requestObj.password = secondrypassword;
        const bloger = await Bloger.create(requestObj);
        const data = {
          bloger: {
            id: bloger.id,
          },
        };
        const authtoken = jwt.sign(data, Jwt_secrtet);
        res.status(200).json({ status: true, authtoken: authtoken });
      } catch (err) {
        res.status(200).json({ status: false, error: "Some Error occured" });
      }
    }
  }
};
export default Connection(handler);
