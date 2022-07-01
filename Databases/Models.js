import mongoose from 'mongoose';
mongoose.models={}
// converting schema into the models 

export default function Models(){
    mongoose.models={}
    const HomeRight= new mongoose.model('HomeRight',  require('./Schemas/Settings/homeRight'));
    const Authority=new mongoose.model('Authority',require('./Schemas/CreateAuthority'));
    const User=new mongoose.model('User', require('./Schemas/CreateUser'));
    const Bloger=new mongoose.model('Bloger',require('./Schemas/CreateBloger'));
    const Blogs=new mongoose.model('Blogs',require('./Schemas/CreateBlogs'));
    
   return { HomeRight,Authority,User,Bloger,Blogs};
}