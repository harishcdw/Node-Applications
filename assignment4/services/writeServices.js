const fs = require('fs');

const write_buddy_services=(req,res)=>{
    const info=req.body;
    fs.readFile('cdw_ace23_buddies.json',(err,data)=>{
        if(err){
            res.send(err);
        }
        else{
            new_data=JSON.parse(data);
            new_data.push(info);
            fs.writeFile('cdw_ace23_buddies.json',JSON.stringify(new_data),(err)=>{
                if(err){
                    res.send(err);
                }
                else{
                    res.send("Buddy's data added successfully");
                }
            });
        }
    });
}


module.exports={
    write_buddy_services
}
