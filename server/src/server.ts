import express from 'express';
import routes from './routes';


const app = express();

app.use(express.json());

app.use(routes);

// Rota: Endereço completo da requisição
// Recurso: Qual entidade estamos acessando do sistema 

// GET :  buscar uma ou mais informações do backend
// POST : criar uma nova informação no backend
// PUT : atualizar uma informação existente no backend
// DELETE: remover uma informação do backend

// POST https://localhost:3333/users = Criar um usuário
// GET https://localhost:3333/users = Listar usuários
// GET https://localhost:3333/users/5 = Buscar os dados do usuário com ID 5

// Resquest Param: Parâmetros que vem na própria rota que identificam um recurso
// Query Params : são parâmetros que vem na própria rota geralmente opcionais para filtos, paginação
// Request body : Parâmetros para criação/atualização de informações

// SELECT * FROM users WHERE name = 'Diego'
// knex('users').where('name', 'Diego').select('*')

/* app.post('/users', (request,response) => {
    const data = request.body;
    console.log(data);
    
    
    const user = {
        name: data.name,
        email: data.email,
    };
  return response.json(user);
});

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


*/

const users = [
    'Diego',
    'Robson',
    'Carlos',
    'Daniel'
        ];

     


app.listen(3333);
