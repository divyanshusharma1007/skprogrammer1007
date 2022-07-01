const express = require("express");
const multer = require("multer");
const port = 4000;
const app = express();
const upload = multer({ dest: './public/data/uploads/' })
app.post('/', upload.single('uploaded_file'), function (req, res) {
   console.log(req.file, req.body)
});
app.listen(port,()=>{
    console.log("hello")
})