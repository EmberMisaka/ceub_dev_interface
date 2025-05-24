let Idade = 18;

if (Idade >= 18){
    console.log("Você é maior");
} else {
    console.log("Você é menor")
}

let nota = 7;

if (nota >= 9) {
    console.log("Excelente");
} else if (nota >= 6) {
    console.log("Aprovado");
} else {
    console.log("Reprovado");
}

let dia = "segunda";

switch (dia) {
    case "segunda":
        console.log("Começo da semana");
        break;
    case "sexta":
        console.log("Sextou!");
        break;
    default:
        console.log("Outro dia qualquer");
}

let i = 0;

for(i = 0; i<=5; i++){
    console.log("Contando: "+i)
}

let contador

while (contador < 3){
    console.log("Contando com While: ", contador);
    contador++;
}

// let i = 0;

do {
    console.log("Executa pelo menos uma vez:", i);
    i++;
} while (i < 1);

for (let i = 0; i < 10; i++) {
    if (i === 5) break;
    console.log(i);
}
