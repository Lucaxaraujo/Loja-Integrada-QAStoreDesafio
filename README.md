## Loja-Integrada-QAStoreDesafio
Repositório contendo automações em Cypress de alguns cenários de testes do desafio técnico para a vaga de QA da Loja Integrada.

<!-- ABOUT THE PROJECT -->

### Pré-requisitos

É necessário que a máquina possua as ferramentas NodeJS + NPM instalados para rodar o projeto.

### Instalação 

1. Clone este repositório
   ```sh
   git clone https://github.com/Lucaxaraujo/QA-Store-Desafio.git
   ```
2. Instale os os pacotes e dependências via NPM
   ```sh
   npm install
   ```


<!-- USAGE EXAMPLES -->
## Como utilizar

1. Caso seja a primeira vez utilizando Cypress, abra o terminal do editor de texto e digite o código abaixo para configurar o Testrunner da ferramenta
   ```sh
   npm run cy:firsttime
   ```
2. Se já tiver utilizado Cypress, digite o seguinte código no terminal
   ```sh
   npm run cy:open
   ```
3. Quando o dashboard do Cypress Testrunner abrir, selecione a primeira opção "E2E Testing"   
 <img src="images/1-dashboard%20setup.png" alt="setup-first-step">

4. Escolha o navegador que desejar para rodar a automação   
 <img src="images/2-dashboard%20setup.png" alt="setup-second-step">

5. Na janela que será aberta, na listagem das specs, selecione qual cenário automatizado deseja executar e aguarde o teste iniciar automaticamente :)   
 <img src="images/3-dashboard%20specs.png" alt="setup-choose-spec">


<!-- TECH -->
### Tecnologias utilizadas

* [![Cypress][Cypress]][Cypress-url]
* [![JavaScript][JavaScript]][JavaScript-url]
* [![Mocha][Mocha]][Mocha-url]


<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->

[Cypress]: https://img.shields.io/badge/CYPRESS-%23121011.svg?&style=flat&logo=cypress&logoColor=white
[Cypress-url]: https://docs.cypress.io/guides/overview/why-cypress
[JavaScript]: https://img.shields.io/badge/JAVASCRIPT-323330.svg?&style=flat&logo=javascript&logoColor=%23F7DF1E
[JavaScript-url]: https://developer.mozilla.org/pt-BR/docs/Web/JavaScript
[Mocha]: https://img.shields.io/badge/MOCHA-BB987B.svg?&style=flat&logo=mocha&logoColor=white
[Mocha-url]: https://mochajs.org/api/mocha.js.html

