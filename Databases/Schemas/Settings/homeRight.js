const mongoose = require('mongoose')
const MainBox=new mongoose.Schema({
    heading: {type: 'string', required: true},
    description: {type: 'string', required: true},
})
const HomeRight = new mongoose.Schema({
     heading:{
        type:'string',
        required:true,
        default:"welcome"
     },
     box:{
        type:[MainBox],
        required:true,
        defalut:[{heading:"programmer hub",description:"radha rani"}]
     }
})

module.exports  =HomeRight;