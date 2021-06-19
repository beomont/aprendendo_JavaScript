

function clicou(){
  document.getElementById("agradecimento") .innerHTML = "<b>Obrigado por clicar, visite meu linkedin clicando no ponto --> .</b>"

  //alert("Obrigado por clicar");
}
function  redirecionar(){
window.open ("https://www.linkedin.com/in/bruno-santana-lopes-426b008a/");
//  window.location.href = "https://www.linkedin.com/in/bruno-santana-lopes-426b008a/"
}

function trocar(elemento){
  elemento.innerHTML= "Obrigado"
//  document.getElementById("mousemove").innerHTML = "Obrigado"
//  alert("trocar texto");
}

function voltar(elemento){
  elemento.innerHTML= "Passe o mouse aqui"
//  document.getElementById("mousemove").innerHTML = "Passe o mouse aqui"
}

function load(){
  alert("Carregamento concluído")
}

function funcaoChange(elemento){
  console.log(elemento.value)

}

/*
function  soma(n1, n2){
  return  n1 + n2;
}
*/



/*
function  validaIdade(idade){
if (idade>=18){
  validar = true
}else {
  validar = false
 }
 return validar;
}

var idade = prompt("Insira sua idade")
console.log(validaIdade(idade))
*/



//alert(soma(5, 10));



/*
function setReplace(frase, nome, novo_nome){
  return frase.replace(nome, novo_nome);
}
  alert(setReplace("Vai Canadá", "Canadá", "Brasil"));
*/




/*
var d = new Date();
alert(d.getHours());
alert(d.getMinutes());
alert(d.getMonth()+1);
*/


/*
var count;
for (var count = 0; count <= 5; count++)
{
  alert(count);
}
*/

/*
var count = 0;
while (count <= 5) {
  console.log(count);
  alert (count)
  count++;
};
*/


/*
var idade = prompt("Qual sua idade?");
if (idade >= 18){
  alert("maior de idade");
}else {
  alert ("menor de idade");
};
*/



//var fruta = [{"maça", cor:"vermelha"}]
//console.log(fruta)


//var lista = ["maça", "pera", "laranja"]
//lista.push("uva");
//lista.pop();


//console.log(lista);
//console.log(lista.toString());
//console.log(lista.join(" | "));

//console.log(lista.length);
//console.log(lista.reverse());


//var nome = "Bruno Lopes";
//var idade = 29;
//var frase = "Brasil é o melhor país do mundo."
//alert(" Bem vindo " + nome);
//console.log(nome);
//console.log(nome + idade)
//console.log(frase.replace("Brasil", "Canadá"))
//alert(frase.replace("Brasil", "Canadá"))
//tolowercase
//toupercase
