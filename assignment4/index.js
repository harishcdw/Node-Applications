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
  


const createRoute=require('./routes/create');
app.use('/write',createRoute);

const readRoute=require('./routes/read');
app.use('/read',readRoute);

const deleteRoute=require('./routes/delete');
app.use('/delete',deleteRoute);

const updateRoute=require('./routes/update');
app.use('/update',updateRoute);



app.listen(port,()=>{
    console.log("Server is running at port: "+port);
})
