# Gym Check-in

## O que é isso?

É uma aplicação para check-in em academias, tipo o Gympass.

## Requisitos funcionais (RF)

- [x] Deve ser possível se cadastrar;
- [x] Deve ser possível se autenticar;
- [x] Deve ser possível obter o perfil de um usuário logado;
- [x] Deve ser possível obter o número de check-ins realizados pelo usuário logado;
- [x] Deve ser possível o usuário obter seu histórico de check-ins;
- [x] Deve ser possível o usuário buscar academias próximas (até 10 km);
- [x] Deve ser possível o usuário buscar academias pelo nome;
- [x] Deve ser possível o usuário realizar check-in em uma academia;
- [x] Deve ser possível validar o check-in de um usuário;
- [x] Deve ser possível cadastrar uma academia.

## Regras de negócio (RN)

- [x] O usuário não deve poder se cadastrar com um e-mail duplicado;
- [x] O usuário não pode fazer 2 check-ins no mesmo dia;
- [x] O usuário não pode fazer check-in se não estiver perto (100 metros) da academia;
- [x] O check-in só pode ser validado até 20 minutos após criado;
- [x] O check-in só pode ser validado por administradores;
- [x] A academia só pode ser cadastrada por administradores.

## Requisitos não-funcionais (RNF)

- [x] A senha do usuário precisa estar criptografada;
- [x] Os dados da aplicação precisam estar persistidos em um banco PostgreSQL;
- [x] Todas listas de dados precisam estar paginadas com 20 itens por página;
- [x] O usuário deve ser identificado por um JWT.

## Como executar o projeto?

0. Tenha o Node.js e o Docker instalados;
1. Clone o projeto e acesse a pasta raiz;
2. Copie o arquivo `.env.example` e renomeie para `.env`;
3. Edite o arquivo `.env` inserindo as variáveis conforme necessário;
4. Execute `npm i` para instalar as dependências da aplicação;
5. Execute `docker compose up -d` para iniciar o serviço de banco de dados;
6. Execute `npx prisma migrate dev` para aplicar as migrations ao banco;
7. Execute `npm run start:dev` para rodar a aplicação.

## Como executar os testes?

### Testes unitários

- `npm run test` para executar uma vez;
- `npm run test:watch` para manter o monitoramento;

### Testes E2E

- `npm run test:e2e` para executar uma vez;
- `npm run test:e2e:watch` para manter o monitoramento;

Também é possível acessar uma interface para o banco de dados executando o Prisma Studio com o comando `npx prisma studio`.