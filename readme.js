const inquirer = require("inquirer");
const axios = require("axios");
const fs = require('fs');
const path = require('path');
async function main(){
    console.log(`starting`);
    const userResponse = await inquirer
    .prompt([
        {
            type: "input",
            message: "Name your GitHub repo?",
            name: "repo name"
        },
        {
            type: "input",
            message: "What is the title of your homework?",
            name: "Tittle"
        },
        {
            type: "input",
            message: "Brief description of your homework.",
            name: "Description"
        },

        {
            type: "input",
            message: "Provide instructions for use.",
            name: "instruction"
        },
        {
            type: "input",
            message: "Instructions and examples of your project in use for the Usage section.",
            name: "usage"
        },
        {
            type: "input",
            message: "Provide any tests written for your application and provide examples on how to run them.",
            name: "tests"
        }
        ]);
        console.log(`starting`);
        console.log(userResponse);
        const gitUsername = userResponse.username;
        const homeworkTittle = userResponse.homeworkTittle;
        const homeworkDescription = userResponse.homeworkDescription;
        const installationProcess = userResponse.installationProcess;
        const instruction = userResponse.instruction;
        const instructionExample = userResponse.instructionExample;
        const tests = userResponse.tests;
    
        var result = (`
# ${homeworkTittle} 
${homeworkDescription}
\n* [Installation](#Installation)
\n* [Instructions](#Instructions)
\n* [Author](#Author)
\n* [Tests](#Tests)
## Installation
${installationProcess}
## Instructions
${instruction}
\`\`\`
${instructionExample}
\`\`\`
## Tests
${tests}
## Author 
\n![ProfileImage](${gitProfileImage}) 
\n**${gitName}**
\nEmail: ${gitEmail}
\nLocation:${gitlocation}
\nGitHub: ${gitUrl}
`)
var writeResult = fs.writeFileSync(path.join(__dirname, '../GoodReadMeGenerator', 'readMe.md'), result )
console.log("Success! Your README.md file has been generated....")
    }
main();