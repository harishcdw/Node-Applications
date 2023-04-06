// function for reading a file
const fs = require('fs');
const readingFile = (filePath) => {
    try {
        let data = fs.readFileSync(filePath, "utf-8");
        data = JSON.parse(data);
        if (data.length >= 5) {
            return data;
        }
        return "Data not sufficient";
    }
    catch (err) {
        return err;
    }
}

module.exports = {
    readingFile
}