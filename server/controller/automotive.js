import vehicle from '../models/automotive.js'; 

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
        console.log(req.body);
        const newVehicle=new vehicle({
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
export const getVehicle = async(req,res)=>{
    try{
        const {buildingcode}=req.query;
        const vehicles = await vehicle.find({ buildingcode: buildingcode });

        res.status(200).json(vehicles);
    }catch(err){
        res.status(404).json({message: err.message});
    }
}
