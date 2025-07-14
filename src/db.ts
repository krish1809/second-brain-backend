import mongoose,{model, Schema} from "mongoose";
import dotenv from "dotenv";
dotenv.config();

mongoose
  .connect(process.env.MONGODB_URI || "")
  .then(() => console.log("✅ MongoDB connected"))
  .catch((err) => console.error("❌ MongoDB connection error:", err.message));

export default mongoose;
const UserSchema = new Schema({
    username: {type:String,unique: true},
    password: String
})

const ContentSchema = new Schema({
    title: String,
    link: String,

    tags:[{type:mongoose.Types.ObjectId, ref :'Tag'}],
    userId: {type:mongoose.Types.ObjectId, ref:'User',required:true,unique:true}
    

})
const LinkSchema= new Schema({
    hash:String,
    userId:{type:mongoose.Types.ObjectId, ref:'User'}
})
export const LinkModel= model("Links",LinkSchema);
export const UserModel=  model("User",UserSchema);
export const ContentModel= model("Content",ContentSchema)

