//function to generate roster
function generateHtml(response){
    return `Team Manager: ${response.managername}
    
    Employee ID: ${response.employeeid}
    
    Email address: <a href="mailto:${response.email}">${response.email}</a>
    
    
    Office number:${response.officenum}
    `;
    
};

function engineer(response){
    return ` Engineer name: ${response.engname}
    
    Engineer ID: ${response.engid}
    
    Engineer email: <a href="mailto:${response.engemail}">${response.engemail}</a>
    
    Engineer Github username: ${response.enggithub}
    `;
}

function intern(response){
    return `Intern name: ${response.intname}
    
    Intern ID: ${response.intid}
    
    Intern email: <a href="mailto:${response.intemail}">${response.intemail}</a>
    
    Intern school: ${response.intschool}
    `;
}

//export file
module.exports = generateHtml;
