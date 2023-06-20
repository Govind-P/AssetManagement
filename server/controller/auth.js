import bcrypt from "bcrypt";
import jwt from 'jsonwebtoken';
import officer from "../models/officer.js"; 

export const register=async(req, res) =>{
    try{
        const{
            buildingname,
            buildingcode,
            buildingtype,
            password,
            email,
            district,
            mpc,
            ward,
            postoffice,
            locality,
            pincode,
        }=req.body;

        const salt=await bcrypt.genSalt();
        const passwordHash=await bcrypt.hash(password, salt);
        const newOfficer=new officer({
            buildingname,
            buildingcode,
            buildingtype,
            password:passwordHash,
            email,
            district,
            mpc,
            ward,
            postoffice,
            locality,
            pincode,
        });
        const savedOfficer =await newOfficer.save();
        res.status(201).json(savedOfficer);

    }catch(err){res.status(500).json({error:err.message});}
}

/*Logging in */

const login = async (req, res)=>{
    try{
        const {email,password}=req.body;
        console.log(email, password)
        const officers=await officer.findOne({email:email});
        if(!officers){return res.status(400).json({msg : 'User doesnot exist' })}

        const isMatch=await bcrypt.compare(password,officers.password);
        if(!isMatch){return res.status(400).json({msg : 'Invalid credential' })}

        const token = jwt.sign({id:officers._id},process.env.JWT_SECRET);
        delete officers.password;
        res.status(200).json({token,officers});

    }catch(err){res.status(500).json({error:err.message});}
}

export default login;
