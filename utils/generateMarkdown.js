function generateMarkdown(data) {
    return `
  # ${data.title}

  ##Project designer 
  ${data.name}

  
  ##Profile Image

  ![github-small](${data.avatar_url})

  ### User Email Address: 
  ${data.email}

  ##Description: 
  ${data.description}

  ## Table of Contents 
  ${data.ToC}

  ## Installation
  What does the user need to do in order to install your application? 
  Please provide a step by step response.
  ${data.Installation}

  ## Usage
  Please provide instructions on how to use the application correctly. 
  Provide examples and screenshots if necessary
  ${data.Usage}

  ## License
  Please describe how other users should go about acquiring your product/application.
  ${data.License}

  ## Constributing
  If you would like others to collaborate or add on to your application 
  write a guide about how they should do so.
  ${data.Contributing}

  ## Test
  How can other users test your application? What are things they should try?
  ${data.Test}

  ## Badge
  ${data.Badge}
  `;
  }
  
  module.exports = generateMarkdown;