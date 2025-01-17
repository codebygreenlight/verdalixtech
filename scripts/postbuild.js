const fs = require('fs');
const path = require('path');

// Function to recursively get all files in directory
function getAllFiles(dirPath, arrayOfFiles) {
  const files = fs.readdirSync(dirPath);

  arrayOfFiles = arrayOfFiles || [];

  files.forEach(function(file) {
    if (fs.statSync(dirPath + "/" + file).isDirectory()) {
      arrayOfFiles = getAllFiles(dirPath + "/" + file, arrayOfFiles);
    } else {
      arrayOfFiles.push(path.join(dirPath, "/", file));
    }
  });

  return arrayOfFiles;
}

// Main post-build processing
async function postBuild() {
  console.log('Running post-build optimizations...');
  
  const distPath = path.join(__dirname, '../dist');
  const files = getAllFiles(distPath);

  // Add any additional post-build processing here
  
  console.log('Post-build optimizations complete!');
}

postBuild().catch(console.error); 