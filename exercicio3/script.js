//Crie a const para a frase aqui

//a) Crie uma `const` no seu código para guardar a frase (com aspas e tudo);
const frase = "Jorge tem uma casa verde e com portão azul, com os dizeres: \"BOAS VINDAS, mas não deixe o gato sair\"."

//b) Crie uma nova string a partir da primeira, trocando **verde** por **rosa**, e **azul** por **laranja**;
const frase2 = frase.replace("verde","rosa").replace("azul","laranja")

//c) Verifique se a nova string inclui **verde**, e se inclui **laranja**.
console.log(frase2.replace("mas não deixe o gato sair","MAS NÃO DEIXE O GATO SAIR"))