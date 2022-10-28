// Function to generate markdown for README
// credit "https://opensource.org/licenses" 
function generateMarkdown(data) {
  const badgeLicense = data.license.split(" ").join("%20");
  const urlLicense = data.license.split(" ").join("-");

  return `# ${data.title}
  
  [![License: ${data.license}](https://img.shields.io/badge/License-${badgeLicense}-blue.svg)](https://opensource.org/licenses/${urlLicense})
  ## Description
  ${data.description}
  ## Table of Contents
  - [Installation](#installation)
  - [Usage](#usage)
  - [Description](#description)
  - [License](#license)
  - [Contributing](#contributing)
  - [Tests](#tests)
  - [Questions](#questions)
  
  ## Installation
  ${data.installation}
  ## Usage
  ${data.usage}
  ## description
  ${data.description}
  ## License
  [![License: ${data.license}](https://img.shields.io/badge/License-${badgeLicense}-blue.svg)](https://opensource.org/licenses/${urlLicense})
  
  This application is covered by ${data.license} license, available at:
  https://opensource.org/licenses/${urlLicense}
  ## Contributing
  ${data.contributing}
  ## Tests
  ${data.tests}
  ## Questions
  If you have any questions please contact me at:
   - GitHub account:https://github.com/${data.github}
   - e-mail account: ${data.email}
 
`;
}

module.exports = generateMarkdown;
