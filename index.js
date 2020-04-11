// these are the libraries we are going to use

const fs = require('fs');
const inquirer = require('inquirer');
const axios = require('axios');
const generateMarkdown = require('./utils/generateMarkdown');

async function init(){
    try {
        const responses = await inquirer.prompt([{
            type: 'input',
            name: 'username',
            message: 'What is your Github username?'
        },
        {
            type: 'input',
            name: 'email',
            message: 'What is your email?'
        },
        {
            type: 'input',
            name: 'title',
            message: 'What is the title of your repository?'
        },
        {
            type: 'input',
            name: 'description',
            message: 'Please briefly describe your project.'
        },
        {
            type: 'input',
            name: 'ToC',
            message: 'What are the categories needed for your table of contents?'
        },
        {
            type: 'input',
            name: 'Installation',
            message: 'What does the user need to do in order to install your application? Please provide a step by step response.'
        },
        {
            type: 'input',
            name: 'Usage',
            message: 'Please provide instructions on how to use the application correctly. Provide examples and screenshots if necessary'
        },
        {
            type: 'input',
            name: 'License',
            message: 'Please describe how other users should go about acquiring your product/application.'
        },
        {
            type: 'input',
            name: 'Contributing',
            message: 'If you would like others to collaborate or add on to your application write a guide about how they should do so.'
        },
        {
            type: 'input',
            name: 'Tests',
            message: 'How can other users test your application? What are things they should try?'
        },
        {
            type: 'input',
            name: 'Badge',
            message: 'https://img.shields.io/badge/Glassick-Readme-red'
        },
    ]);
    const {username, email, title, description, ToC, Installation, Usage, License, Contributing, Test, Badge} = responses;

    // calling the github api
    const ghapi = await axios.get(`https://api.github.com/users/${username}`);
    const {data} = ghapi;
    const {name, avatar_url} = data;
    console.log(data)

    // move data to the markdown file
    const markdown = await generateMarkdown({
        name,
        avatar_url,
        email,
        title,
        description,
        ToC,
        Installation,
        Usage,
        License,
        Contributing,
        Test,
        Badge
    });

    fs.writeFileSync(username + '.md', markdown, function(err){
        if(err){
            throw err;
        }
    })

    }
    catch (err) {
        throw err;
    }
}

init();