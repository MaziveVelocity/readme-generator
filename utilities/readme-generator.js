const { error } = require('console');
const fs = require('fs');

function gDescription(des) {
    // generates description section
    return `
# Description

${des}
`
}

function gTOC() {
    // generates Table of Contents section
    return `
# Table of Contents

* [Installation](#installation )
* [Usage](#usage)
* [License](#license)
* [Contributions](#contributions)
* [Testing](#test)
* [Questions](#questions)
`
}

function gInstall(install) {
    // generates install sectoin
    return `
# Installation

${install}
`
}

function gUsage(usage) {
    // generates usage section
    return `
# Usage 

${usage}
`
}

function gLicense(description, name) {
    // generates license section
    return `
# License 
## (${name})

${description}
`
}

function gContributions(contr) {
    // generates contributions section
    return `
# Contributions

${contr}
`
}

function gTests(test) {
    // generates test section
    return `
# Test

${test}
`
}

function gQuestions(username, email) {
    // generates question section
    return `
# Questions

Email: <${email}>     GitHub: [${username}](http://github.com/${username})
    `
}

module.exports = gReadme = (data) => {
    // write file function
    const { title, description, install, usage, contribution, test, license, username, email } = data;
    let currentLicense;
    const licenses = {
        apache: {
            name: "Apache 2.0",
            badge: "[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)",
            description: `
The Apache License is a permissive free software license written by the Apache Software Foundation (ASF). It allows users to use the software 
for any purpose, to distribute it, to modify it, and to distribute modified versions of the software under the terms of the license, without concern for 
royalties. The ASF and its projects release their software products under the Apache License. The license is also used by many non-ASF projects.`
        },
        eclipse: {
            name: "Eclipse Public License 1.0",
            badge: "[![License](https://img.shields.io/badge/License-EPL%201.0-red.svg)](https://opensource.org/licenses/EPL-1.0)",
            description: `
The Eclipse Public License (EPL) is a free and open source software license most notably used for the Eclipse IDE and 
other projects by the Eclipse Foundation. It replaces the Common Public License (CPL) and removes certain terms relating to litigations related to patents.
The Eclipse Public License is designed to be a business-friendly free software license, and features weaker copyleft provisions 
than licenses such as the GNU General Public License (GPL). The receiver of EPL-licensed programs can use, modify, copy and distribute 
the work and modified versions, in some cases being obligated to release their own changes.`
        },
        mit: {
            name: "The MIT License",
            badge: "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)",
            description: `
The MIT License is a permissive free software license originating at the Massachusetts Institute of Technology (MIT) 
in the late 1980s. As a permissive license, it puts only very limited restriction on reuse and has, therefore, high license compatibility. 
The Wikipedia and Wikimedia Commons projects use the alternative name Expat License.`
        },
        gnu: {
            name: "GNU GPL v3",
            badge: "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)",
            description: `
The GNU General Public License is a free, copyleft license for software and other kinds of works.
The licenses for most software and other practical works are designed to take away your freedom to share and change the works.
By contrast, the GNU General Public License is intended to guarantee your freedom to share and change all versions of a 
program--to make sure it remains free software for all its users. We, the Free Software Foundation, use the GNU General Public 
License for most of our software; it applies also to any other work released this way by its authors. You can apply it to your programs, too.`
        },
        none: {
            name: "No License",
            badge: "",
            description: `
When you make a creative work (which includes code), the work is under exclusive copyright by default. Unless you include a license
that specifies otherwise, nobody else can copy, distribute, or modify your work without being at risk of take-downs, shake-downs, or 
litigation. Once the work has other contributors (each a copyright holder), “nobody” starts including you.
            `
        }
    }

    switch (license) {
        case "Apache": currentLicense = licenses.apache;
            break;
        case "MIT": currentLicense = licenses.mit;
            break;
        case "Eclipse": currentLicense = licenses.eclipse;
            break;
        case "GNU": currentLicense = licenses.gnu;
            break;
        case "None": currentLicense = licenses.none;
            break;
    }

    var content = `
# ${title}      ${currentLicense.badge}

${gDescription(description)}

${gTOC()}

${gInstall(install)}

${gUsage(usage)}

${gLicense(currentLicense.description, currentLicense.name)}

${gContributions(contribution)}

${gTests(test)}

${gQuestions(username, email)}
    `;

    fs.writeFile("README.md", content, error => {
        if (error) {
            console.error(error)
            return
        }
    })
    console.log(content);
}