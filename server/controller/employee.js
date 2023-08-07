import employee from '../models/employee.js'; 
import bcrypt from "bcrypt";
export const addEmployee=async(req, res) =>{
    try{
        const{
            profilepass,
            buildingcode,
            firstname,
            lastname,
            employeeid,
            dob,
            age,
            email,
            phone,
            address,
            joindate,
            position,
            idproof,
            photo,
        }=req.body;
        const salt=await bcrypt.genSalt();
        const passwordHash=await bcrypt.hash(profilepass, salt);
        const newEmployee=new employee({
            profilepass:passwordHash,
            buildingcode,
            firstname,
            lastname,
            employeeid,
            dob,
            age,
            email,
            phone,
            address,
            joindate,
            position,
            idproof,
            photo,
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
