const http = require('http');
let { readingFile } = require("./readingFile");
const { writeFile } = require("./writingFile");

// reading json file
let colorPaletteFile = "./color_palette1.json";
let randomColorPaletteFile = "./randomized_color_ palette.json";


http.createServer(async (req, res) => {
    if (req.url != "/favicon.ico") {
        let colorPalettes = [];

        await writeFile(randomColorPaletteFile, colorPalettes);
        let data = await readingFile(colorPaletteFile);
        if (data !== "Data not sufficient") {
            const randomSet = new Set();
            while (randomSet.size < 5) {
                randomValue = Math.floor(Math.random() * data.length);
                randomSet.add(randomValue);
            }
            // selecting random color palette from json file
            randomSet.forEach(function (value) {
                colorPalettes.push(data[value]);
            });
            await writeFile(randomColorPaletteFile, colorPalettes);
            let data1 = readingFile(randomColorPaletteFile);

            res.write(JSON.stringify(data1));
            res.end();

        }
        else {
            res.write("Data not sufficient");
            res.end();
        }

    }
}).listen(4000);


