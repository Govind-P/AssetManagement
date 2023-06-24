import mongoose from 'mongoose';

const EmployeeSchema=new mongoose.Schema(
    {
        
        buildingcode:{
            type:String,
            required:true,
        },
        firstname:{
            type:String,
            required:true,
            min:2,
            max:50,
        },
        lastname:{
            type:String,
            required:true,
        },
        employeeid:{
            type:String,
            required:true,
            unique:true,
        },
        profilepass:{
            type:String,
            required:true,
            min:6,
        },
        joindate:{
            type:String,
            required:true,
            max:20,
        },
        dob:{
            type:String,
            required:true,
        },
        age:{
            type:String,
            required:true,
        },
        email:{
            type:String,
            required:true,
        },
        phone:{
            type:String,
            required:true,
        },
        address:{
            type:String,
            required:true,
        },
        position:{
            type:String,
            required:true,
        },
        idproof:{
            type:String,
            
        },photo:{
            type:String,
            
        },
    },{timestamps:true}
)

const employee=mongoose.model("employee",EmployeeSchema);
export default employee;