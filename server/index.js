import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import authRoutes from './routes/auth.js';
import userRoutes from './routes/officers.js';
import deviceRoutes from './routes/device.js';
import {register} from './controller/auth.js';
import { deviceregister } from './controller/device.js';
import { vehicleregister } from './controller/automotive.js';
import officer from './models/officer.js';
import {officers} from './data/index.js';
import { 
    getDevice,
} from './controller/device.js';
import { 
    getVehicle,
} from './controller/automotive.js';

dotenv.config();
const app = express();
app.use(express.json());
app.use(cors());



/*Route*/
app.use('/register',register);
app.use("/",authRoutes);
app.use("/users",userRoutes);
app.use("/adddevice",deviceregister)
app.use("/addautomotive",vehicleregister)
app.use("/automotive",getVehicle)
app.use("/device",getDevice)

/*MONGOOSE SETUP*/
const PORT=process.env.PORT || 6001;

mongoose.connect(process.env.MONGO_URL,{
    useUnifiedTopology:true,
    useNewUrlParser:true,

}).then(()=>{
    app.listen(PORT,()=>console.log('Server port:'+PORT));
    /*ADD DATA ONETIME*/
    // officer.insertMany(officers);
    // console.log('Data inserted');
    // Post.insertMany(posts);
}).catch((err)=>{console.log(err)});
