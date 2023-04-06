// function for writing a file
const fs = require('fs');
const writeFile = (filePath, data) => {
    return new promise((resolve,reject)=>{
        fs.writeFile(filePath, JSON.stringify(data),(err)=>{
            if(err){
                reject (err);
            }
            else{
                resolve (data);
            }
        });
    })
    
}

module.exports = {
    writeFile
}