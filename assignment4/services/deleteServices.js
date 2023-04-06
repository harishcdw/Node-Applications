const fs=require('fs');


const delete_buddy_services=(req,res)=>{
    const buddy_id=req.params.id;
    fs.readFile('cdw_ace23_buddies.json',(err,data)=>{
        if(err){
            res.send(err);
        }
        else{
            data=JSON.parse(data);
            const data_index=data.findIndex((val)=>val.emp_id===buddy_id);
            if(data_index!=-1){
                data=data.filter((buddy)=>{
                    return buddy.emp_id!=buddy_id});
                fs.writeFile('cdw_ace23_buddies.json',JSON.stringify(data),(err)=>{
                    if(err){
                        res.send(err);
                    }
                    else{
                        res.send("Buddy deleted successfull");
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
    delete_buddy_services
}