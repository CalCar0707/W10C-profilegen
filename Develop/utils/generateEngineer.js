function generateEngineer(response){
    return ` <section class="infocard" id="engineer"><h2>Engineer name:</h2> ${response.engname}
    
    <h3>Engineer ID:</h3> ${response.engid}
    
    <h4>Engineer email:</h4> <a href="mailto:${response.engemail}">${response.engemail}</a>
    
    <h4>Engineer Github username:</h4> <a href="https://github.com/${response.enggithub}">${response.enggithub}</a>
    </section>`;
};

module.exports = generateEngineer;