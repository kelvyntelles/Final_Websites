Aplicação foi criada usando typescript, e bulma rbx para estilização da pagina

pagina está responsiva, seguindo da melhor forma o mock apresentado para a realização da prova

priorizei a front end, procurei deixar o layoute bem parecido com o mock
procurei deixar cada componente com uma unica responsabilidade
criei varios components e uma page, no caso a home para a renderisação da pagina principal

criei o backend usando o node js com o express, no backend eu fiz o crud de cadastro de produtos
realizando o get de todos os produtos e tbm o get de um unico produto passando o id
não usei o java com springBoot pois gastei mais tempo no front end e na minha concepção eu achei que seria
mais rapido fazer o backend com o node js

porem na hora de fazer a requisição no front, não consegui chamar o arquivo json criado na minha maquina local
por esse motivo eu fiz a requisição atraves de uma api externa, usando o useEffect assim como solicitado
deixei um console.log da api com seus dados só para mostrar que tem retorno de dados, porem na aplicação ficou os dados estaticos para não descarizar o que se trata a aplicão

estarei subindo a api da minha maquina local atravez de um arquivo zip, e essa aplicação estará no git.
