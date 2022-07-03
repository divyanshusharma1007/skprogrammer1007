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
    image: req.body.image,
    name: req.body.name,
    password: req.body.password,
    email: req.body.email,
    contactNumber: req.body.contactNumber,
  };
  const errors = schema.validate(delete { ...requestObj }.image);
  if (errors?.details?.length > 0) {
    return res
      .status(400)
      .json({ status: false, errors: "some errors occured" });
  } else {
    // users
    const { Authority } = AllCollections();
    // checking that the data
    let authority = await Authority.findOne({
      $or: [
        { email: req.body.email },
        { contactNumber: req.body.contactNumber },
      ],
    });
    if (authority) {
      return res
        .status(400)
        .json({ status: false, error: "You already exists" });
    } else {
      try {
        const salt = await bcrypt.genSalt(12);
        const secondrypassword = await bcrypt.hash(req.body.password, salt);
        requestObj.password = secondrypassword;
        const user = await Authority.create(requestObj);
        const data = {
        authority: {
            id: user.id,
          },
        };
        const authtoken = jwt.sign(data, Jwt_secrtet);
        res.status(200).json({ status: true, authtoken: authtoken });
      } catch (err) {
        //console.log(err);
        res.status(200).json({ status: false, error: "Some Error occured" });
      }
    }
  }
};
export default Connection(handler);
