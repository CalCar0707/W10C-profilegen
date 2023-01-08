//function to generate roster
function generateHtml(response){
    return `Team Manager: ${response.managername}
    
    Employee ID: ${response.employeeid}
    
    Email address: ${response.email}
    
    Office number:${response.officenum}
    `;
}


//export file
module.exports = generateHtml;
