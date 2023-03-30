
const fs=require('fs');
const http = require('http');
const url = require('url');

// reading json file
let colorPaletteFile = "./color_palette.json";

http.createServer((req,res)=>{

    if(req.url != "/favicon.ico") {
        fs.readFile(colorPaletteFile, "utf-8",(err,data)=>{
            data=JSON.parse(data);
            const randomSet = new Set();
            while(randomSet.size<5) {
                randomValue = Math.floor(Math.random() * data.length);
                randomSet.add(randomValue);
            }
            // selecting random color palette from json file
            let colorPalettes ='[';
                
            randomSet.forEach (function(value) {
                colorPalettes+=JSON.stringify(data[value])+',\n';
            })
            colorPalettes+=']';
            fs.writeFileSync("./randomized_color_ palette.json", colorPalettes);
            fs.readFile("./randomized_color_ palette.json","utf-8",(err,data)=>{
                res.write(data);
                res.end();
            })
        });
    } 
}).listen(4000);

