const fs = require('fs');
const Buddy_Services=require("../services/buddy.services");

const displayBuddies=(req,res)=>{
    Buddy_Services.displayBuddiesServices(req,res);
}

const displayBuddy=(req,res)=>{
    Buddy_Services.displayBuddyServices(req,res);
}


const writeBuddy=(req,res)=>{
    Buddy_Services.writeBuddyServices(req,res);
}

const updateBuddy=(req,res)=>{
    Buddy_Services.updateBuddyServices(req,res);
}

const deleteBuddy=(req,res)=>{
    Buddy_Services.deleteBuddyServices(req,res);
}


module.exports={
    displayBuddies,displayBuddy,writeBuddy,updateBuddy,deleteBuddy
}