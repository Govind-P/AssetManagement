import employee from '../models/employee.js'; 
import bcrypt from "bcrypt";
export const addEmployee=async(req, res) =>{
    //console.log(req.body)
    try{
        const{
            profilepass,
            buildingcode,
            employeename,
            devicetype,
            devicebrand,
            devicemodel,
            installeddate,
            expense,
            status,
            invoice,
        }=req.body;
        const salt=await bcrypt.genSalt();
        const passwordHash=await bcrypt.hash(password, salt);
        const newEmployee=new employee({
            profilepass:passwordHash,
            buildingcode,
            devicecode,
            devicetype,
            devicebrand,
            devicemodel,
            installeddate,
            expense,
            status,
            invoice,
        });
        const savedEmployee =await newEmployee.save();
        res.status(201).json(savedEmployee);

    }catch(err){res.status(500).json({error:err.message});}
}


/*Read*/ 
export const getEmployee = async(req,res)=>{
    try{
        const {buildingcode}=req.query;
        const employees = await employee.find({ buildingcode: buildingcode });
        res.status(200).json(employees);
    }catch(err){
        res.status(404).json({message: err.message});
    }
}
