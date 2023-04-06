const fs = require('fs');
const updateServices = require("../services/updateServices")
const update_buddy=(req,res)=>{
    updateServices.update_buddy_Services(req,res);
}

module.exports={
    update_buddy
}