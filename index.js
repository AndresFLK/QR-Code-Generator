/* 
1. Use the inquirer npm package to get user input.
2. Use the qr-image npm package to turn the user entered URL into a QR code image.
3. Create a txt file to save the user input using the native fs node module.
*/
import fs from 'fs';
import inquirer from 'inquirer';
import qr from 'qr-image';


inquirer.prompt([{
    type: 'input',
    name: 'url',
    message: 'What URL do you want to use?'
  }
  ])
  .then((answers) => {
    var url = answers.url;
    var qr_img = qr.image(url);
    qr_img.pipe(fs.createWriteStream('qr_img.png'));
    fs.writeFile("url.txt", url, (er) => {
        if (er) throw er;
        console.log("The file has been saved");
    });
  })
  .catch((error) => {
    if (error.isTtyError) {
      console.log("Prompt couldn't be rendered in the current environment");
    } else {
        console.log("Something went wrong");
    }
  });

  
   
 
