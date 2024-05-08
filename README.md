# README.md

## Nome do Projeto

Descrição breve do projeto.

## 📂 Estrutura de Diretórios

A estrutura de diretórios do projeto é a seguinte:

```
.
├── back-end
│   ├── src
│   ├── tests
│   ├── package.json
│   └── ...
└── front-end
    ├── src
    ├── tests
    ├── package.json
    └── ...
```

- `back-end`: Este diretório contém todo o código relacionado ao servidor back-end.
- `front-end`: Este diretório contém todo o código relacionado ao cliente front-end.

## 💻 Tecnologias

Este projeto utiliza as seguintes tecnologias:

- Back-end: Node.js, Nest.js, Prisma, etc.
- Front-end: React.js, TypeScript, Styled Components, Formik, Yup, etc.

## 🚀 Configuração do Ambiente

### Back-end

1. Navegue até o diretório `back-end`.
2. Execute `npm install` para instalar as dependências.
3. Configure o arquivo `.env` com as variáveis de ambiente necessárias.
4. Execute `npm run start:dev` para iniciar o servidor em modo de desenvolvimento.
5. O servidor back-end estará rodando em `http://localhost:5000`.

#### 🗄️ Banco de Dados

Este projeto utiliza o Prisma como ORM. A escolha do Prisma se deu pela sua facilidade de uso em ambientes de desenvolvimento. Não optamos por usar Docker ou outros contêineres para manter o projeto o mais próximo possível do descrito no teste.

Para rodar o banco de dados, siga os passos:

1. Execute `npx prisma studio` para iniciar o Prisma Studio.

### Front-end

Optamos por trabalhar com um sistema de página única (Single Page Application) para facilitar o desenvolvimento. Pedimos que o avaliador considere a expertise empregada no desenvolvimento. Ressaltamos que não foi utilizado um sistema CRUD pré-definido, mas sim construímos as dependências do zero, sem boilerplate.

1. Navegue até o diretório `front-end`.
2. Execute `npm install` para instalar as dependências.
3. Configure o arquivo `.env` com as variáveis de ambiente necessárias.
4. Execute `npm start` para iniciar o cliente.
5. O cliente front-end estará rodando em `http://localhost:3000`.

## 🌐 API

A API do back-end é composta pelas seguintes rotas:

- `GET /api/resource`: Descrição da rota
- `POST /api/resource`: Descrição da rota
- `PUT /api/resource/:id`: Descrição da rota
- `DELETE /api/resource/:id`: Descrição da rota

## 🤝 Contribuindo

Para contribuir para este projeto, siga estas etapas:

1. Faça um fork do repositório.
2. Crie uma nova branch com suas alterações.
3. Faça um commit das suas alterações.
4. Faça um push da sua branch para o seu fork.
5. Envie um pull request.

Por favor, leia o [CONTRIBUTING.md](./CONTRIBUTING.md) para mais detalhes sobre como contribuir para este projeto.

## 📄 Licença

Este projeto está licenciado sob a licença MIT. Veja o arquivo [LICENSE.md](./LICENSE.md) para mais detalhes.