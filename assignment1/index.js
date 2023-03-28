const fs1=require('fs');
const fs = require('fs').promises;

let color_Palette_File = "./color_palette.json";
let userFile = JSON.parse(fs1.readFileSync(color_Palette_File, "utf-8"));
randomValue = Math.floor(Math.random() * userFile.length);

async function addfiles() {
    for (let i = 0; i < 5; i++) {
        await fs.appendFile("./randomized_color_ palette.json", "\n" + JSON.stringify(userFile[randomValue]));
    }

    let random5Color = "./randomized_color_ palette.json";
    let readFileSource = fs1.readFileSync(random5Color, "utf-8");
    
    console.log(readFileSource);
}
addfiles();