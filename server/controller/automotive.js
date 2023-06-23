import officer from '../models/automotive.js'; 

export const vehicleregister=async(req, res) =>{
    try{
        const{
            buildingcode,
            vehicleno,
            vehiclemodel,
            chassisnumber,
            vehiclecolor,
            fueltype,
            expense,
            pdate,
            status,
            invoice,
            image,
        }=req.body;

        const newDevice=new device({
            buildingcode,
            vehicleno,
            vehiclemodel,
            chassisnumber,
            vehiclecolor,
            fueltype,
            expense,
            pdate,
            status,
            invoice,
            image,
        });
        const savedVehicle =await newVehicle.save();
        res.status(201).json(savedVehicle);

    }catch(err){res.status(500).json({error:err.message});}
}


/*Read*/ 
/*export const getDevice = async(req,res)=>{
    try{
        const {buildingcode}=req.params;
        const devices = await device.findById(buildingcode);
        res.status(200).json(devices);
    }catch(err){
        res.status(404).json({message: err.message});
    }
}*/
