import Connection from "../../../Databases/Connection";
import FetchBloger from "../../../Middlewares/fetchBloger";
import allModels from "../../../Databases/Models";
import joi from "joi";
const handler = async (req, res) => {
 const Bloger=FetchBloger();
 const {Blogs}=allModels();
 
};
export default Connection(handler);

