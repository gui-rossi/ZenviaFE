# Zenvia challenge web app

A aplicação é formada por um frontend (ZenviaFE) em ReactJS e um backend (ZenviaBE) em .NET. Com SQL Server na azure.

## Sobre o Frontend:

A aplicação usa React-Bootstrap e rotas do react. 
Existem 3 paginas: a Home page, a List page e a User page e um header de navegação no topo.
O front faz 3 chamadas para o back: uma para recuperar todos os usuarios, uma para adicionar usuario novo e uma para modificar usuario. 

A home page é a inicial e só há 2 botões para o usuário interagir. Os que redireciona ele para as outras paginas.
Na página de adição de usuário há campos do react-bootstrap de formularios, mas sem validação no front, o usuario pode inserir qualquer valor nos campos.
Também adicionei a possibilidade do usuario de remover enderecos ou telefones, mas a integracao nao estava funcionando como eu gostaria, entao comentei esses botoes de exclusão.

Na página de listar usuario, há um campo de busca que permite uma fuzzy-search por nome do usuario, o componente de paginação do react-bootstrap não estava funcionando,
como fiquei sem tempo decidi comentar o codigo.
É possivel clicar em um item da lista e o usuario sera redirecionado para a mesma tela de usuario só que com os campos daquele usario clicado pre populados e o botao de
cadastro é substituido pelo de modificar usuario. 

Fiz uso de contextAPI para manter informações do usuario conforme ele edita os seus dados em todos os componentes, sem precisa ficar passando para baixo na hierarquia de componentes.
nao escolhi redux e porque seria overkill e porque nao era permitido, por isso fui de contextAPI

Separei o projeto em componentes, paginas, services e utilitarios. Deixei granular na medida do possível e no que o tempo permitia.
