const usersData = require('../login/users.data');
const usersElement = require('../login/users.element');

module.exports = { 
    
    preencherNomeUsuario: function(){
        cy.get(usersElement.fieldUserName).clear().type(usersData.userNameStandard)   
    },

    preencherSenha: function(){
        cy.get(usersElement.fieldPassword).clear().type(usersData.passwordForAllUsers)   
    },

    clicarBotaoLogin: function(){        
        cy.get(usersElement.buttonLogin).click({force:true})
        cy.wait(1000) 
    },

    assertTextoSwagLabs: function(){
        cy.contains(usersData.assertTextSwagLabs).should('to.have.length', 1)
    },

    realizarLoginComUsuarioStandard: function(){  
        cy.get(usersElement.fieldUserName).clear().type(usersData.userNameStandard)
        cy.get(usersElement.fieldPassword).clear().type(usersData.passwordForAllUsers) 

        cy.get(usersElement.buttonLogin).click({force:true})
        cy.wait(1000) 

        cy.contains(usersData.assertTextSwagLabs).should('to.have.length', 1)
    },

}