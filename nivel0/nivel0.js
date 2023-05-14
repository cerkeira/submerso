var texto1, texto2, musicaFundo, img,  timerMoliceiro,limiteEsqmoliceiro;
var sprite=0;
var velocidadeMoliceiroProtag = 0;

window.onload = function () {
    musicaFundo = new Audio ('sons/som_viva.ogg');
    musicaFundo.volume=0.3;
    texto1 = document.getElementById('instrucao1');
    texto2 = document.getElementById('instrucao2');
    preparar();

}

function preparar() {
    onkeydown = function (event) {
        processa_tecla(event.key);
        console.log(event.key);
    }
    document.getElementById("cais").style.left= 0 +"px";
    document.getElementById("cais").style.top= 577 + "px";
    document.getElementById('jogador').style.left = 31 + "px";
    document.getElementById('jogador').style.top = 464 + "px";

    document.getElementById('moliceiroProtag').style.display = "none";
    document.getElementById('moliceiroProtag').style.left = 414 + "px";
    document.getElementById('moliceiroProtag').style.top = 491 + "px";

    document.getElementById('moliceiro').style.left = 432 + "px";
    document.getElementById('moliceiro').style.top = 584 + "px";

    document.getElementById('ondas').style.left = 387 + "px";
    document.getElementById('ondas').style.top = 466 + "px";

    document.getElementById('instrucao1').style.left = 624 + "px";
    document.getElementById('instrucao1').style.top = 252 + "px";
    document.getElementById('instrucao2').style.display = "none";
    document.getElementById('instrucao2').style.left = 416 + "px";
    document.getElementById('instrucao2').style.top = 333 + "px";
}


function processa_tecla(tecla) {
    limiteEsqmoliceiro = parseInt(document.getElementById('moliceiroProtag').style.left) + 300 + "px";
    document.getElementById('instrucao1').style.display = "none";
    if (parseInt(document.getElementById('jogador').style.left) >= 353) {
        document.getElementById('instrucao2').style.display = "block";
    }
    switch (tecla) {
        case 'ArrowRight':
            musicaFundo.play();
            if(document.getElementById('moliceiroProtag').style.display == "block"){
                document.getElementById('instrucao2').style.display = "none";
                if (parseInt(limiteEsqmoliceiro) >= 1280) {
                    console.log('detetoulimite do ecrã')
                    fim_jogo()
                    break;
                }
                document.getElementById('moliceiroProtag').style.left =  parseInt(document.getElementById('moliceiroProtag').style.left) + 5 + "px";
            }
            if (parseInt(document.getElementById('jogador').style.left) < 353) {
            animationCharaterright();
            document.getElementById('jogador').style.left = parseInt(document.getElementById('jogador').style.left) + 4 + "px";
          }
            break;
        case 'x':
            if (parseInt(document.getElementById('jogador').style.left) >= 353) {
                document.getElementById('jogador').style.display = "none";
                document.getElementById('moliceiro').style.display = "none";
                document.getElementById('moliceiroProtag').style.display = "block";
                console.log(timerMoliceiro)
            }
            break;
        case 'ArrowLeft':
            if(document.getElementById('moliceiroProtag').style.display == "block"){
                document.getElementById('moliceiroProtag').style.left =  parseInt(document.getElementById('moliceiroProtag').style.left) - 5 + "px";
            }
            animationCharaterleft();
            //src de imagem muda p esquerda se não tiver e muda de frame na array;
            document.getElementById('jogador').style.left = parseInt(document.getElementById('jogador').style.left) - 1 + "px";

            break;
    }

}

function animationCharaterright(){
    sprite++;
    if(sprite>3){
        sprite=1;
    }
   document.getElementById("jogador").src="imagens/protagonista"+sprite +".png";
}

function animationCharaterleft(){
    sprite++;
    if(sprite>8){
        console.log('entrou no if')
        sprite=4;
    }
    for(i=3;i<6;i++){
        i++;
        console.log(i)
        document.getElementById("jogador").src="imagens/protagonista"+i +".png";
    }

}

function fim_jogo(){
    console.log('entrou no fim jogo')
    document.getElementById('fundo').innerHTML += "<button id='continue'><a href='../nivel1/indexnv1.html'>Continuar</a></button>";
}