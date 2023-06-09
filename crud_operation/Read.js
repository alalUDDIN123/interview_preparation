const fs = require('fs');

// Specify the file path
const filePath = 'Readme.md';

// Read file content
fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
        console.error(err);
        return;
    } else if (!data) {
        console.log("Content not found");
    }

    // Print the content of the file
    console.log(data);
});
