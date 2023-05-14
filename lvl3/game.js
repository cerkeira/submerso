var hit, fimhit, posicao, selecionados;
sonoro= new Audio ("assets/boss.mp3");
window.onload=function(){
    document.getElementById("polvida").innerHTML+=polvida;
    document.getElementById("uservida").innerHTML+=polvida;

    window.onkeydown=function(evt){
    evt=event.key;
    console.log(event.key);
    if(evt=="r"){
        iniciar();
    }
}
window.onclick=function(){
    sonoro.pause();
    sonoro.play();
}
document.getElementById("opcao1").onclick=function(){
    selecionados++;
    if(selecionados!=0){
        document.getElementById("opcao1").style.color="white";
        document.getElementById("opcao2").style.color="white";
        document.getElementById("opcao3").style.color="white";
        document.getElementById("opcao4").style.color="white";
    }
    ataque=1;
    document.getElementById("opcao1").style.color="yellow";
}
document.getElementById("opcao2").onclick=function(){
    selecionados++;
    if(selecionados!=0){
        document.getElementById("opcao1").style.color="white";
        document.getElementById("opcao2").style.color="white";
        document.getElementById("opcao3").style.color="white";
        document.getElementById("opcao4").style.color="white";
    }
    ataque=2;
    document.getElementById("opcao2").style.color="yellow";
}
document.getElementById("opcao3").onclick=function(){
    selecionados++;
    if(selecionados!=0){
        document.getElementById("opcao1").style.color="white";
        document.getElementById("opcao2").style.color="white";
        document.getElementById("opcao3").style.color="white";
        document.getElementById("opcao4").style.color="white";
    }
    ataque=3;
    document.getElementById("opcao3").style.color="yellow";
}
document.getElementById("opcao4").onclick=function(){
    selecionados++;
    if(selecionados!=0){
        document.getElementById("opcao1").style.color="white";
        document.getElementById("opcao2").style.color="white";
        document.getElementById("opcao3").style.color="white";
        document.getElementById("opcao4").style.color="white";
    }
    ataque=4;
    document.getElementById("opcao4").style.color="yellow";
}
document.getElementById("chorar").onclick=function(){
    if (choro==0){
    document.getElementById("chorar").style.color="yellow";
    choro=1
}
}
document.getElementById("atacar").onclick=function(){
    console.log(ronda);
    document.getElementById("opcao1").style.color="white";
    document.getElementById("opcao2").style.color="white";
    document.getElementById("opcao3").style.color="white";
    document.getElementById("opcao4").style.color="white";
    polvidapassado=polvida;
    uservidapassado=uservida;
    document.getElementById("uservida").style.color="yellow";
    document.getElementById("polvida").style.color="yellow";


    switch (ronda){
    case 1:
        document.getElementById("opcao1").innerHTML="<h1>Isso trará uma sobrepesca das espécies que por sua vez causará a extinção das espécies pescadas!</h1>";
    document.getElementById("opcao2").innerHTML="<h1>O aquecimento global contribui para o aumento da temperatura do mar, o que leva à migração de espécies de água fria!</h1>";
    document.getElementById("opcao3").innerHTML="<h1>Os pescadores são os que tradicionalmente vivem mais perto do mar e da ria, as suas casas estarão submersas!</h1>";
    document.getElementById("opcao4").innerHTML="<h1>Em Ílhavo já não se pesca como antigamente e não! As grandes empresas levam tudo.</h1>";
    vida1=10;
    vida2=0;
    vida3=0;
    vida4=20;
    dano1=0;
    dano2=20;
    dano3=20;
    dano4=0;
        document.getElementById("feito").innerHTML='"A subida do nível de água do mar traz as suas vantagens: os peixes estarão mais perto de nós para pescar!"';
        break;
    case 2:
        document.getElementById("politico").src="assets/Politician_Angry.png";
        document.getElementById("opcao1").innerHTML="<h1>Quem contribui menos para as emissões de gases com efeito de estufa como o CO2, serão os mais afetados pelas alterações climáticas.</h1>";
    document.getElementById("opcao2").innerHTML="<h1>É um sacrifício que temos que fazer para chegar aos nossos objetivos de minimizar as alterações climáticas.</h1>";
    document.getElementById("opcao3").innerHTML="<h1>A restrições nas emissões de carbono vão ser contrariadas com incentivos financeiros para as empresas para emitirem menos.</h1>";
    document.getElementById("opcao4").innerHTML="<h1>É preciso criar uma transição justa das pessoas para novos empregos em indústrias de renováveis.</h1>";
    vida1=0;
    vida2=20;
    vida3=10;
    vida4=0;
    dano1=20;
    dano2=0;
    dano3=0;
    dano4=20;
        document.getElementById("feito").innerHTML='"Não é impor essas restrições todas na produção que vamos lá… Só prejudicará os que mais precisam! Sem economia não há soluções climáticas"';
        break;
    case 3:
        document.getElementById("opcao1").innerHTML="<h1>Cerca de 97% dos cientistas  concordam que a atividade humana é causa do aquecimento global que por sua vez causa a subida do nível das águas do mar.</h1>";
    document.getElementById("opcao2").innerHTML="<h1>A subida do nível das águas do mar é causada pelo derreter de camadas de gelo e de glaciares, e pela expansão térmica das moléculas de água.</h1>";
    document.getElementById("opcao3").innerHTML="<h1>Pode não ter a ver, mas está a afectar as populações de igual forma! É razão para não fazer nada em relação a isso?</h1>";
    document.getElementById("opcao4").innerHTML="<h1>Indiretamente, sim.  A subida do nível das águas do mar é causada pelo derreter de camadas de gelo e de glaciares, e pela expansão térmica das moléculas de água. Estas duas causas estão relacionadas com o aquecimento global.</h1>";
    vida1=20;
    vida2=0;
    vida3=10;
    vida4=20;
    dano1=0;
    dano2=20;
    dano3=0;
    dano4=0;       
        document.getElementById("feito").innerHTML='"Não é confirmado que a subida do nível das águas do mar é  causada pelos humanos!"';
        document.getElementById("opcao1").style.fontSize="9px";
        document.getElementById("opcao2").style.fontSize="9px";
        document.getElementById("opcao3").style.fontSize="9px";
        document.getElementById("opcao4").style.fontSize="9px";
        document.getElementById("opcao1").style.top="90px";
        document.getElementById("opcao4").style.top="415px";
        document.getElementById("opcao4").style.left="810px";
        break;
    case 4:
        document.getElementById("politico").src="assets/Final_Form.png";
        document.getElementById("opcao1").innerHTML="<h1>Tem razão,mas o que nos resta fazer senão tentar?</h1>";
    document.getElementById("opcao2").innerHTML="<h1>Nunca é demasiado tarde. </h1>";
    document.getElementById("opcao3").innerHTML="<h1>Mas podemos evitar ainda mais catástrofe!</h1>";
    document.getElementById("opcao4").innerHTML="<h1>A esperança é  a última a morrer</h1>";
    vida1=20;
    vida2=10;
    vida3=0;
    vida4=20;
    dano1=0;
    dano2=0;
    dano3=20;
    dano4=0;  
        document.getElementById("feito").innerHTML='"Já é tarde demais para fazer alguma coisa!"';
        document.getElementById("opcao1").style.fontSize="11px";
        document.getElementById("opcao2").style.fontSize="11px";
        document.getElementById("opcao3").style.fontSize="11px";
        document.getElementById("opcao4").style.fontSize="11px";
        document.getElementById("opcao4").style.top="415px";
        document.getElementById("opcao4").style.left="810px";
        break;
    case 5:
        vida1=0;
        vida2=20;
        vida3=10;
        vida4=20;
        dano1=20;
        dano2=0;
        dano3=0;
        dano4=0;
        if (uservida<polvida){
            document.getElementById("derrotado").style.display="block";
        }else{
            document.getElementById("vencedor").style.display="block";
        }
        break;
}
ronda++;
if (choro==1){
    somchorar= new Audio ("assets/choro.mp3");
    somchorar.play();
    hit=setInterval(tremer, 50);
    fimhit=setTimeout(fimtremer, 1000);
    vida1=vida1*2;
    vida2=vida2*2;
    vida3=vida3*2;
    vida4=vida4*2;
    choro=2;
    document.getElementById("chorar").style.color="darkgrey";
}
    switch (ataque){
        case 1:
            polvida=polvida-vida1;
            uservida=uservida-dano1;
            timeoutvida = setTimeout (timeoutvida , vida1*40);
            timeoutdano = setTimeout (timeoutdano , dano1*40);
            timervida = setInterval (timervida , vida1/(vida1/40));
            timerdano = setInterval (timerdano , dano1/(dano1/40));
            break;
            case 2:
                polvida=polvida-vida2;
                uservida=uservida-dano2;
                timeoutvida = setTimeout (timeoutvida , vida2*40);
                timeoutdano = setTimeout (timeoutdano , dano2*40);
                timervida = setInterval (timervida , vida2/(vida2/40));
            timerdano = setInterval (timerdano , dano2/(dano2/40));
                break;
                case 3:
                    polvida=polvida-vida3;
                    uservida=uservida-dano3;
                    timeoutvida = setTimeout (timeoutvida , vida3*40);
                timeoutdano = setTimeout (timeoutdano , dano3*40);
                timervida = setInterval (timervida , vida3/(vida3/40));
            timerdano = setInterval (timerdano , dano3/(dano3/40));
                    break;
                    case 4:
                        polvida=polvida-vida4;
                        uservida=uservida-dano4;
                        timeoutvida = setTimeout (timeoutvida , vida4*40);
                timeoutdano = setTimeout (timeoutdano , dano4*40);
                timervida = setInterval (timervida , vida4/(vida4/40));
            timerdano = setInterval (timerdano , dano4/(dano4/40));
                        break;
                        default:
                            uservida=0;
    }

    function timeoutvida() {
        clearInterval (timervida);
        document.getElementById("polvida").innerHTML="<img id='polimg' src='assets/Politician_Happy.png'>:"+polvida;
        document.getElementById("polvida").style.color="white";
    }

    function timeoutdano(){
        clearInterval (timerdano);
        document.getElementById("uservida").innerHTML="<img id='userimg' src='assets/personagem_grande.png'>: "+uservida;
        document.getElementById("uservida").style.color="white";
    }
    function timervida(){
        polvidapassado--;
        document.getElementById("polvida").innerHTML="<img id='polimg' src='assets/Politician_Happy.png'>:"+polvidapassado;
    }
    function timerdano(){
        uservidapassado--;
        document.getElementById("uservida").innerHTML="<img id='userimg' src='assets/personagem_grande.png'>: "+uservidapassado;
    }
    if(uservida<=0){
        document.getElementById("derrotado").style.display="block";
    }
    if(polvida<=0){
        document.getElementById("vencedor").style.display="block";
    }
}
}

function iniciar(){
    choro=0;
    polvida=100;
uservida=100;
vida1=10;
vida2=0;
vida3=0;
vida4=20;
ronda=1;
dano1=0;
dano2=20;
dano3=20;
dano4=0;
document.getElementById("opcao1").innerHTML="<h1>A ciencia climática olha para os fenômenos climáticos ao longo da história e não a curto prazo.</h1>";
document.getElementById("opcao2").innerHTML="<h1>Tem razão… Mas já viu o resto do ano o calor que está?</h1>";
document.getElementById("opcao3").innerHTML="<h1>É Inverno,  é claro que vai nevar na Serra da Estrela!</h1>";
document.getElementById("opcao4").innerHTML="<h1>As alterações climáticas não são evidenciadas por temperaturas altas, mas sim por eventos meteorológicos cada vez mais extremos.</h1>";
document.getElementById("feito").innerHTML='"Aquecimento global? Com a neve a cair na Serra da Estrela?"';
document.getElementById("derrotado").style.display="none";
document.getElementById("polvida").innerHTML="<img id='polimg' src='assets/Politician_Happy.png'>:"+polvida;
    document.getElementById("uservida").innerHTML="<img id='userimg' src='assets/personagem_grande.png'>: "+uservida;
    document.getElementById("vencedor").style.display="none";
}


var polvidapassado;
var uservidapassado;
var ataque;
var polvida=100;
var uservida=100;
var vida1;
var vida2;
var vida3;
var vida4;
var ronda=1;
var choro=0;
var dano1;
var dano2;
var dano3;
var dano4;






function tremer(){
        posicao=Math.floor(Math.random()*7)+1;
        console.log(posicao);
        switch (posicao){
                case 1:
                    document.getElementById("politico").style.left=455+"px";
                    document.getElementById("politico").style.top=81+"px";
                    break;
                case 2:
                    document.getElementById("politico").style.left=445+"px";
                    document.getElementById("politico").style.top=91+"px";
                    break;

                case 3:
                    document.getElementById("politico").style.left=465+"px";
                    document.getElementById("politico").style.top=71+"px";
                    break;
                case 4:
                    document.getElementById("politico").style.left=475+"px";
                    document.getElementById("politico").style.top=61+"px";
                    break;
                case 5:
                    document.getElementById("politico").style.left=445+"px";
                    document.getElementById("politico").style.top=71+"px";
                    break;
                case 6:
                    document.getElementById("politico").style.left=440+"px";
                    document.getElementById("politico").style.top=91+"px";
                    break;
                case 7:
                    document.getElementById("politico").style.left=460+"px";
                    document.getElementById("politico").style.top=87+"px";
                    break;
                }
    }

    function fimtremer(){
        clearInterval(hit);
        document.getElementById("politico").style.left="455px";
                document.getElementById("politico").style.top="81px";
    }