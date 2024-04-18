import Mongoose  from "mongoose"

const connectDb =(url)=>{
return Mongoose.connect(url)}
export default connectDb