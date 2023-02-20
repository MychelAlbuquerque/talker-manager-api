# Talker Manager API :desktop_computer: :pencil:

### API desenvolvida como um sistema de gerenciamento de palestrantes. Ela permite a criação, atualização, remoção e busca de informações, um CRUD.

## :large_blue_circle: Tecnologias utilizadas:
Node.js

Express

Docker

Json Web Token (JWT)


## :large_blue_circle: Como executar:

Para executar a API, é necessário ter o Docker instalado. Depois, basta executar os seguintes comandos:

Primeiro, será necessaŕio efetuar o clone do repositório. Execute o comando:

:small_orange_diamond:git clone git@github.com:MychelAlbuquerque/talker-manager-api.git

Depois, acesse a pasta para onde o repositório foi clonado e execute o docker compose:

:small_orange_diamond: docker-compose up -d 


Agora, acesse o terminal Bash do container que foi criado:

:small_orange_diamond: docker exec -it talker_manager bash


Finalmente, instale as dependências e suba o servidor que irá prover os dados da API:

:small_orange_diamond: npm install 

:small_orange_diamond: npm run start

#### :green_circle: Tudo pronto! A API estará rodando na porta 3000.

## :large_blue_circle: Endpoints:

GET /talker :arrow_right: retorna a lista de todos os palestrantes cadastrados.

GET /talker/:id :arrow_right: retorna o palestrante correspondente ao Id informado.

POST /login :arrow_right: autentica o usuário e retorna um token de acesso utilizando JWT.

POST /talker :arrow_right: cadastra um novo palestrante.

PUT /talker/:id :arrow_right: atualiza os dados de um palestrante já cadastrado.

DELETE /talker/:id :arrow_right: remove um palestrante cadastrado.


## :large_blue_circle: Validações
Com o intuito de manter o código funcional e não permitir a inserção de dados incorretos as seguintes validações são realizadas nos dados informados:

Email: deve estar em um formato válido.

Senha: deve ter no mínimo 6 caracteres.

Nome: deve ter no mínimo 3 caracteres.

Idade: deve ser um número inteiro positivo.

Talk: deve ter no mínimo 30 caracteres.

Rate: deve ser um número inteiro de 1 a 5.

# Obrigado! :handshake: E... Me conta ai! :thumbsup:

Agradeço muito por ter visitado meu repositório! 

Caso tenha qualquer sugestão ou algum comentário, vou ficar muito feliz em saber!

Mychel Albuquerque

mychelalbu@gmail.com

Projeto desenvolvido durante minha formação Fullstack na Trybe.
