import mongoose from "mongoose";

const MenusSchema   =  new mongoose.Schema({
    title:{
        type:String,
        required:true,
        maxlength:50,
    } ,
    desc:{
        type:String,
        required:true,
        maxlength:200,
    },
    img:{
        type:String,
        required:true,
    }, 
    price:{
        type:Number,
        required:true,
    },
},{timestamps:true})

export default mongoose.models.Menus || mongoose.model("Menus" , MenusSchema);