import mongoose from 'mongoose';

const VehicleSchema=new mongoose.Schema(
    {
        
        buildingcode:{
            type:String,
            required:true,
        },
        vehicleno:{
            type:String,
            required:true,
            min:2,
            max:50,
            unique:true,
        },
        vehiclemodel:{
            type:String,
            required:true,
        },
        chassisnumber:{
            type:String,
            required:true,
        },
        vehiclecolor:{
            type:String,
            required:true,
            max:20,
        },
        fueltype:{
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
        pdate:{
            type:String,
            required:true,
        },
        image:{
            type:String,
        },
        invoice:{
            type:String,
        },
    },{timestamps:true}
)

const vehicle=mongoose.model("vehicle",VehicleSchema);
export default vehicle;