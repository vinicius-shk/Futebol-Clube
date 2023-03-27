# Futebol-Clube

Projeto de um sistema gerenciamento de campeonato de futebol. Projeto é Full-Stack composto por uma API REST e uma pagina Front-End feita com React.js. A integração foi feita com Axios.

### Tecnologias utilizadas

- **TypeScript**
- **React.js**
- **Node.js**
- **Express.js**
- **Sequelize**
- **MySQL**

### Para rodar localmente

Clone o projeto para o seu repositório local.

```
git clone git@github.com:vinicius-shk/Futebol-Clube.git

```

Acesse a raiz do projeto e rode os comandos para instalar as dependências e subir o Docker

```
cd Futebol-Clube && npm i && docker-compose up -d

```

Acesse o container app_backend e popular o db

```
docker exec app_backend -it bash && npm run db:reset

```

Página da aplicação disponível na porta **3000** em [https://localhost:3000](https://localhost:3000/)
Faça as requisições de acordo com a documentação na porta **3001**
