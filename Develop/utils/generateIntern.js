function generateIntern(response){
    return `Intern name: ${response.intname}
    
    Intern ID: ${response.intid}
    
    Intern email: <a href="mailto:${response.intemail}">${response.intemail}</a>
    
    Intern school: ${response.intschool}
    `;
}


module.exports = generateIntern;