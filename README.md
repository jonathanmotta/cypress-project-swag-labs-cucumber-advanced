# cypress-project-swag-labs-cucumber-advanced
Login no site Swag Labs, utilizando a quebra em pages objectives com Cypress e Cucumber em testes E2E.

# Para instalar o Cypress no Windows 11, siga os seguintes passos:

Certifique-se de ter o Node.js instalado no seu computador. 
Você pode baixar a versão mais recente do Node.js em https://nodejs.org/en/download/.

*Instalar o visual code em sua máquina: https://code.visualstudio.com/download

Abra o terminal do Windows PowerShell como administrador.

1. Navegue até o diretório onde você deseja criar seu projeto Cypress. 
Por exemplo, se você deseja criar um projeto chamado "meu-projeto-cypress", digite o seguinte comando:
cd C:\caminho\para\meu-projeto-cypress

2. Inicialize um novo projeto Node.js no diretório digitando o seguinte comando:
npm init --yes

3. Instale o Cypress usando o seguinte comando:
npm install -D cypress@9.7.0

4. Após a instalação, você pode abrir o Cypress digitando o seguinte comando no terminal:
npx cypress open

O Cypress abrirá uma janela onde você pode selecionar o arquivo de teste que deseja executar.
Pronto! Agora você tem o Cypress instalado e pode começar a escrever seus testes.

# Install the plugin by running:
npm install -D cypress-cucumber-preprocessor

# Cypress Configuration
Add it to your plugins:
cypress/plugins/index.js

const cucumber = require('cypress-cucumber-preprocessor').default

module.exports = (on, config) => {
  on('file:preprocessor', cucumber())
}

Add support for feature files to your Cypress configuration
cypress.json

{
  "testFiles": "**/*.feature"
}

Configuration
Please make use of cosmiconfig to create a configuration for the plugin, for example, by adding this section to your package.json:

"cypress-cucumber-preprocessor": {
  "nonGlobalStepDefinitions": true
}

# Exemplo do Fluxo:
![image](https://user-images.githubusercontent.com/43069521/230457744-2edec592-c6b7-4263-ad6b-9e107ea63f26.png)
![image](https://user-images.githubusercontent.com/43069521/230457656-15ce5c18-a00c-4369-ad77-dc0ef21dc432.png)

