import device from '../models/device.js'; 

export const deviceregister=async(req, res) =>{
    //console.log(req.body)
    try{
        const{
            buildingcode,
            devicecode,
            devicetype,
            devicebrand,
            devicemodel,
            installeddate,
            expense,
            status,
            invoice,
        }=req.body;

        const newDevice=new device({
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
        const savedDevice =await newDevice.save();
        res.status(201).json(savedDevice);

    }catch(err){res.status(500).json({error:err.message});}
}


/*Read*/ 
export const getDevice = async(req,res)=>{
    try{
        const {buildingcode}=req.query;
        const devices = await device.find({ buildingcode: buildingcode });
        res.status(200).json(devices);
    }catch(err){
        res.status(404).json({message: err.message});
    }
}
