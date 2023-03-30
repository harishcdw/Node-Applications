
const fs=require('fs');
const http = require('http');
const url = require('url');
const {randomSplice}=require("random-splice");
// reading json file


http.createServer((req,res)=>{ 
    if(req.url != "/favicon.ico") {
        let colorPaletteFile = "./color_palette.json";
        fs.readFile(colorPaletteFile, "utf-8",(err,data)=>{
            data=JSON.parse(data);
            console.log( data);
            const randomSet = new Set();
            let colorPalettes ='[';
            let i=0;
            while(i++ < 5) {
                colorPalettes+=JSON.stringify(randomSplice(data))+',\n';
            }
            // selecting random color palette from json file
            colorPalettes+=']';
            fs.writeFileSync("./randomized_color_ palette.json", colorPalettes);
            fs.readFile("./randomized_color_ palette.json","utf-8",(err,data)=>{
                res.write(data);
                res.end();
            })
        });
    } 
}).listen(4000);

