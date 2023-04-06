const fs=require('fs');
const deleteServices = require("../services/deleteServices")

const delete_buddy=(req,res)=>{
    deleteServices.delete_buddy_services(req,res);
}

module.exports={
    delete_buddy
}