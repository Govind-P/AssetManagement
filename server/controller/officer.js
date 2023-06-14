import officer from '../models/officer.js';

/*Read*/ 
export const getOfficer = async(req,res)=>{
    try{
        const {id}=req.params;
        const officers = await officer.findById(id);
        res.status(200).json(officers);
    }catch(err){
        res.status(404).json({message: err.message});
    }
}
