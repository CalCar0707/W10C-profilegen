function generateEngineer(response){
    return ` Engineer name: ${response.engname}
    
    Engineer ID: ${response.engid}
    
    Engineer email: <a href="mailto:${response.engemail}">${response.engemail}</a>
    
    Engineer Github username: <a href="https://github.com/${response.enggithub}">${response.enggithub}</a>
    `;
};

module.exports = generateEngineer;