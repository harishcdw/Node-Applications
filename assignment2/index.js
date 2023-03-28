const fs1=require('fs');
const fs = require('fs').promises;
const http = require('http');
const url = require('url');
let color_Palette_File = "./color_palette.json";

http.createServer( async (req,res,err)=>{
    let userFile = JSON.parse(fs1.readFileSync(color_Palette_File, "utf-8"));
    let readFileSource;
    if(req.url!="/favicon.ico"){
        async function addfiles() {
            for (let i = 0; i < 5; i++) {
                randomValue = Math.floor(Math.random() * userFile.length);
                await fs.appendFile("./randomized_color_ palette.json", "\n" + JSON.stringify(userFile[randomValue]));
            }

            let random5Color = "./randomized_color_ palette.json";
            readFileSource = await fs.readFile(random5Color, "utf-8");
            console.log(readFileSource);
        }
        
        await addfiles();
        res.write(JSON.stringify(readFileSource));
    }
    res.end();
    
}).listen(4000);

