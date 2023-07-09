const fs = require('fs');
const path = require('path');  // it helps in resolving the path of files 
const customEvent=require("./events");
//// it gives you the absolute path of cureent directory 
const fileToWatch =path.join(__dirname, 'data.txt');//`${__dirname}/data.txt`

const watcher = fs.watch(fileToWatch, (eventType, filename) => {
    console.log(eventType,filename);
    customEvent.emit("change",filename)
  
});

watcher.on('error', (error) => {
    console.error(`Error watching file: ${error}`);
});
