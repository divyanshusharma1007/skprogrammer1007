const jwt = require('jsonwebtoken')
const Jwt_secrtet = "sk-programmer"
const FetchAuthority = (req, res) => {
     const jwt = require('jsonwebtoken')
     const Jwt_secrtet = "sk-programmer"
     console.log(req.header  )
     const token = req.headers['auth-token'];
     if (!token) {
          return res.status(400).send({ status: false, error: "Please Authenticate using valid token" })
     }
     try {
          const data = jwt.verify(token, Jwt_secrtet)
          req.authority=data.authority;
     } catch (error) {
          console.log(error);
          return res.status(401).send({ error: "please authenticate using a valid token" })
     }
}
module.exports = FetchAuthority;