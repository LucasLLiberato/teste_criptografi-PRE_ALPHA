let cbtn_crip = document.querySelector('#click_criptografar');
let cbtn_desc = document.querySelector('#click_descriptografar');

let div_textoCrip = document.getElementById("visualizacao_texto-texto_crip-paragrafo")

let confereTextarea = document.getElementById("manipulacao_texto-area_de_digitacao");
let textareaBorda = document.getElementById("manipulacao_texto-area_de_digitacao");
var estiloAntigo = textareaBorda.style.border;
let textoDaArea = "";

function printClickCrip() {
    let texto = document.querySelector('textarea');
    variavel = texto.value;
    console.log(variavel);
    textoDaArea = variavel;

    if (!variavel!==true) {
        let campoVisualizacaoON = document.getElementById("visualizacao_texto")
        campoVisualizacaoON.style.display = "none";

        let campoVisualizacaoOF = document.getElementById("visualizacao_texto-oculta")
        campoVisualizacaoOF.style.display = "flex";

        numeroLimite = textoDaArea.length
        novaFrase = "";

        for (var i = 0; i < numeroLimite; i++){
            if (textoDaArea[i]=="e") {
                textoDaArea[i]--;
                novaFrase += "enter";
            } 

            if (textoDaArea[i]=="i") {
                textoDaArea[i] = "";
                novaFrase += "imes";
            } 

            if (textoDaArea[i]=="a") {
                textoDaArea[i]--;
                novaFrase += "ai";
            } 

            if (textoDaArea[i]=="o") {
                textoDaArea[i]--;
                novaFrase += "ober";
            }

            if (textoDaArea[i]=="u") {
                textoDaArea[i]--;
                novaFrase += "ufat";
            } 
            
            if (textoDaArea[i]!='a' && textoDaArea[i]!='e' && textoDaArea[i]!='i' && textoDaArea[i]!='o' && textoDaArea[i]!='u'){
                novaFrase += textoDaArea[i];
            }
            
        }

        div_textoCrip.innerHTML = novaFrase;

    }
}

function printClickDes() {
    let texto = document.querySelector('textarea');
    variavel = texto.value;
    textoDaArea = variavel;

    if (!variavel==false) {

        if (!variavel!==true) {
            let campoVisualizacaoON = document.getElementById("visualizacao_texto")
            campoVisualizacaoON.style.display = "none";

            let campoVisualizacaoOF = document.getElementById("visualizacao_texto-oculta")
            campoVisualizacaoOF.style.display = "flex";

            let novoTexto = variavel.replace(/ai/g, 'a');
            novoTexto = novoTexto.replace(/enter/g, 'e');
            novoTexto = novoTexto.replace(/imes/g, 'i');
            novoTexto = novoTexto.replace(/ober/g, 'o');
            novoTexto = novoTexto.replace(/ufat/g, 'u');

            div_textoCrip.innerHTML = novoTexto;
        }
    }

    else {
        let campoVisualizacaoON = document.getElementById("visualizacao_texto")
        campoVisualizacaoON.style.display = "flex";

        let campoVisualizacaoOF = document.getElementById("visualizacao_texto-oculta")
        campoVisualizacaoOF.style.display = "none";
    }
} 


cbtn_crip.addEventListener('click', printClickCrip);
cbtn_desc.addEventListener('click', printClickDes);

confereTextarea.addEventListener("keypress", function(e) {
    var codigo = e.keyCode || e.which;
    var caractere = String.fromCharCode(codigo);
    var regex = new RegExp("[a-z\\s]+");
    
    if (!regex.test(caractere)) {
        e.preventDefault();
        textareaBorda.style.border = "5px solid red";
        setTimeout(function() { 
        textareaBorda.style.border = estiloAntigo;
        }, 500);
    }
  });
