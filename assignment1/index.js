const fs=require('fs');

// reading json file
let colorPaletteFile = "./color_palette.json";
let userFile = JSON.parse(fs.readFileSync(colorPaletteFile, "utf-8"));

// selecting random color palette from json file
let colorPalettes ='';
const randomSet = new Set();
while(randomSet.size<5) {
    randomValue = Math.floor(Math.random() * userFile.length);
    randomSet.add(randomValue);
}
randomSet.forEach (function(value) {
    colorPalettes+=JSON.stringify(userFile[value])+'\n';
  })

fs.writeFileSync("./randomized_color_ palette.json", colorPalettes);

// Reading the file
let random5Color = "./randomized_color_ palette.json";
fs.readFile(random5Color, "utf-8",(err,data)=>{
    if(err) console.log(err);
    console.log(data);
});




