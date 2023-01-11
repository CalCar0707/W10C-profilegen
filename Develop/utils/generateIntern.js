function generateIntern(response){
    return `<section class="infocard" id="intern><h2>Intern name:</h2> ${response.intname}
    
    <h3>Intern ID:</h3> ${response.intid}
    
    <h4>Intern email:</h4> <a href="mailto:${response.intemail}">${response.intemail}</a>
    
    <h4>Intern school:</h4> ${response.intschool}</section>
    `;
}


module.exports = generateIntern;