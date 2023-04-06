const fs = require('fs');
const writeServices=require("../services/writeServices")
const write_buddy=(req,res)=>{
    writeServices.write_buddy_services(req,res);
}


module.exports={
    write_buddy
}
