const jwt = require("jsonwebtoken");
const Jwt_secrtet = "sk-programmer";
const FetchBloger = (req, res) => {
  const jwt = require("jsonwebtoken");
  const Jwt_secrtet = "sk-programmer";
  const token = req.headers["auth-token"];
  console.log(token);
  if (!token) {
    
      res
      .status(400)
      .send({ status: false, error: "Please Authenticate using valid token" });
      return;
  }
  try {
    const data = jwt.verify(token, Jwt_secrtet);
    return data.bloger;
  } catch (error) {
   res
      .status(401)
      .send({ error: "please authenticate using a valid token" });
      return;
  }
};
module.exports = FetchBloger;
