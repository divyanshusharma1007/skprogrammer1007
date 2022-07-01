const jwt = require('jsonwebtoken')
const Jwt_secrtet = "sk-programmer"
const FetchUser = (req, res) => {
     const jwt = require('jsonwebtoken')
     const Jwt_secrtet = "sk-programmer"
     const token = req.headers['auth-token'];
     if (!token) {
          return res.status(400).send({ status: false, error: "Please Authenticate using valid token" })
     }
     try {
          const data = jwt.verify(token, Jwt_secrtet)
          return req.User=data.User;
     } catch (error) {
          return res.status(401).send({ error: "please authenticate using a valid token" })
     }
}
module.exports = FetchUser;