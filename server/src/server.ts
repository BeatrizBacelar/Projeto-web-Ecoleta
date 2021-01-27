import express from 'express';

const app = express()

// Rota: Endereço completo da requisição
// Recurso: Qual entidade estamos acessando do sistema 

// GET :  buscar uma ou mais informações do backend
// POST : criar uma nova informação no backend
// PUT : atualizar uma informação existente
// DELETE: remover uma informação do backend

// POST https://localhost:3333/users = Criar um usuário
// GET https://localhost:3333/users = Listar usuários
// GET https://localhost:3333/users/5 = Buscar os dados do usuário com ID 5

// Resquest Param: Parâmetros que vem na própria rota que identificam um recurso
// Query Params : são parâmetros que vem na própria rota geralmente opcionais para filtos, paginação
// Request body : Parâmetros para criação/atualização de informações

const users = [
    'Diego',
    'Robson',
    'Carlos',
    'Daniel'
        ];

app.get('/users', (request, response) => {
    
const search = String(request.query.search);

const filteredUsers = search ? users.filter(user => user.includes(search)) : users;

 return  response.json(filteredUsers);
});

app.get('/users/:id', (request, response) => {
    const id = Number(request.params.id);

    const user = users[id];

    return response.json(user);
});


app.post('/users', (resquest,response) => {
    const user = {
        name: 'Diego',
        email: 'diego@rocketseat.com.br'
    };
  return response.json(user);
});

app.listen(3333);
