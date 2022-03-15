let button = document.getElementById("button");
let trocaBandeira = document.getElementById("tocaBandeira");

  

// O javascript pula a função, só a execulta quando ela é chamada
 async function convertValor(){

     let moedasTemporeal =  await fetch("https://economia.awesomeapi.com.br/last/USD-BRL,EUR-BRL").then(function(resposta){
      return resposta.json()
     });

     let dolar = moedasTemporeal.USDBRL.high ;
     let euro =  moedasTemporeal.EURBRL.high ;

     console.log(dolar);
     console.log(euro);


    let inputVreal = Number(document.getElementById("input").value);      // value mostra apenas o valor que foi digitado.
    let valorDigitado = document.getElementById("valorDigitado");
    let resuladoDaConversao = document.getElementById("resulado-conversao");

    if (select.value === "US$ Dolar"){
    let valorDolar = inputVreal / dolar; 
    resuladoDaConversao.innerHTML = valorDolar.toLocaleString("en-US",{style: "currency", currency: "USD"});

    }

    if (select.value === "Є Euro"){
    let valorEuro = inputVreal / euro; 
    resuladoDaConversao.innerHTML = valorEuro.toLocaleString("de-DE",{style: "currency", currency: "EUR"});

    }

   
    
   
   valorDigitado.innerHTML = inputVreal.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'});
    
    

    


}

function mudeMoeda(){
    let textoMoeda = document.getElementById("textoMoeda");
    let moedaBandeira = document.getElementById("moedaBandeira");

if (select.value === "US$ Dolar"){
    textoMoeda.innerHTML = "Dolar";
    moedaBandeira.src = "./imege/bandEstadosUnidos.jpg";

}

if (select.value === "Є Euro"){
    textoMoeda.innerHTML = "Euro";
    moedaBandeira.src = "./imege/bandEuro.png";
    
    }

    convertValor()

}


button.addEventListener("click", convertValor);
select.addEventListener("change", mudeMoeda);





 