import mongoose from "mongoose";

const userIds = [
    new mongoose.Types.ObjectId(),
    new mongoose.Types.ObjectId(),
];

export const officers = [
/*{
    _id: userIds[0],
    buildingname: "Village Office",
    buildingcode: "1256",
    email: "aaaaaaa@gmail.com",
    password: "$2b$10$dsasdgsagasda//G9JxQ4bQ8KXf4OAIe/X/AK9skyWUy",
    district:"Thrissur",
    mpc:"parapukara",
    locality: "Kolathur",
    ward:"10",
    postoffice: "nellayi",
    pincode:"680305",
    createdAt: 1115211422,
    updatedAt: 1115211422,
    __v: 0,
},*/
{
    _id: userIds[1],
    buildingname: "CET",
    buildingcode: "1246",
    email: "thataaa@gmail.com",
    password: "$!FEAS@!O)_IDJda//G9JxQ4bQ8KXf4OAIe/X/AK9skyWUy",
    district:"Trivandrum",
    mpc:"Kolathur",
    locality: "Sreekaryam",
    ward:"12",
    postoffice: "Sreekariyam",
    pincode:"680000",
    createdAt: 1595589072,
    updatedAt: 1595589072,
    __v: 0,
},
];