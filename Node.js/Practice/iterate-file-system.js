const fs = require('fs');
let allFiles = 0;
const iterateFolders = (path) => {
    fs.readdir(path, (err, folders) => {
        if (err) {
            console.log(err);
            return;
        }

        folders.forEach((folder) => {
            const currentPath = path + '/' + folder;
            // console.log(path);
            // console.log(current);
            if (fs.lstatSync(currentPath).isDirectory()) {
                iterateFolders(currentPath);
            } else {
                allFiles += 1;
            }
        });
    });
};

const path = './Node.js/node_modules';
iterateFolders(path);
console.log(allFiles);
