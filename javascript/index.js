const vogais = {
     a:"ai",
     e:"enter",
     i: "imes",
     o:"ober",
     u: "ufat"
 }

 const palavras = {

    ai:"a",
    enter:"e",
    imes:"i",
    ober:"o",
    ufat:"u"
 }

const textarea = document.querySelector ("#area");
const textarea2 = document.querySelector ("#area2");

const botao1 = document.querySelector ("[data-criptografia]");
console.log(botao1);
botao1.addEventListener("click", event => {
    event.preventDefault();
    
    pegaEvento();
});

const botao2 = document.querySelector ("[data-descriptografia]");
console.log(botao2);
botao2.addEventListener("click", event => {
    event.preventDefault();

    voltaEvento();
    
});


function pegaEvento() {

    const texto = textarea.value

    const resultado = texto.replace(/[aeiou]/g, function (resposta) { 
         
        return vogais[resposta]});

        textarea2.value = resultado;
        textarea.value = "" 
 }
 
 function voltaEvento() {

    const codigo = textarea2.value

    const desvenda = codigo.replace(/enter|ai|imes|ober|ufat/g, function (troca) {

        console.log(troca)

        return palavras[troca]});


        textarea2.value = desvenda;
 }

 function copia(textoDigitado){
    navigator.clipboard.writeText(textoDigitado);
 
}



const botaoCopia = document.querySelector ("#alternativo");
console.log(botaoCopia);
botaoCopia.addEventListener("click", event => {
    event.preventDefault();

    copia(textarea2.value);
    
}); 