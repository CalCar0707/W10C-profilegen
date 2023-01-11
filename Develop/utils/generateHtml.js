
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

   <section class="infocard" id="manager"> <h2>Team Manager:</h2> ${response.managername}
    
    <h3>Employee ID:</h3> ${response.employeeid}
    
    <h4>Email address:</h4> <a href="mailto:${response.email}">${response.email}</a>
    
    
    <h4>Office number:</h4>${response.officenum} </section>
    `;
    
};


//export file
module.exports = generateHtml;

