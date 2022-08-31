const minhaString = "Eu não sou supersticioso, mas sou um pouco ________.      ";

//a) Remova o excesso de espaços no final da string;
const semEspaco = minhaString.trim()

//b) exiba, em um console.log() a quantidade de caracteres da string, antes e depois da remoção dos espaços;
console.log(`Com espaco sao ${minhaString.length} caracteres, sem espaco sao ${semEspaco.length} caracteres!`)

//c) Substitua os traços `________` por “sticioso”.
console.log(semEspaco.replace("________","sticioso"))