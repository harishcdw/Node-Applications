const express = require('express');
const app = express();
let port=4001;
const fs = require('fs');

app.use(express.urlencoded({
    extended:false
}));

app.use(express.json());

// fs.writeFile('cdw_ace23_buddies.json', '[]', function (err) {
//     if (err) throw err;
//     console.log('File created');
//   });
  

const Buddy_Route=require('./routes/buddy.routes');
app.use('/buddy',Buddy_Route);


app.listen(port,()=>{
    console.log("Server is running at port: "+port);
})
