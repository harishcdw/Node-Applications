const fs = require('fs');

const displayBuddiesServices=(req,res)=>{
    fs.readFile('cdw_ace23_buddies.json',(err,data)=>{
        if(err){
            res.send(err);
        }
        else {
            let dataObj=JSON.parse(data);
            if(dataObj.length==0){
                res.send("No Data")
            }
            else{
            res.send(dataObj);
            }
        }
    });
}

const displayBuddyServices=(req,res)=>{
    const buddy_id=req.params.id;
    
    fs.readFile('cdw_ace23_buddies.json',(err,data)=>{
        if(err){
            res.send(err);
        }
        else {
            data=JSON.parse(data);
            const id_data=data.find ((val)=>val.emp_id===buddy_id||val.real_name===buddy_id);
            // console.log(id_data);
            if(id_data!=null){
                res.send(id_data);
            }
            else{
                res.send("Value not exists");
            }
           
        }
    });

}

const writeBuddyServices=(req,res)=>{
    const info=req.body;
    fs.readFile('cdw_ace23_buddies.json',(err,data)=>{
        if(err){
            res.send(err);
        }
        else{
            new_data=JSON.parse(data);
            const data_index=new_data.findIndex((val)=>val.emp_id===info.id);
            if(data_index==-1)
            {
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
            else{
                res.send("Buddy already exists");
            }
        }
    });
}


const updateBuddyServices=(req,res)=>{
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


const deleteBuddyServices=(req,res)=>{
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
    displayBuddiesServices,displayBuddyServices,writeBuddyServices,updateBuddyServices,deleteBuddyServices
}