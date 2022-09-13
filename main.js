//NULISH COALESCING OPERATOR.

// como trabalhar com valores nulos?
// posso utilizar essa forma

// 0, "", [], false, undefined, null => js entende isso como falsy e portanto
// o operador ?? olha para valores significativo
// const idade = 0;
// document.body.innerText = `sua idade é ${idade ?? 'não informado'} anos`;

// OBJETOS

const user = {
  nome: 'Matheus',
  idade: 24,
  endereco: {
    rua: 'rua teste',
    numero: 221,
  },
};

// document.body.innerText = 'nome' in user; // vai retornar true
// verifica se tem nome no objeto user

// document.body.innerText = Object.keys(user);
// retorna todas as chaves do objeto: nome, idade, endereco

// document.body.innerText = JSON.stringify(Object.values(user));
// retorna o objeto com todos os valores

// document.body.innerText = JSON.stringify(Object.entries(user));
// retorna um vetor com varios vetores dentro
// esses vetores dentro é a chave do objeto e o valor

// DESESTRUTURAÇÃO DE UM OBJETO
// conseguir remover parte de um objeto para uma variavel

// const { endereco, idade } = user;
// document.body.innerText = JSON.stringify({ endereco, idade });

// const { endereco, idade, sobrenome = 'campos' } = user;
// document.body.innerText = JSON.stringify({ endereco, idade, sobrenome });

// consigo criar e atribuir valores na desestruturaçao (sobrenome = 'campos')

// DESESTRUTURAÇÃO DE UM OBJETO COM FUNÇAO

// function mostrarIdade({ idade }) {
//   return idade;
// }

// document.body.innerText = mostrarIdade(user);

// Rest Operator
// nesse exemplo ele tira o nome, e pega todas as outras informaçoes do objeto
// e salva na variavel rest

// const { nome, ...rest } = user;
// document.body.innerText = JSON.stringify(rest);

// DESESTRUTURAÇÃO DENTRO DE ARRAYS
// const numeros = [1, 2, 3, 4];
// const [primeiro, segundo, ...resto] = numeros;
// document.body.innerText = JSON.stringify({ primeiro, segundo, resto });

// const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// const [first, second, ...rest] = array;
// document.body.innerText = JSON.stringify({ first, second, rest });

// consigo pegar qualquer elemento de um array que eu quiser
// exemplo: se eu quiser pular o numero 2

// const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// const [first, , third, ...rest] = array;
// document.body.innerText = JSON.stringify({ first, third, rest });

// SHORT SYNTAX;
// const name = 'matheus';
// const age = 24;

// const user = {
//   name,
//   age,
// };

// document.body.innerText = JSON.stringify(user);

// OPTIONAL CHAINING
// Quando tem que lidar com possiveis valores
// de um objeto que podem ser nulos ou nao existir
// uso o (Optional Chaining)

// const user = {
//   name: 'Matheus',
//   age: 24,
//   address: {
//     street: 'rua teste',
//     number: 221,
//     zip: {
//       code: '922229292',
//       city: 'araguari',
//     },
//   },
// };

// document.body.innerText = user.address?.zip?.code ?? 'nao informado';
// eu vou tentar acessar o address do user porem
// se ele nao existir eu nao vou tentar acessar
// o restante da aplicação

// OPTIONAL CHAINING COM FUNÇÃO

// const user = {
//   name: 'Matheus',
//   age: 24,
//   address: {
//     street: 'rua teste',
//     number: 221,
//     zip: {
//       code: '922229292',
//       city: 'araguari',
//     },
//     showFullAdress() {
//       return 'Ok';
//     },
//   },
// };

// document.body.innerText = user.address?.showFullAdress?.();
// showFullAdress?. so vai chamar a função caso ela exista

//METODOS DE ARRAY

// USANDO FOR OF
// const array = [1, 2, 3, 4, 5];
// for (const i of array) {
//   document.body.innerText += i;
// }

//USANDO FOREACH
// array.forEach((item) => {
//   document.body.innerText += item;
// });

//USANDO MAP( se eu quiser retornar algo
//do meu array é legal usar map
// ex: quero percorrer meu array e multiplicar ele todo
// por 2)
// consigo fazer condicionais com map

// const novoArray = array.map((item) => {
//   if (item % 2 === 0) {
//     return item * 10;
//   }
//   return item;
// });

// document.body.innerText = novoArray;

// USANDO FILTER
// nao altera valores do array
// ele so filtra

// const novoArray = array
//   .filter((item) => item % 2 === 0)
//   .map((item) => item * 10);
// nesse exemplo eu to filtrando do array apenas numeros pares
// assim que eu termino de filtrar posso utilizar o map
// e multiplicar os itens filtrados por 10
// document.body.innerText = novoArray;

// USANDO EVERY
// retorna true ou false
// ele retorna true se todos os items atendem uma condição

// const todosItensSaoNumeros = array.every((item) => typeof item === 'number');

// document.body.innerText = todosItensSaoNumeros;

// USANDO SOME
// verifica se 1 item satisfaz a condiçao
// se satisfazer ele retorna true

// const peloMenosUmItemNaoEUmNumero = array.some(
//   (item) => typeof item != 'number'
// );

// document.body.innerText = peloMenosUmItemNaoEUmNumero;

// USANDO FIND
// serve para encontrar 1 item do array
// ex: quero encontrar um numero par
// ele encontra o primeiro numero par que ele encontrar
// nesse exemplo
// const par = array.find((item) => item % 2 === 0);
// document.body.innerText = par;

// USANDO FINDINDEX
// retorna o index do item no array
// const par = array.findIndex((item) => item % 2 === 0);
// document.body.innerText = par;

// REDUCE
// quero reduzir o meu array a algo
// reduce ele espera dois parametros
// reduce recebe como primeiro parametro uma função
// no 2 parametro ele recebe qual o valor inciial
// dessa nova estrutura de dados que quero criar a partir
// do array
// eu quero somar todos os itens do array
// const array = [1, 2, 3, 4, 5];
// qual o valor inicial dessa soma: 0
// acc é o acumulator e o item é cada informacao do array
// eu tenho que colocar o return pois tenho que retornar
// o novo valor do acc a cada interação
// const soma = array.reduce((acc, item) => {
//   document.body.innerText += acc + ',' + item;
//   return acc + item;
// }, 0);

// document.body.innerText = soma;

// PROMISSE
// .then/.catch

//resolve é uma funçao que eu chamo pra dizer
// que deu tudo certo
// reject é uma função que eu chamo pra dizer que
// deu errado
// const somaDoisNumeros = (a, b) => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve(a + b);
//     }, 2000);
//   });
// };

// somaDoisNumeros(1, 40)
//   .then((soma) => {
//     document.body.innerText = soma;
//   })

//   .catch((err) => {
//     console.log(err);
//   });

// UTILIZANDO THEN E CATCH

// fetch('https://api.github.com/users/matheusdev10')
//   .then((response) => {
//     return response.json();
//   })
//   .then((body) => {
//     console.log(body);
//   })
//   .catch((err) => {
//     console.log(err);
//   })
//   .finally(() => {
//     console.log('deu');
//   });

//
// finally é executada independete se deu certo ou
// errado
// bom pra tirar load da tela

// UTILIZANDO ASYNC E AWAIT
// toda função assincrona ela vira uma promisse
// async function buscaDadosNoGitHub() {
//   const response = await fetch('https://api.github.com/users/matheusdev10');
//   const body = await response.json();
//   console.log(body);
// }

// buscaDadosNoGitHub();

// UTILIZANDO ASYNC E AWAIT COM TRY E CATCH

// async function buscaDadosNoGitHub() {
//   try {
//     const response = await fetch('https://api.github.com/users/matheusdev10');
//     const body = await response.json();
//     return body.name;
//   } catch (err) {
//     console.log(err);
//   } finally {
//     console.log('deu');
//   }
// }

// buscaDadosNoGitHub().then((name) => {
//   console.log(name);
// });
