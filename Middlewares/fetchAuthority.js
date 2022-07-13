const jwt = require("jsonwebtoken");
const Jwt_secrtet = "sk-programmer";
// check it 
const FetchBloger = (req, res) => {
  const jwt = require("jsonwebtoken");
  const Jwt_secrtet = "sk-programmer";
  const token = req.headers["auth-token"];
  if (!token) {
    
      res
      .status(400)
      .send({ status: false, error: "Please Authenticate using valid token" });
      return undefined ;
  }
  try {
    const data = jwt.verify(token, Jwt_secrtet);
    return data.authority;
  } catch (error) {
    console.log(error)
   res
      .status(401)
      .send({ error: "please authenticate using a valid token" });
      return undefined;
  }
};
module.exports = FetchBloger;
