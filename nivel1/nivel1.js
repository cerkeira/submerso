var timerflamengo, fim, timerFundo,posicaotopo1,posicaotopo2,posicaotopo3,posicaoleft1,posicaoleft2,posicaoleft3 , flamengoAleatoria, pedacoAleatoria, flamingoAleatoria,  timerflamingo,timerpedaco, posicaoflamingo, direitaplataforma,bottomplataforma, posicaoflamengo, estado, posicaopedaco, resultado, timerplataforma,displayflamingo,displayflamengo,displaypedaco, limiteEsqmoli,limiteDireitamoli,limiteTopomoli,limiteEsqObs,limiteDireitaObs,limiteBottomObs, larguraFlamingo,alturaFlamingo,larguraMoliceiro,larguraFlamengo,alturaFlamengo,larguraPedaco,alturaPedaco, perderVida;
var colisao = 0;
var vidas=3;
var clash = new Audio('sons/Crash-SoundEffect.mp3');
clash.volume = 0.2;
//var velocidadefundo = 5;
var limiteTopoTela=0;
var limitebottomTela=404;
var limiteEsqTela = 229;
var limiteDirTela = 878;

window.onload = function (){

    // document.getElementById('casa').style.width = "340px";
    // document.getElementById('casa').style.height = "180px";
    document.getElementById('pedaco').style.width = "135px";
    document.getElementById('pedaco').style.height = "451px";


    document.getElementById('perspetivacima').style.display="none";
    document.getElementById('opcoes').style.display="none";
    document.getElementById('continue').style.display="none";
    document.getElementById('plataforma').style.display = "none";
    document.getElementById('perdeste').style.display="none";
    document.getElementById('pedaco').style.display="none";
    document.getElementById('canoa').style.display="none";
    // document.getElementById('casa').style.display="none";
    document.getElementById('flamingo').style.display="none";
    document.getElementById('flamengo').style.display="none";
  //  document.getElementById('caixavidas').style.display="none";

    musicaFundo= new Audio ('sons/RunAsFastAsYouCan.mp3');
    perderVida = new Audio ('sons/GlassBreaking-Sound.mp3');
   /* for(v=0;v<3;v++){
        document.getElementById('caixavidas').innerHTML += "<img src='imagens/vida"+v+".png' class='vida' id='vida"+v+"'>";
    }*/
    document.getElementById('clicar').onclick = function() {
        document.getElementById('instrucoes').style.display="none";
        carregar_elementos();
        musicaFundo.play();
        musicaFundo.loop =true;
    }
    onkeydown = function(event){
        processa_tecla(event.key);
    }

}

larguraFlamingo= 91;
    alturaFlamingo= 119;
    larguraFlamengo= 91;
    alturaFlamengo= 119;
    larguraMoliceiro=200;
    // larguraCasa=340;
    // alturaCasa=180;
    larguraPedaco= 135;
    alturaPedaco=451;

function carregar_elementos(){
    /*document.getElementById("fundo1").style.backgroundPosition = "0 0";
    fundo = 0;
    timerFundo=setInterval(animar(),100);*/
    document.getElementById('pedaco').style.display="block";
    document.getElementById('canoa').style.display="block";
    // document.getElementById('casa').style.display="block";
    document.getElementById('flamingo').style.display="block";
    document.getElementById('flamengo').style.display="block";
   // document.getElementById('caixavidas').style.display="block";
    // posicaocasa =document.getElementById('casa').style.left;
    posicaopedaco =document.getElementById('pedaco').style.left;
    posicaoflamingo = document.getElementById('flamingo').style.left;
    posicaoflamengo = document.getElementById('flamengo').style.left;
    pedacoAleatoria = parseInt(Math.random()*(limiteDirTela - + limiteEsqTela + 1) + limiteEsqTela);
    flamingoAleatoria = parseInt(Math.random()*(limiteDirTela - limiteEsqTela+ 1) + limiteEsqTela);
    flamengoAleatoria = parseInt(Math.random()*(limiteDirTela - limiteEsqTela+ 50) + limiteEsqTela);
    //posicionar no eixo do x aleatoriamente o flamingo, o pedaço e a casa
    // document.getElementById('casa').style.left = casaAleatoria + "px";
    document.getElementById('pedaco').style.left = pedacoAleatoria + "px";
    document.getElementById('flamingo').style.left = flamingoAleatoria + "px";
    document.getElementById('flamengo').style.left = flamengoAleatoria + "px";
    //console.log(Posicaoaleatoria)

    /*document.getElementById('caixavidas').style.left= window.innerWidth - 30 + "px";
    document.getElementById('caixavidas').style.top = 30 +"px";*/

    // esconder elementos:
    document.getElementById('perspetivacima').style.display="none";
    document.getElementById('opcoes').style.display="none";
    document.getElementById('continue').style.display="none";
    document.getElementById('plataforma').style.display = "none";
    document.getElementById('perdeste').style.display="none";

    //posicionar à esquerda
    document.getElementById('continue').style.left= limiteDirTela;
    document.getElementById('continue').style.top= limitebottomTela;
    document.getElementById('canoa').style.left = 582 + "px";
    document.getElementById('plataforma').style.left = 227 + "px";
    document.getElementById('perspetivacima').style.left = 490 + "px";

    //posicionar no topo fora do ecrã
    // document.getElementById('casa').style.top = -210 + "px";
    document.getElementById('pedaco').style.top = -1400 + "px";
    document.getElementById('flamingo').style.top = -700 + "px";
    document.getElementById('flamengo').style.top = -100 + "px";
    document.getElementById('canoa').style.top = 405 + "px";
    document.getElementById('plataforma').style.top = -800 + "px";
    document.getElementById('perspetivacima').style.top = 150 + "px";

    // setTimeout(casadelay(),1000);
    setTimeout(pedacodelay(),2000);
    timerflamingo = setInterval(flamingo,100);
    timerflamengo = setInterval(flamengo,100);
}

// function casadelay(){
//     timercasa = setInterval(casa,10);
// }
function pedacodelay(){
    timerpedaco = setInterval(pedaco,50);
}
// function casa(){      // função para fazer mexer o obstáculo casa
//     verificar_colisao('casa', 'canoa',340,180,160,320,zz,8,0);

//    // console.log('entrou no casa')
//     if ( parseInt(document.getElementById('casa').style.top) >  (720 - alturaCasa)){
//         clearInterval(timercasa);
//         document.getElementById('casa').style.display="none";

//         // setTimeout(timercasa);
//     } else {
//         document.getElementById('casa').style.top = parseInt( document.getElementById('casa').style.top) + 1 + "px";

//     }


// }
function flamingo(){    // função para fazer mexer o obstáculo flamingo
    verificar_colisao('flamingo', 'canoa',79,38,160, 320,10,8,0);

    //console.log('entrou no flamingo')
    if (parseInt(document.getElementById('flamingo').style.top) > (720 - 38)){
        clearInterval(timerflamingo);
        document.getElementById('flamingo').style.display="none";

        // setTimeout(timerflamingo);
    } else {
        document.getElementById('flamingo').style.top = parseInt(document.getElementById('flamingo').style.top) + 10 + "px";

    }


}
function flamengo(){    // função para fazer mexer o obstáculo flamingo
    verificar_colisao('flamengo', 'canoa',91,119,160, 320,10,8,0);

    //console.log('entrou no flamingo')
    if (parseInt(document.getElementById('flamengo').style.top) > (720 - alturaFlamengo)){
        clearInterval(timerflamengo);
        document.getElementById('flamengo').style.display="none";

        // setTimeout(timerflamingo);
    } else {
        document.getElementById('flamengo').style.top = parseInt(document.getElementById('flamengo').style.top) + 10 + "px";

    }


}

function pedaco(){

    verificar_colisao('pedaco', 'canoa',135,451,160,320,5,8,0);
   // console.log('entrou no pedaco')
    if (parseInt(document.getElementById('pedaco').style.top) > (720 - alturaPedaco)){
        clearInterval(timerpedaco);
        document.getElementById('pedaco').style.display="none";
        estado = obstaculos_ultrapassados();
    if (estado == 1){
        timerplataforma= setInterval (plataforma , 10);
        fim = plataforma();
    }
    } else {
        document.getElementById('pedaco').style.top = parseInt(document.getElementById('pedaco').style.top) + 5 + "px";
    }

}


function processa_tecla(tecla) {
    
if ((fim == 1) && (tecla=='x')){
            console.log('entrou on if, fim e tecla são:' + fim + tecla)
            fim_jogo();
        }

      direitaplataforma= parseInt(document.getElementById('plataforma').style.left) + 194 + "px";
      bottomplataforma =parseInt(document.getElementById('plataforma').style.top) + 1100 +"px";

    switch (tecla) {

        case 'Escape':

            document.getElementById('opcoes').style.display = "block";
            opcoesdisplay= document.getElementById('opcoes').style.display;

            if(opcoesdisplay == "block"){
                musicaFundo.pause();
              /*  posicaotopo1= parseInt(document.getElementById('flamingo').style.top);
                posicaotopo2=parseInt(document.getElementById('casa').style.top);
                posicaotopo3=parseInt(document.getElementById('pedaco').style.top);
                posicaoleft1= parseInt(document.getElementById('flamingo').style.left);
                posicaoleft2=parseInt(document.getElementById('casa').style.left);
                posicaoleft3=parseInt(document.getElementById('pedaco').style.left);
                document.getElementById('pedaco').style.display = "none";
                document.getElementById('casa').style.display = "none";
                document.getElementById('flamingo').style.display = "none";*/
                clearInterval(timerflamingo);
                clearInterval(timerflamengo);
                clearInterval(timerpedaco);
                // clearInterval(timercasa);
            }
            document.getElementById('cruz').onclick = function (){
                musicaFundo.play();
                timerflamingo= setInterval(flamingo,100);
                timerflamengo= setInterval(flamengo,100);
                // timercasa = setInterval(casa,10);
                timerpedaco = setInterval(pedaco,50);
                document.getElementById('opcoes').style.display = "none";

                document.getElementById('pedaco').style.display = "block";
                // document.getElementById('casa').style.display = "block";
                document.getElementById('flamingo').style.display = "block";
                document.getElementById('flamengo').style.display = "block";

                timerflamingo = setInterval(flamingo(),100);
                timerflamengo = setInterval(flamengo(),100);
                timerpedaco = setInterval(pedaco(),50);
                // timercasa = setInterval(casa(),10);
            }

            break;
        case 'ArrowRight':

            if (parseInt(document.getElementById('canoa').style.left) < limiteDirTela) {
                document.getElementById('canoa').src = "imagens/moliceiroesq.png";
                document.getElementById('canoa').style.left = parseInt(document.getElementById('canoa').style.left) + 8 + "px";
            }

            break;

        case 'ArrowLeft':
            if(displaypedaco == "none"){
                limiteEsqTela= 478;
            }
            if (parseInt(document.getElementById('canoa').style.left) > limiteEsqTela) {
                document.getElementById('canoa').src = "imagens/moliceirodireita.png";
                document.getElementById('canoa').style.left = parseInt(document.getElementById('canoa').style.left) - 8 + "px";

            }
            break;


    }
    /*
    larguraFlamingo= 91;
    alturaFlamingo= 119;
    larguraMoliceiro=200;
    larguraCasa=340;
    alturaCasa=180;
    larguraPedaco= 135;
    alturaPedaco=451;
    */





/*
    if (resultado == true) {
        console.log('resultador foi true, entrou no if')

    }

*/


}

function verificar_colisao(idobstaculo, idjogador,larguraObs,alturaObs,larguraJogador,alturaMoliceiro,velocidadeobs,velocidademoliceiro,colisao){

    /*console.log(idobstaculo, idjogador,larguraObs,alturaObs,larguraJogador)*/
    limiteEsqmoli = Math.min(parseInt(document.getElementById(idjogador).style.left), parseInt(document.getElementById(idjogador).style.left) - velocidademoliceiro);
    limiteDireitamoli =  Math.max(limiteEsqmoli + larguraJogador, limiteEsqmoli + larguraJogador - velocidademoliceiro);
    limiteTopomoli = parseInt(document.getElementById(idjogador).style.top);

    limiteEsqObs = Math.min(parseInt(document.getElementById(idobstaculo).style.left), parseInt(document.getElementById(idobstaculo).style.left) - velocidadeobs) ;
    limiteDireitaObs = Math.max(limiteEsqObs + larguraObs, limiteEsqObs  + larguraObs - velocidadeobs);
    limiteBottomObs =  Math.max(parseInt(document.getElementById(idobstaculo).style.top) + alturaObs, parseInt(document.getElementById(idobstaculo).style.top) + alturaObs - velocidadeobs);

/*
    min(a.x, a.x - a.velocity_x), instead of a.x + a.width use max(a.x + a.width, a.x + a.width - a.velocity_x)
*/

    if(( (limiteBottomObs >= limiteTopomoli) && (limiteEsqObs >= limiteEsqmoli) && (limiteDireitaObs <= limiteDireitamoli)) || ((limiteBottomObs >= limiteTopomoli) && (limiteDireitaObs <= limiteDireitamoli) && (limiteEsqObs >= limiteEsqmoli)) ){
        console.log('detetou colisao com o obstaculo' + idobstaculo)
        clash.play();
        clash.loop=false;
        //if (vidas <= 0) {
            fim_jogo();
            document.getElementById('canoa').style.display="none";
            document.getElementById('continue').style.display="none";
            document.getElementById('perdeste').style.display="block";
        }/*else{
            console.log('colidiu')
            clash.play();
            colisao++;
            if(colisao == 1){
                vidas--;
                console.log('vidas:'+ vidas);
                perderVida.play();
                perderVida.volume = 0.3;
                document.getElementById('vida' + vidas).style.visibility = "hidden";}
        }}*/

}


function obstaculos_ultrapassados() {
    displayflamingo = document.getElementById('flamingo').style.display;
    displayflamengo = document.getElementById('flamengo').style.display;
    // displaycasa = document.getElementById('casa').style.display;
    displaypedaco =document.getElementById('pedaco').style.display;
    if((displayflamengo == "none")&&(displayflamingo == "none")&&(displaypedaco=='none')){
        estado = 1;
        return estado;
    }

}
function plataforma(){
    if(parseInt(document.getElementById('plataforma').style.top) >150){
        console.log('cleared interval platform')
        clearInterval(timerplataforma)
        return 1;
    }else {

        if (parseInt(document.getElementById("canoa").style.left)<485){
            console.log("menor");
            document.getElementById("canoa").style.left="486px";
        }
            document.getElementById('plataforma').style.display = "block";
            console.log('entrou no else da função plataforma')
            document.getElementById('plataforma').style.top = parseInt(document.getElementById('plataforma').style.top) + 5 + "px";
            return true;
        }


}
function fim_jogo(){
    musicaFundo.pause();
    clearInterval(timerpedaco);
    clearInterval(timerflamingo);
    clearInterval(timerflamengo);
    // clearInterval(timercasa);
   // document.getElementById('caixavidas').style.display="none";
    document.getElementById('canoa').src="imagens/moliceirovazio.png";
    document.getElementById('plataforma').src="imagens/characterplataforma.png";
    document.getElementById('flamingo').style.display="none";
    document.getElementById('flamengo').style.display="none";
    // document.getElementById('casa').style.display="none";
    document.getElementById('pedaco').style.display="none";
    document.getElementById('continue').style.display="block";
}