Feature: Swag Labs
Como usuário, gostaria de realizar o login no site Swag Labs com as quatro opções de usuários existentes no portal

  Background: 
    Given que eu acesse o site swag labs

@focus
  Scenario: Validar login no site swag labs com o usuário standard com sucesso
    When preencher usuario
    And preencher senha
    And clicar no botao login
    Then devo ver a mensagem swag labs na tela inicial
