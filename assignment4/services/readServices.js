const fs = require('fs');

const display_buddies_services=(req,res)=>{
    fs.readFile('cdw_ace23_buddies.json',(err,data)=>{
        if(err){
            res.send(err);
        }
        else {
            res.send(data);
        }
    });
}

const display_buddy_services=(req,res)=>{
    const buddy_id=req.params.id;
    
    fs.readFile('cdw_ace23_buddies.json',(err,data)=>{
        if(err){
            res.send(err);
        }
        else {
            data=JSON.parse(data);
            const id_data=data.find ((val)=>val.emp_id===buddy_id||val.real_name===buddy_id);
            console.log(id_data);
            if(id_data!=null){
                res.send(id_data);
            }
            else{
                res.send("Value not exists");
            }
           
        }
    });

}


module.exports={
    display_buddies_services,display_buddy_services
}