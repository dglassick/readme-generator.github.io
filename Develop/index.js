const fs = require('fs');
const util = require('util')
const inquirer = require('inquirer');


const writeFileAsync = util.promisify(fs.writeFile);



let promptUser = () => {
    return inquirer.prompt([{
        type:'input',
        name: 'username',
        message: 'What is your Github username?'
    },
    {
        type:'input',
        name: 'title',
        message: 'What is the title of your repository?'
    },
    {
        type:'input',
        name:'description',
        message:'Please briefly describe your project.'
    },
    {
        type:'input',
        name:'Table of Contents',
        message:'What are the categories needed for your table of contents?'
    },
    {
        type:'input',
        name:'Installation',
        message:'What does the user need to do in order to install your application? Please provide a step by step response.'
    },
    {
        type:'input',
        name:'Usage',
        message:'Please provide instructions on how to use the application correctly. Provide examples and screenshots if necessary'
    },
    {
        type:'input',
        name: 'License',
        message: 'Please describe how other users should go about acquiring your product/application.'
    },
    {
        type:'input',
        name: 'Contributing',
        message: 'If you would like others to collaborate or add on to your application write a guide about how they should do so.'
    },
    {
        type:'input',
        name: 'Tests',
        message: 'How can other users test your application? What are things they should try?'
    },
    {
        type:'input',
        name: 'Badge',
        message: 'https://img.shields.io/badge/Glassick-Readme-red'
    },
])};
const generateReadME = (responses) =>{
    console.log(responses);
    username = responses.username;
    util.getUser(username).then(function(res){
        console.log(res.data[0].payload.commits[0].author.email);
        const usernameEmail = res.data[0].payload.commits[0].author.email;
        // const usernamePicture = res.data[0].actor.avatar_url;

        let title = responses.title;
        let description = responses.description;
        let tableofContents = responses["Table of Contents"];
        let installation = responses.Installation;
        let usage = responses.Usage;
        let license = responses.License;
        let contributing = responses.Contributing;
        let tests = responses.Tests;
        let badges = responses.badges;
        let responses = title + '\n' + description  + '\n' + tableofContents  + '\n' + installation  + '\n' +usage  + '\n' + license  + '\n' + contributing  + '\n' + tests  + '\n' + badges  + '\n' + usernameEmail  + '\n';
    })
}

async function init(){
    try{
        const responses = await promptUser();
        const readMe = generateReadME(responses);
        await writeFileAsync("readMe.md", readMe)
        console.log('Success')
    }  catch(err){
        console.log(err)
    }
}

init();

