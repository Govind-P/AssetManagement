import express from 'express';
import { 
    getOfficer,
} from '../controller/officer.js';
import {verifyToken} from "../middleware/auth.js";

const router=express.Router();

/*READ*/
router.get("/:id",verifyToken,getOfficer);
export default router;