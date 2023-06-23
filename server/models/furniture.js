import mongoose from 'mongoose';

const FurnitureSchema=new mongoose.Schema(
    {
        
        buildingcode:{
            type:String,
            required:true,
        },
        furniturecode:{
            type:String,
            required:true,
            min:2,
            max:50,
            unique:true,
        },
        furnituretype:{
            type:String,
            required:true,
        },
        furniturematerial:{
            type:String,
            required:true,
        },
        purchasedate:{
            type:String,
            required:true,
            max:20,
        },
        expense:{
            type:String,
            required:true,
        },
        status:{
            type:String,
            required:true,
            max:50,
        },
        invoice:{
            type:String,
        },
    },{timestamps:true}
)

const furniture=mongoose.model("furniture",FurnitureSchema);
export default furniture;