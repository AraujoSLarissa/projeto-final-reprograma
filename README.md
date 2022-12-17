# <div align = 'center'> Mapa da Saúde Mental: serviços de atendimento psicológico gratuitos ou com preços acessíveis 💛 </div>
<br>

<div align = "center">

Olá! Seja bem vinde! Este projeto final é fruto da atividade de conclusão do bootcamp Todas em Tech em Back-End da {reprograma}.
 
</div>

<br>
<div align ='justify'>

#  Justificativa

Saúde mental é um tema cada vez mais discutido, principalmente, nos últimos anos após o início da pandemia mundial da covid-19. O Brasil, segundo a Organização Mundial da Saúde (OMS), é o país mais ansioso do mundo e o quinto mais depressivo, no entanto, vemos como os serviços de saúde mental ainda são de difícil acesso para a maioria da população brasileira, especialmente pessoas em situação de vulnerabilidade socioeconômica. Nesse sentido, a ideia do projeto partiu da minha própria experiência com atendimentos psicológicos e a compreensão de quão importante é que todos que precisam, possam ter acesso a esses serviços de forma gratuita ou com valores acessíveis. Uma vez que, saúde é um direito de todos, saúde sendo compreendida, segundo definição da OMS (1996), enquanto um estado de bem-estar físico, mental e social, não somente como a ausência de doença. Compreendemos também que, para que a população brasileira goze de saúde, é necessário que hajam mudanças significativas no contexto socioeconômico, vez que, muitos aspectos da vida afetam o nosso bem-estar. Saúde Mental é para todos!

<div align ='justify'>
<br>

## Sobre o projeto:

O projeto “Mapa da Saúde Mental 💛” visa democratizar e facilitar o acesso da população, inicialmente da cidade de Salvador/Bahia, à informações sobre serviços de atendimento psicológico gratuitos ou com preços acessíveis para que possam cuidar da sua saúde mental.
O projeto é uma Web API rest, desenvolvida utilizando JavaScript e node.js. A aplicação tem integração com um banco de dados não relacional, o MongoDB Atlas, e realiza um CRUD (create, read, update, delete) completo.


<div align ='justify'>
<br>

## Funcionalidades

- Listar todos os serviços de atendimento acessível da API;
- Listar os serviços de atendimento psicológico acessível por meio de filtros;
- Realizar cadastro de serviços de atendimentos psicológicos  gratuitos e/ ou acessíveis;
- Atualizar os cadastros dos serviços de atendimentos psicológicos gratuitos e/ou acessíveis;
- Excluir os cadastros dos serviços de atendimentos psicológicos gratuitos e/ou acessíveis.

<div align ='justify'>
<br>

## 📂 Arquitetura MVC

Foi utilizado no desenvolvimento desse projeto o padrão de arquitetura MVC, chamado em português Modelo-Visão-Controle.

```
📂 projeto-final-reprograma
├─ 📂 assets
├─ 📂 src 
│  ├─ 📂 controllers
│  │  └─ atendimentosAcessiveisController.js
│  ├─ 📂 database
│  │  └─ mongoConnect.js
│  ├─ 📂 models
│  │  └─ AtendimentosAcessiveisSchema.js
│  ├─ 📂 routes
│  │  └─ atendimentosAcessiveisRoutes.js
│  │  └─ indexRoutes.js
│  └─ app.js
├─ .env
├─ .env.example
├─ .gitignore 
├─ package-lock.json
├─ package.json
├─ README.md
├─ server.js
└─ vercel.json
```

## Tecnologias e dependências utilizadas 💻


**Tecnologias**

- JavaScript
- Git/Github
- Node.js
- MongoDB Atlas
- Vercel
- Postman
- Vscode


**Dependências do Projeto** ⚙️

- Express
- Dotenv
- Mongoose
- Cors

**Dependências de desenvolvimento** ⚙️

- Nodemon

<br>

# Rotas/EndPoints

**Rota index**
<div align ='justify'>
<br>

| Método HTTP  | Endpoint                     | Descrição                            |
| ------------ | ---------------------------- | ------------------------------------ |
| GET          | `http://larissa-araujo-projeto-final-reprograma.vercel.app/`     |  Apresentação do projeto    |             |

<br>

**Rotas - Atendimentos acessíveis**

<div align = "center">
<br>

| Rotas                                              | Funções                                                      | Status | 
| ----------------------------------------------------| ------------------------------------------------------------ | ------ | 
| GET /atendimentos-acessiveis/buscar      | Retorna uma lista com todos os serviços de atendimentos psicológicos cadastrados .Acesso a todos os projetos ou os filtrados pelo nome ou palavras-chave (query) | 200    |
| GET /atendimentos-acessiveis/buscar/:id          | Reetorna os dados do serviço de atendimento psicológico filtrado pelo id                                   | 200    | 
| POST /atendimentos-acessiveis/cadastrar       | Cadastra  um novo serviço de atendimento psicológico  gratuito e/ ou com preço acessível, adiciona ele ao banco de dados e retorna o item criado.                                    | 201    | 
| PUT /atendimentos-acessiveis/atualizar/:id  | Atualiza informações de determinado serviço atendimento psicológico  gratuito e/ ou com preço acessível, através do seu  id, e retorna o item atualizado.                               | 200    | 
| DELETE /atendimentos-acessiveis/deletar/:id | Deleta determinado serviço atendimento psicológico  gratuito e/ ou com preço acessível através de seu id.                             | 200    | 

<br>

<div align ='justify'>

# Instalação e colaborações
<br>

1. Faça um fork do projeto e depois faça o clone do repositório com o link do seu fork, para isso, entre na pasta onde você deseja armazená-lo. Abra o **git** nela e digite: 

    ```bash
    $ git clone <link_do_repositorio_forkado>
    ```

2. Para acessar a pasta correta, digite a linha abaixo no **git**: 

   ```bash
    $ cd projeto-final-reprograma
     ```

3. Em seguida, crie sua branch utilizando o comando: 

   ```bash
    $ git checkout -b nome-minha-branch
    ```

4. Em seguida, digite esse comando para instalar as dependências utilizadas neste projeto: 

   ```bash
    $ npm install
    ```

5. Para iniciar o servidor, digite no terminal o comando a seguir: 

   ```bash
    $ npm run dev
    ```   


# Documentação da API 

[Google Docs](https://docs.google.com/document/d/1GruAX6MIY9zsc2Q6JvrBdYjruJLtdyUlvsr9GfrZeVA/edit#)



## Acesse através do Postman:

[Documentação do Postman](https://documenter.getpostman.com/view/24518503/2s8YzXwffM)


<div align ='justify'>
<br>

## Implementações futuras

- Desenvolver um front-end;
- Implementar cadastro e autenticação de usuários;
- Expandir o projeto para alcançar não só Salvador, mas outras cidades do país;
- Implementar testes unitários.


<div align ='justify'>
<br>

## Sobre a autora

<div align = "center">

| <img src = "assets/avatar.png" width="25%" >  

<div align ='justify'>

 Me chamo Larissa Araújo, tenho 26 anos,  sou uma mulher negra,  técnica em Química pelo Instituto Federal de Educação, Ciência e Tecnologia da Bahia, professora pela Universidade Federal da Bahia e desenvolvedora back-end pela {reprograma}. Apaixonada por tecnologia, ciência e artes no geral, procuro sempre aprender coisas novas e a {reprograma} foi um espaço incrível em que pude junto à outras mulheres reprogramar um espaço tão majoritariamente masculino e provar que lugar de mulher é onde ela quiser.


<br>

Contato:

E-mail: larissa.de.araujo@outlook.com

[LinkedIn](https://www.linkedin.com/in/larissa-ara%C3%BAjo-a38994162/)


