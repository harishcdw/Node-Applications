const fs = require('fs');

const update_buddy_Services=(req,res)=>{
    const buddy_id=req.params.id;
    fs.readFile('cdw_ace23_buddies.json',(err,data)=>{
        if(err){
            res.send(err);
        }
        else{
            data=JSON.parse(data);
            const data_index=data.findIndex((val)=>val.emp_id===buddy_id);
            if(data_index!=-1){
                data[data_index].nick_name=req.body.nick_name;
                data[data_index].hobbies=req.body.hobbies;
                fs.writeFile('cdw_ace23_buddies.json',JSON.stringify(data),(err)=>{
                    if(err){
                        res.send(err);
                    }
                    else{
                        res.send("Update successfull");
                    }
                })
            }
            else{
                res.send("Buddy not found");
            }


        }
    })
}

module.exports={
    update_buddy_Services
}