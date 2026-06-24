const enigmas = [

{
pergunta:"Quanto é 2 + 2?",
resposta:"4"
},

{
pergunta:"Qual é a capital do Brasil?",
resposta:"brasilia"
},

{
pergunta:"Qual palavra completa a frase: Enigma do _____",
resposta:"caderno"
}

];

let atual = 0;

const pergunta =
document.getElementById("pergunta");

const resposta =
document.getElementById("resposta");

pergunta.textContent =
enigmas[0].pergunta;

function verificar(){

let valor =
resposta.value
.toLowerCase()
.trim();

if(
valor ===
enigmas[atual].resposta
){

atual++;

if(
atual >= enigmas.length
){

document.body.innerHTML=
`
<h1 style="text-align:center;margin-top:200px;">
Parabéns.
</h1>
`;

return;
}

pergunta.textContent=
enigmas[atual].pergunta;

resposta.value="";

}

else{

resposta.style.background=
"red";

resposta.style.color=
"white";

setTimeout(()=>{

resposta.style.background=
"#d9d9d9";

resposta.style.color=
"black";

},3000);

}

}