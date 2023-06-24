import furniture from '../models/furniture.js'; 

export const furnitureregister=async(req, res) =>{
    try{
        const{
            buildingcode,
            furniturecode,
            furnituretype,
            furniturematerial,
            purchasedate,
            expense,
            status,
            invoice,
        }=req.body;
        console.log(req.body);
        const newFurniture={
            buildingcode,
            furniturecode,
            furnituretype,
            furniturematerial,
            purchasedate,
            expense,
            status,
            invoice,
        };
        //const savedFurniture =await newFurniture.save();
        const savedFurniture =await furniture.create(newFurniture);
        res.status(201).json(savedFurniture);

    }catch(err){res.status(500).json({error:err.message});}
}


/*Read*/ 
export const getFurniture = async(req,res)=>{
    try{
        const {buildingcode}=req.query;
        const furnitures = await furniture.find({buildingcode:buildingcode});
        res.status(200).json(furnitures);
    }catch(err){
        res.status(404).json({message: err.message});
    }
}
