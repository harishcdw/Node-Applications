
const fs = require('fs');
const http = require('http');
const url = require('url');
const {randomSplice}=require("random-splice");

// reading json file
let colorPaletteFile = "./color_palette.json";

// function for reading a file
async function readingFile(filePath) {
    try{
        let data = await fs.promises.readFile(filePath, "utf-8");
        data = JSON.parse(data);
        if(data.length>=5){
            return data;
        }
        return "Data not sufficient";
    }
    catch(err){
        return err;
    }  
}
function writeFile(filePath,data){
    fs.writeFileSync(filePath, JSON.stringify(data));
}

http.createServer((req, res) => {
    if (req.url != "/favicon.ico") { 
        let colorPalettes = [];
        let randomColorPaletteFile="./randomized_color_ palette.json";
        writeFile(randomColorPaletteFile,colorPalettes);
        readingFile(colorPaletteFile).then(
            (data) => {    
                if(data!=="Data not sufficient"){
                   
                    // selecting random color palette from json file
                    let i=0;
                    while(i++ < 5) {
                        colorPalettes.push(randomSplice(data));
                    }
                    writeFile(randomColorPaletteFile, colorPalettes);
                    readingFile(randomColorPaletteFile).then(
                        (data1)=>{
                            res.write(JSON.stringify(data1));
                            res.end();
                        }
                    ); 
                } 
                else{
                    res.write("Data not sufficient");
                    res.end();
                }
            }
        )
    }
}).listen(4000);


