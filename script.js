// ==========================================
// 1. VARIÁVEIS E TIPOS DE DADOS
// ==========================================
let nome = "Maria";       // String (Texto)
const idade = 30;         // Number (Número inteiro ou decimal) - 'const' não muda
let altura = 1.65;        // Number
let estudando = true;     // Booleano (Verdadeiro ou Falso)
let hobbies = ["Ler", "Programar", "Jogar"]; // Array (Lista)

// Objeto (Guarda informações estruturadas)
let usuario = {
    nome: "Maria",
    idade: 30,
    cargo: "Desenvolvedora"
};

console.log("--- 1. Variáveis ---");
console.log(usuario.nome); // Exibe "Maria"


// ==========================================
// 2. OPERADORES E MATEMÁTICA
// ==========================================
let a = 10;
let b = 5;

let soma = a + b;        // 15
let multiplicacao = a * b; // 50

console.log("--- 2. Operadores ---");
console.log("Soma de 10 + 5 = " + soma);


// ==========================================
// 3. CONDICIONAIS (If / Else / Switch)
// ==========================================
console.log("--- 3. Condicionais ---");

let hora = 14;

if (hora < 12) {
    console.log("Bom dia!");
} else if (hora < 18) {
    console.log("Boa tarde!");
} else {
    console.log("Boa noite!");
}


// ==========================================
// 4. LAÇOS DE REPETIÇÃO (Loops)
// ==========================================
console.log("--- 4. Laços de Repetição ---");

// Loop For (Contador)
for (let i = 1; i <= 3; i++) {
    console.log("Contando com For: " + i);
}

// Loop em Arrays (Percorrendo a lista de hobbies)
hobbies.forEach(function(hobby, indice) {
    console.log("Hobby " + (indice + 1) + ": " + hobby);
});


// ==========================================
// 5. FUNÇÕES (Blocos de código reutilizáveis)
// ==========================================
console.log("--- 5. Funções ---");

// Função simples
function saudacao(nomePessoa) {
    return "Olá, " + nomePessoa + "! Seja bem-vindo(a).";
}

let mensagem = saudacao("Carlos");
console.log(mensagem);

// Função com Arrow Function (Modo moderno do JS)
const somarNumeros = (num1, num2) => {
    return num1 + num2;
};

console.log("Resultado da Arrow Function (7 + 8): " + somarNumeros(7, 8));


// ==========================================
// 6. MANIPULAÇÃO DO DOM (Mexer no HTML)
// ==========================================
// Nota: Esses comandos funcionam se houver um arquivo HTML conectado.

// Mudar o texto de um elemento com id="titulo"
// document.getElementById("titulo").innerText = "Texto alterado via JavaScript!";

// Criar um evento de clique em um botão
// let botao = document.getElementById("meuBotao");
// botao.addEventListener("click", function() {
//     alert("O botão foi clicado!");
// });