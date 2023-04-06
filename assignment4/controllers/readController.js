const fs = require('fs');
const readServices=require("../services/readServices")
const display_buddies=(req,res)=>{
    readServices.display_buddies_services(req,res);
}

const display_buddy=(req,res)=>{
    readServices.display_buddy_services(req,res);
}


module.exports={
    display_buddies,display_buddy
}