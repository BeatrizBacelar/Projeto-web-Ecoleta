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

app.get('/users', (request, response) => {
    console.log('Listagem de usuários');

// JSON

    response.json([
'Diego',
'Robson',
'Carlos',
'Daniel'
    ]);
});

app.listen(3333);
