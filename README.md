Visão Geral do Projeto

Este é um projeto de uma loja online desenvolvida utilizando uma stack de tecnologia moderna, incluindo um frontend em React, estilização com Material UI, e um backend baseado em Node.js e Express. O objetivo deste projeto é oferecer uma experiência de compra integrada e responsiva para os usuários, com funcionalidades como gerenciamento de produtos, autenticação de usuários e gerenciamento de pedidos.

Tecnologias Utilizadas

Frontend: React.js, Material UI, Axios

Backend: Node.js, Express.js, Sequelize, SQLite

Estilização: CSS, Material UI

Autenticação: JSON Web Token (JWT)

Banco de Dados: SQLite

Estrutura de Pastas

frontend/: Contém todo o código do frontend, incluindo componentes React, contexto de autenticação, estilização e serviços para comunicação com o backend.

backend/: Contém o código do backend, incluindo modelos Sequelize, controladores, e a configuração do servidor Express.

data/: Contém o banco de dados SQLite utilizado no projeto.

Backend

Instalação

Para instalar as dependências do backend, execute o seguinte comando na pasta backend/:
npm install

Executando o Servidor

Para iniciar o servidor backend, execute o seguinte comando:
npm start

Por padrão, o servidor estará executando na porta 5000. Certifique-se de que todos os modelos e tabelas estão configurados corretamente no SQLite.

Endpoints da API

POST /api/auth/register: Cria um novo usuário no sistema.

POST /api/auth/login: Realiza login e gera um token JWT para autenticação.

GET /api/products: Lista todos os produtos disponíveis.

POST /api/orders: Cria um novo pedido, vinculando-o ao usuário autenticado.

Frontend

Instalação

Na pasta frontend/, execute o comando abaixo para instalar todas as dependências necessárias:
npm install

Executando o Projeto

Para iniciar o frontend, execute o seguinte comando:
npm run dev

O frontend estará disponível no endereço http://localhost:5173.

Componentes Principais

Header

Componente de navegação principal que inclui links para as páginas de Login, Cadastro, Carrinho e Loja.

Utiliza o Material UI para estilização e é responsivo.

ProductList

Lista todos os produtos da loja, cada um com opções de "Adicionar ao Carrinho" e "Ver Detalhes".

Utiliza o Material UI para exibição dos cards dos produtos.

Cart

Exibe os produtos que foram adicionados ao carrinho.

Permite visualizar o total dos produtos e navegar para o checkout.

Checkout

Formulário onde o usuário insere o endereço de entrega e informações de pagamento.

Banco de Dados

Utiliza o SQLite como banco de dados para armazenar informações de usuários, produtos e pedidos.

O Sequelize é utilizado para definir os modelos e interagir com o banco de dados.

Autenticação e Segurança

A autenticação é feita utilizando JWT.

As senhas dos usuários são criptografadas usando bcrypt.

Middleware é utilizado para garantir que apenas usuários autenticados possam realizar certas ações, e que apenas administradores possam acessar rotas específicas.

Estilização

A estilização é feita principalmente usando Material UI.

O tema predominante é escuro, com uma paleta de cores azul e elementos visuais para modernizar o design da interface.

Como Contribuir

Fork o repositório.

Crie uma branch para a sua feature (git checkout -b feature/nova-feature).

Faça commit das suas alterações (git commit -m 'Adicionando nova feature').

Faça push para a branch (git push origin feature/nova-feature).

Abra um Pull Request.
