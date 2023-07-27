<h1 align="center">Code Burguer 🍔</h1>

![Gif do Teste](./src/assets/Gif.gif)

> O sistema é uma simulação de uma hamburgueria real. Inclui sistema de login, registro, exibição de produtos e categorias, sistema de carrinho e tela de administrador para a criação de novos produtos

Confira a aplicação: https://interface-code-club-burguer.vercel.app

## :page_facing_up: Explicação

A primeira página do projeto é a página de login que apresenta os campos de e-mail e senha. Ambos os campos podem ser preenchidos após criar uma conta na página de registro e acessar a página principal.

A página de cadastro possui 4 campos a serem preenchidos: nome, e-mail, senha e confirmação de senha. Os campos são validados, portanto, devem atender a alguns requisitos, como não deixar nenhum campo em branco, e-mail válido, senha de no mínimo 6 dígitos. Além disso, os campos senha e confirmação de senha devem corresponder. Se não forem preenchidos corretamente, os inputs que não estão corretos ficarão em vermelho e com uma mensagem descrevendo o que está causando o erro.

Após a criação da conta, os dados serão armazenados no banco de dados PostgreSQL, que está armazenado na nuvem, o que possibilitará o acesso através da página de login. O login deve ser preenchido com o e-mail idêntico ao cadastrado, e é sensível a letras maiúsculas e minúsculas, assim como a senha.

Ao fazer o login, o usuário será direcionado para a página principal, que apresenta diversas seções e um menu com a opção de ir à página de produtos, que exibe todos os produtos disponíveis. Há outro botão de carrinho para o usuário ver os itens que foram colocados no carrinho, e um botão de logout que o desconecta da página.

A página inicial é responsiva e apresenta um carrossel de categorias e outro carrossel de produtos em oferta.

Não é possível acessar a página inicial ou qualquer outra página sem estar logado porque é uma rota privada, então você precisa registrar uma conta. Para sair, basta clicar no botão de menu conforme mencionado no parágrafo acima.

A tela de produtos lista todos os produtos disponíveis no site, sendo também possível ver esses produtos por categoria, simplesmente selecionando uma das opções que estão no menu superior. O usuário poderá adicionar qualquer produto ao carrinho, sendo redirecionado imediatamente para a página do carrinho após escolher o produto.

A tela de carrinho lista os produtos que o usuário escolheu, mostrando o nome, quantidade, foto do produto e preço total. Há uma seção onde será feita a soma de todos os produtos, juntamente com o valor da taxa de entrega. Ao clicar no botão de finalizar, o pedido será automaticamente registrado no banco de dados MongoDB e será exibido na tela do administrador.

A tela do administrador é totalmente separada do restante da aplicação. Para que um usuário consiga acessar, é necessário ter o email e a senha cadastrados diretamente no banco de dados. Existem três seções para o administrador controlar, sendo elas:
- Pedidos: Nesta seção, o administrador conseguirá visualizar todos os pedidos dos clientes, incluindo a data do pedido, o ID do cliente, o nome, a foto do produto e um seletor para manipular o andamento do pedido em tempo real.
- Listar Produtos: Nesta seção, o administrador conseguirá ver todos os produtos já cadastrados, incluindo detalhes completos de cada um, inclusive se o produto está em oferta ou não. O usuário também terá a possibilidade de editar um produto específico, clicando em um botão ao lado do produto.
- Novo Produto: Nesta seção, o usuário conseguirá cadastrar um novo produto, sendo obrigatório preencher todos os 4 campos, que são: nome, preço, foto do produto e categoria. Após a criação do produto, o usuário será redirecionado para a página de listagem dos produtos.

## 📁 Paginas

O site é composto por 9 páginas diferentes:

- **Login:** Nesta página, os usuários podem inserir seus dados cadastrados e fazer login para acessar a página principal.
- **Cadastro:** Nesta página, os usuários podem criar suas contas.
- **Home:** Essa é a página principal do projeto, que apresenta produtos de uma hamburgueria.
- **Produtos:** Esta página exibirá todos os produtos cadastrados no sistema.
- **Carrinho:** Nesta página, serão listados os produtos que foram escolhidos pelo usuário, juntamente com o valor final.
- **Administrador:** Esta página permitirá a criação e edição de produtos, além de mostrar o andamento dos pedidos feitos.
- **Listar Produtos:** Nesta página, o administrador poderá ver todas as informações dos produtos.
- **Novo Produto:** Aqui, o administrador poderá criar novos produtos.
- **Pedidos:** Página onde o administrador verá todos os pedidos feitos.

## :dart: Passos

:heavy_check_mark: Página de login;\
:heavy_check_mark: Página de cadastro;\
:heavy_check_mark: Página home;\
:heavy_check_mark: Carrossel de categorias;\
:heavy_check_mark: Carrossel de ofertas;\
:heavy_check_mark: Pagina de ver produtos;\
:heavy_check_mark: Pagina do carrinho;\
:heavy_check_mark: Menu superior;\
:heavy_check_mark: Deslogar usuário;\
:heavy_check_mark: Rotas privadas;\
:heavy_check_mark: Seção do administrador;\
:heavy_check_mark: Página de pedidos;\
:heavy_check_mark: Menu lateral;\
:heavy_check_mark: Deslogar o administrador;\
:heavy_check_mark: Página de listagem de produtos;\
:heavy_check_mark: Página de criação de produtos;\
:heavy_check_mark: Edição de produtos;\
:heavy_check_mark: Finalização;

## :rocket: Tecnologias

As seguintes ferramentas foram utilizadas neste projeto:

- [ReactJs](https://pt-br.reactjs.org/)
- [Axios](https://axios-http.com/docs/intro)
- [React Hook Form](https://react-hook-form.com/get-started)
- [Yup](https://www.npmjs.com/package/yup)
- [Toast](https://fkhadra.github.io/react-toastify/introduction/)
- [React Router Dom V6](https://reactrouter.com/en/main)  
- [Local Storage](https://developer.mozilla.org/pt-BR/docs/Web/API/Window/localStorage)
- [Carrossel](https://sag1v.github.io/react-elastic-carousel/)
- [Material UI](https://mui.com/material-ui/getting-started/)
- [Styled-Components](https://styled-components.com/docs/basics#installation)

## :closed_book: Requisitos ##

Antes de começar, você precisa ter [Git](https://git-scm.com) e [Node](https://nodejs.org/en/) instalados em seu computador.

## :checkered_flag: Getting Started ##

```bash
# Clone o projeto
$ git clone https://github.com/Dev-LucasM/interface-code-club-burguer
$ git clone https://github.com/Dev-LucasM/api-code-club-burguer
# Accesso
$ cd interface-code-club-burguer
# Instalando dependencias
$ yarn ou npm
# Accesso a api
$ cd api-code-club-burguer
# Instalando dependencias
$ yarn ou npm
# Rodando o projeto
$ yarn dev ou npm run dev
# Em outro terminal
$ cd interface-code-club-burguer
$ yarn start ou npm start
# O servidor iniciará na porta: <http://localhost:3000>
```
## 🤝 Contribuidores

Queremos agradecer às seguintes pessoas que contribuíram para este projeto:

<table>
  <tr>
    <td align="center">
      <a href="#">
        <img src="https://avatars.githubusercontent.com/u/122059282?s=400&u=96bc9300d660f1b489efcfb0a557ab08a6298c99&v=4" width="100px;" alt="Lucas Mauricio"/><br>
        <sub>
          <b>Lucas Maurício</b>
        </sub>
      </a>
    </td>
  </tr>
</table>
