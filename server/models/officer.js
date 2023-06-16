import mongoose from 'mongoose';

const OfficerSchema=new mongoose.Schema(
    {
        buildingname:{
            type:String,
            required:true,
            min:2,
            max:50,
        },
        buildingcode:{
            type:String,
            required:true,
            min:2,
            max:50,
            unique:true,
        },
        buildingtype:{
            type:String,
            required:true,
        },
        password:{
            type:String,
            required:true,
            max:20,
        },
        email:{
            type:String,
            required:true,
            max:20,
            unique:true,
        },
        district:{
            type:String,
            required:true,
        },
        mpc:{
            type:String,
            required:true,
            max:50,
        },
        ward:{
            type:String,
            required:true,
        },
        locality:{
            type:String,
            required:true,
        },
        postoffice:{
            type:String,
            required:true,
        },
        pincode:{
            type:String,
            required:true,
        },
    },{timestamps:true}
)

const officer=mongoose.model("officer",OfficerSchema);
export default officer;