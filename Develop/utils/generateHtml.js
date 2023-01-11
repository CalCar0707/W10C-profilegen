
//function to generate roster
function generateHtml(response){
    return `
    <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="./utils/styles.css">
    <title>My Team</title>
</head>

    <h1> My Team</h1>

    Team Manager: ${response.managername}
    
    Employee ID: ${response.employeeid}
    
    Email address: <a href="mailto:${response.email}">${response.email}</a>
    
    
    Office number:${response.officenum}
    `;
    
};


//export file
module.exports = generateHtml;

