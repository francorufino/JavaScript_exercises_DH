// Definir um array de números de 1 a 20. Utilizando o método forEach, imprimir na linha de comando apenas os que sejam múltiplos de 7.

myArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];

  myArray.forEach (value, index); {
    if (value % 7 == 0){
console.log ("No indice: " + index + " esta o numero: " + value + " e esse numero eh multiplo de 7!");
    }
  }

// Utilizando o array do exercício 1, implementar a função map para obter um arrayResultado com a raiz quadrada de cada um dos números. Para isso, utilizar a função Math.sqrt.

myArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
let arrayResultado = myArray.map(function(item){
  return Math.sqrt(item);
});


// Um detetive recebeu um código anônimo e quer decifrar a mensagem. Para isso, ele pede ajuda a você. As únicas pistas que ele recebeu foram: filter e typeof. Será que você consegue ajudá-lo?

var enigma = ["l",1,"a",2,2,5,"p",5,7,5,3,"e",6,"r",7,6,5,3,2,1,"s",9,9,9,6,"e",2,"v",5,"e",3,"r",2,"a",1,6,4,1,2,"n",2,"c",3,5,5,5,7,"i",4,"a",5,2,1,3,"e",6,"s",7,"l",4,"a",3,"c",2,3,1,5,3,2,"l",3,"a",4,"v",5,"e",6];

let secretMessage = enigma.filter(function(item){
  return !(parseInt(item) == item);
});
console.log(secretMessage);

// var str = ["https://xx.jpg", "https://xx.jpg", "1", "https://guide.jpg", "2", "/static.jpg"];
// var filtered = str.filter(function (item) {
//   return !(parseInt(item) == item);
// });
// console.log(filtered);

// The filter() method creates a new array with all elements that pass the test implemented by the provided function.
// var words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];
// const result = words.filter(word => word.length > 6);
// console.log(result);
// // expected output: Array ["exuberant", "destruction", "present"]

// The typeof operator returns a string indicating the type of the unevaluated operand.
// console.log(typeof 42);
// // expected output: "number"

// console.log(typeof 'blubber');
// // expected output: "string"

// console.log(typeof true);
// // expected output: "boolean"

// console.log(typeof declaredButUndefinedVariable);
// // expected output: "undefined";



// Com todas essas informações, o detetive conseguiu descobrir o nome de uma rua, mas não a altura. A única coisa que ele encontrou para decifrar foi esta legenda: “Somar todos os números do enigma proposto para encontrar a altura”. Ele também encontrou uma pista que dizia reduce.
var enigma = ["l",1,"a",2,2,5,"p",5,7,5,3,"e",6,"r",7,6,5,3,2,1,"s",9,9,9,6,"e",2,"v",5,"e",3,"r",2,"a",1,6,4,1,2,"n",2,"c",3,5,5,5,7,"i",4,"a",5,2,1,3,"e",6,"s",7,"l",4,"a",3,"c",2,3,1,5,3,2,"l",3,"a",4,"v",5,"e",6];

let secretMessage = enigma.filter(function(item){
  return (parseInt(item) == item);
});
console.log(secretMessage);
const reducer = (accumulator, currentValue) => accumulator + currentValue;
console.log(secretMessage.reduce(reducer))




// const array1 = [1, 2, 3, 4];
// const reducer = (accumulator, currentValue) => accumulator + currentValue;

// // 1 + 2 + 3 + 4
// console.log(array1.reduce(reducer));
// // expected output: 10

// // 5 + 1 + 2 + 3 + 4
// console.log(array1.reduce(reducer, 5));
// // expected output: 15
