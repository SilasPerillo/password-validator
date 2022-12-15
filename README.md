# Documentação

# Apresentação (o que é a aplicação)

Esta aplicação foi desenvolvida com o objetivo de validar senhas, que sera recebida por meio de requisição e retornar quais critérios não foram atendidos, ou se a senha atende todos os critérios estabelecidos.

A aplicação foi desenvolvida utilizando a linguagem TypeScript.

Ferramentas usadas:

- node
- SOLID
- POO
- MSC
- GIT
- DOCKER

## Arquitetura

Na arquitetura MSC ela é dividida em 3 etapas Model, Service e Controller.

Onde o **Model** vai comunicar com a base de dados, que no caso deste projeto não houve necessidade.

A função do **Service** é de comunicar com o Model, e onde fica a logica da aplicação.

E o Controller fica responsável de receber os dados da requisição e repassar para o Service

Imagem referente a estrutura de pastas e arquivos utilizando a metodologia MSC:

![Untitled](Documentac%CC%A7a%CC%83o%20ded384ea31734c689dbbaba84960b088/Untitled.png)

## **Primeiro passo**

O projeto foi iniciado configurando o “package.json” com as ferramentas utilizadas, e o “.gitignore” para não subir arquivos desnecessários. 

Instale as dependências usando o comando:

`npm install`


## **App**

Nesta etapa o express é importado para fazer a conexão e aponta para o arquivo de rotas.

## **Server**

O server é criado utilizando o framework express.

Utilizando a biblioteca nodemon para manter a aplicação rodando e atualizada.

Para rodar o nodemon digite no terminal:


`npm run dev`



## **Rota**

O controller recebe os dados da requisição, desconstruindo o body para enviar ao service “src/service/Verify.service”.

No retorno do service, os dados chegam no formato de objeto possuindo duas chaves, statusCode e message. O statusCode contém os códigos de resposta http, e o message o array de resposta com as validações.

heading 2

## **Controller**

O controller recebe os dados da requisição, desconstruindo o body para enviar ao service “src/service/Verify.service”.

No retorno do service, os dados chegam no formato de objeto possuindo duas chaves, statusCode e message. O statusCode contém os códigos de resposta http, e o message o array de resposta com as validações.

## **Service**

O service recebe os dados de login por parâmetro.

O password é desconstruído para ser enviado a função validation “src/validators/validation”.

### **Validation**

A implementação desta função consiste em retornar um array de strings que contém as regras da validação exigidas no password, ou um array vazio no caso do password ser válido.

A fim de manter o código organizado, as constantes auxiliares, como os cálculos de *regex* e chamada da função *validationSpecialChars* são criadas no escopo superior.

- É criado um constante com um array vazio para armazenar as respostas. Em cada if não validado é feito um push para este array.
- No primeiro *if* (linha 11) verifica se o tamanho de caracteres do password é maior que 8, calculando o tamanho da string utilizando a propriedade *length*.
- No segundo *if* (linha 13) verifica se possui pelo menos 3 caracteres **maiúsculos**. O regex da linha 6 é utilizado criando um array com todas as letras maiúsculas, possibilitando o cálculo do tamanho com a propriedade *length*.
- No terceiro *if* (linha 15) e quarto *if* (linha 17) a lógica de verificação é a mesma do segundo if, com a diferença nas letras minúsculas e números com seu tamanhos respectivos.
- No quinto *if* (linha 19) verifica a quantidade de caracteres especiais e compara se possui mais que 2. A função *validationSpecialChars* (linha 9) verifica a existência de caracteres especiais e sua quantidade.
- No quinto *if* (linha 21) verifica se existem caracteres idênticos em sequência. Esta validação é realizada na função *validationNoRepeted* (linha 38).

### **httpHelpers**

Arquivo auxiliar para retorno dos status das validações.

Possui 2 funções que retornam 2 chaves, statusCode e message.

- O statusCode pode retornar 200 (ok) ou 404 (badRequest).
- O message é um objeto que possui 2 chaves: verify e noMatch.

Existem 2 possíveis retornos:

1 - statusCode 200 (*ok*):

- verify retornado é true
- noMatch é um array vazio.

2 - statusCode 404 (*badRequest* ):

- verify retornado é false
- noMatch contém strings com as regras não validadas.

O valor retornado da função validation é armazenado em uma constante, que filtrado pelo if define o retorno de status *badRequest* 
ou *ok.*

## **Testes**

Os testes cobrem a cobertura de integração desta aplicação.

- Para rodar os testes digite no terminal:

`npm test`


- Para rodar os testes com cobertura digite no terminal:


`npm run coverage`


## **Docker**

Esta aplicação está dockerizada e para rodar execute o script no terminal


`npm run docker`


Ou pode rodar sem o script executando no terminal os comandos:

- Na pasta raiz

`docker-compose up -d`


- depois

`docker exec -it password-validator bash`



Dentro do container instale as dependências usando

`npm install`

