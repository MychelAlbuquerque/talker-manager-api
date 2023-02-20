#Talker Manager API
##API desenvolvida como um sistema de gerencimento de palestrantes. Ela permite a criação, atualização, remoção e busca de palestrantes, um CRUD.

##Tecnologias utilizadas:
Node.js
Express
Docker
Nodemon
Json Web Token (JWT)


Como executar
Para executar a API, é necessário ter o Docker instalado. Após isso, basta rodar o seguinte comando na pasta do projeto:

Copy code
docker-compose up
A API estará disponível no endereço http://localhost:3000.

Endpoints
A API possui os seguintes endpoints:

GET /talker: retorna a lista de todos os palestrantes cadastrados.
GET /talker/:id: retorna o palestrante correspondente ao ID informado.
POST /login: autentica o usuário e retorna um token de acesso.
POST /talker: cadastra um novo palestrante.
PUT /talker/:id: atualiza os dados de um palestrante já cadastrado.
DELETE /talker/:id: remove um palestrante cadastrado.
Validações
As seguintes validações são realizadas nos dados informados:

Email: deve estar em um formato válido.
Senha: deve ter no mínimo 6 caracteres.
Nome: deve ter no mínimo 3 caracteres.
Idade: deve ser um número inteiro positivo.
Talk: deve ter no mínimo 30 caracteres.
Rate: deve ser um número inteiro de 1 a 5.
Exemplo de uso
Para cadastrar um novo palestrante, faça uma requisição HTTP POST para o endpoint /talker, informando os seguintes dados no corpo da requisição:

json
Copy code
{
  "name": "Fulano de Tal",
  "age": 30,
  "talk": "Como ser um bom palestrante",
  "rate": 4
}
A API retornará os dados do novo palestrante cadastrado:

json
Copy code
{
  "id": 1,
  "name": "Fulano de Tal",
  "age": 30,
  "talk": "Como ser um bom palestrante",
  "rate": 4
}
Para atualizar os dados de um palestrante já cadastrado, faça uma requisição HTTP PUT para o endpoint /talker/:id, informando o ID do palestrante a ser atualizado e os novos dados no corpo da requisição:

json
Copy code
{
  "name": "Fulano de Tal",
  "age": 35,
  "talk": "Como ser um bom palestrante",
  "rate": 5
}
A API retornará os dados atualizados do palestrante:

json
Copy code
{
  "id": 1,
  "name": "Fulano de Tal",
  "age": 35,
  "talk": "Como ser um bom palestrante",
  "rate": 5
}
Para remover um palestrante cadastrado, faça uma requisição HTTP DELETE para o endpoint /talker/:id, informando o ID do palestrante a ser removido.

Autor
Essa API foi desenvolvida por [Seu nome aqui].
