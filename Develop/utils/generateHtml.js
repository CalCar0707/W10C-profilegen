//function to generate roster
function generateHtml(response){
    return `Team Manager: ${response.managername}
    
    Employee ID: ${response.employeeid}
    
    Email address: ${response.email}
    
    Office number:${response.officenum}
    `;
    
};

function engineer(response){
    return ` Engineer name: ${response.engname}
    
    Engineer ID: ${response.engid}
    
    Engineer email: ${response.engemail}
    
    Engineer Github username: ${response.enggithub}
    `;
}

//export file
module.exports = generateHtml;
