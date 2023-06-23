import mongoose from 'mongoose';

const DeviceSchema=new mongoose.Schema(
    {
        
        buildingcode:{
            type:String,
            required:true,
        },
        devicecode:{
            type:String,
            required:true,
            min:2,
            max:50,
            unique:true,
        },
        devicetype:{
            type:String,
            required:true,
        },
        devicebrand:{
            type:String,
            required:true,
        },
        devicemodel:{
            type:String,
            required:true,
            max:20,
        },
        installeddate:{
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

const device=mongoose.model("device",DeviceSchema);
export default device;