// Exploring OS Module
const os = require('os');

// console.log(`Operating System: ${os.platform()}`);
// console.log(`Hostname: ${os.hostname()}`);
// console.log(`Home Directory: ${os.homedir()}`);
// console.log(`Number of CPUs: ${os.cpus().length}`);
// console.log(`Free Memory: ${(os.freemem()/(1024*1024*1024)).toFixed(2) + 'GB'}`);


// File Organizer
const fs = require("fs").promises;
const path = require("path");

async function organizeFolder(folderName){
    try{
        const targetDir = path.join(__dirname, folderName);
        const files = await fs.readdir(targetDir);
        for (const file of files){
            const oldPath=path.join(targetDir, file);
            const stats=await fs.lstat(oldPath);
            console.log("Old Path status ",file, stats);
            if (stats.isDirectory()){
                console.log(`${file} is a directory`);
                continue;
            }
            const ext = path.extname(file).slice(1) || 'others';
            const categoryDir = path.join(targetDir, ext);
            await fs.mkdir(categoryDir, {recursive: true});
            const newPath = path.join(categoryDir, file);
            await fs.rename(oldPath, newPath);
            console.log(`Successfuly organized: ${file}`);
        }
        console.log("Organizing the files");        
    } catch (error) {
        console.error(`Error organizing files: ${error.message}`);
    }
}

organizeFolder('my_downloads')