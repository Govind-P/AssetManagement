import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import authRoutes from './routes/auth.js';
import userRoutes from './routes/officers.js';
import {register} from './controller/auth.js';
import officer from './models/officer.js';
import {officers} from './data/index.js';


dotenv.config();
const app = express();
app.use(express.json());
app.use(cors());



/*Route*/
app.use('/auth/register',register);
app.use("/auth",authRoutes);
app.use("/users",userRoutes);

/*MONGOOSE SETUP*/
const PORT=process.env.PORT || 6001;

mongoose.connect(process.env.MONGO_URL,{
    useUnifiedTopology:true,
    useNewUrlParser:true,

}).then(()=>{
    app.listen(PORT,()=>console.log('Server port:'+PORT));
    /*ADD DATA ONETIME*/
    officer.insertMany(officers);
    console.log('Data inserted');
    //Post.insertMany(posts);
}).catch((err)=>{console.log(err)});
