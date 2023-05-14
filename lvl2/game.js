window.onload=function () {
    // VARIAVEIS
var jogador1= document.getElementById("jogador1");
var jogador2= document.getElementById("jogador2");
var jogador3= document.getElementById("jogador3");
sonoro= new Audio ("assets/som.mp3");
// POSICIONAMENTOS
iniciar();

    console.log(jogador1.style.left);
    
    window.onkeydown=function(){
        sonoro.play();
        processatecla(window.event.key);
        console.log(window.event.key);
}

// document.getElementById("continuar").onclick=function(){
//     alert("Ainda não está pronto.");
// }
}
var fim;
var n=30;
var sprite=0;
function iniciar(){
    document.getElementById("grande").src="assets/gato_grande.png";
        document.getElementById("grande").style.top="360px";
        document.getElementById("grande").style.left="-20px";
        document.getElementById("beforetext").innerHTML="Miaow.";
        document.getElementById("aftertext").innerHTML="Miaoooooooooooooow.";
    document.getElementById("vencedor").style.display="none";
    document.getElementById("derrotado").style.display="none";
    jogador1.style.display="block";
jogador2.style.display="none";
jogador3.style.display="none";
jogador2.style.left=1196+"px";
jogador3.style.left=23+"px";
jogador1.style.left=Math.floor(Math.random()*950)+45+'px';
jogador1.style.top=163+"px";
document.getElementById("gato").style.top=191+"px";
document.getElementById("gato").style.left=611+"px";
document.getElementById("irmao").style.top=388+"px";
document.getElementById("irmao").style.left=226+"px";
document.getElementById("pai").style.top=588+"px";
document.getElementById("pai").style.left=366+"px";
document.getElementById("mae").style.top=582+"px";
document.getElementById("mae").style.left=683+"px"; 
document.getElementById("gato").style.display="block";
document.getElementById("irmao").style.display="block";
document.getElementById("pai").style.display="block";
document.getElementById("mae").style.display="block";
document.getElementById("conf4").src="assets/errado_jogo_lab3.jpg";
document.getElementById("conf3").src="assets/errado_jogo_lab3.jpg";
document.getElementById("conf2").src="assets/errado_jogo_lab3.jpg";
document.getElementById("conf1").src="assets/errado_jogo_lab3.jpg";
document.getElementById("dialogo").style.display="none";
temporizador= setTimeout (derrota, 30000);
contador=setInterval (counter, 1000);
}
function processatecla(evt){
    // RESTART E ALERTS
    if (evt=="r"){
    clearInterval (contador);
    clearTimeout (temporizador);
    n=30;
    iniciar();
        
    }
    if (evt=="p"){
        clearTimeout(temporizador);
        clearInterval(contador);
        fim=1;
        }
        if(evt=="o"){
            temporizador=setTimeout(derrota, n*1000);
            contador=setInterval(counter, 1000);
            fim=0;
        }
    if (evt!="d" && evt!="a" && evt!="ArrowRight" && evt!="ArrowLeft"){
        return;
    }
    if (parseInt(jogador3.style.left)>870){
        document.getElementById("vencedor").style.display="block";
        clearInterval (contador);
        clearTimeout (temporizador);
        return;
    }
    // MOVIMENTO
    if (evt == "d" || evt=="ArrowRight"){
        if(fim==1){
            return;
        }
        if(parseInt(jogador1.style.left)>1200||parseInt(jogador2.style.left)>1200||parseInt(jogador3.style.left)>1200){
            return;
        }
        if(jogador1.style.display=="block"){
            jogador1.style.left=parseInt(jogador1.style.left)+10+"px";
        }
        if(jogador2.style.display=="block"){
            jogador2.style.left=parseInt(jogador2.style.left)+10+"px";
        }
        if(jogador3.style.display=="block"){
            jogador3.style.left=parseInt(jogador3.style.left)+10+"px";
        }
        sprite++;
        if(sprite>3){
            sprite=1;
        }
        document.getElementById("jogador1").src="assets/Moving"+sprite+"_right.png";
        document.getElementById("jogador2").src="assets/Moving"+sprite+"_right.png";
        document.getElementById("jogador3").src="assets/Moving"+sprite+"_right.png";
    }
    if (evt == "a" || evt=="ArrowLeft"){
        if(fim==1){
            return;
        }
        if(parseInt(jogador1.style.left)<20||parseInt(jogador2.style.left)<20||parseInt(jogador3.style.left)<20){
            return;
        }
        if(jogador1.style.display=="block"){
            jogador1.style.left=parseInt(jogador1.style.left)-10+"px";
        }        
        if(jogador2.style.display=="block"){
            jogador2.style.left=parseInt(jogador2.style.left)-10+"px";
        }
        if(jogador3.style.display=="block"){
            jogador3.style.left=parseInt(jogador3.style.left)-10+"px";
        }
        sprite++;
        if(sprite>3){
            sprite=1;
        }
        document.getElementById("jogador1").src="assets/Moving"+sprite+"_left.png";
        document.getElementById("jogador2").src="assets/Moving"+sprite+"_left.png";
        document.getElementById("jogador3").src="assets/Moving"+sprite+"_left.png";
    }
    // ANDARES
    if (parseInt(jogador1.style.left)>1036){
        if(document.getElementById("gato").style.display!="none"){
            alert("Não te esqueças do Tobias!")
            return;
        }
        jogador1.style.display="none";
        jogador2.style.display="block";
    }
    if (parseInt(jogador2.style.left)<90){
        jogador2.style.display="none";
        jogador3.style.display="block"; 
    }
    // COLISOES
    if (parseInt(jogador1.style.left)>578 && parseInt(jogador1.style.left)<663){
        if (document.getElementById("gato").style.display=="none"){
            return;
        }
        document.getElementById("gato").style.display="none";
        document.getElementById("conf4").src="assets/certo_lab3.jpg";
        document.getElementById("dialogo").style.display="block";
        document.getElementById("before").style.display="block";
        document.getElementById("after").style.display="none";
        clearTimeout(temporizador);
        clearInterval(contador);
        fim=1;
    }
    
    if (parseInt(jogador2.style.left)>226 && parseInt(jogador2.style.left)<260){
        if (document.getElementById("irmao").style.display=="none"){
            return;
        }
        document.getElementById("irmao").style.display="none";
        document.getElementById("conf3").src="assets/certo_lab3.jpg";
        document.getElementById("grande").src="assets/irmao_grande.png";
        document.getElementById("grande").style.top="310px";
        document.getElementById("grande").style.left="5px";
        document.getElementById("beforetext").innerHTML="Aqui no meu jogo está um urso polar. O que é isso?";
        document.getElementById("aftertext").innerHTML="Para onde vamos?";
        document.getElementById("dialogo").style.display="block";
        document.getElementById("before").style.display="block";
        document.getElementById("after").style.display="none";
        clearTimeout(temporizador);
        clearInterval(contador);
        fim=1;
    }

    if (parseInt(jogador3.style.left)>336 && parseInt(jogador3.style.left)<399){
        if (document.getElementById("pai").style.display=="none"){
            return;
        }
        document.getElementById("pai").style.display="none";
        document.getElementById("conf2").src="assets/certo_lab3.jpg";
        document.getElementById("grande").src="assets/pai_grande.png";
        document.getElementById("beforetext").innerHTML="Ah,estás aí! O bom disto da subida do nível do mar, é que temos o mar mesmo à porta.. Mas a subida da temperatura da água faz afugentar os peixes todos, já não se apanha nada há meses…";
        document.getElementById("aftertext").innerHTML="Afinal os jovens tinham razão… Mas eu não lhes vou dar a razão! Nem que a água chegue aos meus bigodes!";
        document.getElementById("dialogo").style.display="block";
        document.getElementById("before").style.display="block";
        document.getElementById("after").style.display="none";
        clearTimeout(temporizador);
        clearInterval(contador);
        fim=1;
    }

    if (parseInt(jogador3.style.left)>672 && parseInt(jogador3.style.left)<730){
        if (document.getElementById("mae").style.display=="none"){
            return;
        }
        document.getElementById("mae").style.display="none";
        document.getElementById("conf1").src="assets/certo_lab3.jpg";
        document.getElementById("grande").src="assets/mae_grande.png";
        document.getElementById("grande").style.left="-10px";
        document.getElementById("beforetext").innerHTML="Vais para a escola e deixas o teu quarto naquele estado? Limpa-me mas é isso antes de ir embora!";
        document.getElementById("aftertext").innerHTML="Ai, não acredito que vamos abandonar a casa dos meus bisavôs…";
        document.getElementById("dialogo").style.display="block";
        document.getElementById("before").style.display="block";
        document.getElementById("after").style.display="none";
        clearTimeout(temporizador);
        clearInterval(contador);
        fim=1;
    }
document.getElementById("beforebtn").onclick=function(){
        document.getElementById("before").style.display="none";
        document.getElementById("after").style.display="block";
    }
    document.getElementById("afterbtn").onclick=function(){
        document.getElementById("dialogo").style.display="none";
        temporizador=setTimeout(derrota, n*1000);
            contador=setInterval(counter, 1000);
            fim=0;
    }
    
    console.log(evt);
}
// FIM
function derrota (){
    console.log("perdeu");
    // document.getElementById("derrotado").style.display="block";
    clearInterval (contador);
    clearTimeout (temporizador);
    fim=1;
}
function counter(evt){
    if (n>0){
       n--;
    document.getElementById("contador").innerHTML=n; 
    }else{
        clearInterval;
    }
}