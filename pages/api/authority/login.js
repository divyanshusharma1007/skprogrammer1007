
import Connection from '../../../Databases/Connection'
import AllCollections from '../../../Databases/Models'
import jwt from 'jsonwebtoken'
const Jwt_secrtet = "sk-programmer"
import joi from 'joi'
const bcrypt=require('bcryptjs')


export default  async function handler(req, res) {
  // validation 
  const schema = joi.object({
    password: joi.string(),
    email: joi.string()
      .email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } }),
  });
  let requestObj = {
    password: req.body.password,
    email: req.body.email,
  }

  const errors = schema.validate(requestObj);
const {email,password}=requestObj;
  if (errors?.details?.length > 0) {
    return res.status(400).json({ status: false, errors: "some errors occured" });
  }
  else {
    // users 
    const { Authority } = AllCollections();
    try {
      let authority = await Authority.findOne({ email })
      if (!authority) {
        return res.status(400).json({ status: false, error: "Please try to log in with the correct creditianatials" })
      }
      // compaing the password password with the decrypt password
      const passwordcompare = await bcrypt.compare(password, authority.password);
      // checking that the password is created or not
      if (!passwordcompare) {
        return res.status(400).json({ 
          status: false, error: "Please try to log in with the correct creditianatials" })
      }
      // creating the auth token with the id of Authority
      const data = {
        authority: {
          id: authority.id
        }
      }
      // sending the auth token with sign in 
      const authtoken = jwt.sign(data, Jwt_secrtet)
      res.status(200).json({ status: true, authtoken,authby:"ADMIN" })
    } catch (error) {
      res.status(500).send({ status: false, error: "Some Error occured" })
    }
  }
}