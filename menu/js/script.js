window.onload = function(){

    var vid= document.getElementById("videozinho");
    myAudio= new Audio ('No-Destination.ogg');
    aud= new Audio ('clique.ogg');
    dio= new Audio ('som_viva.ogg');
    //var name = document.getElementById("start").value;

    start ();

    function start() {

        document.getElementById("inicio_jogo").style.display="none";
        document.getElementById("nomescreditos").style.display="none";
        document.getElementById("pergunta_viva").style.display="none";
        document.getElementById("pergunta_nome").style.display="none";
        myAudio.play();
        myAudio.loop = true;
    }

    function menu(){
        document.getElementById("corpomenu").style.display="none";
        document.getElementById("inicio_jogo").style.display="block";
        document.getElementById("skip").style.display="block";
        myAudio.pause();
    }

    function skip (){
        document.getElementById("inicio_jogo").style.display="none";
        document.getElementById("skip").style.display="none";
        document.getElementById("pergunta_viva").style.display="block";
        vid.pause();
    }

    function creditos (){
        document.getElementById("corpomenu").style.display="none";
        document.getElementById("nomescreditos").style.display="block";
    }

    function confirmado(){
        document.getElementById("pergunta_viva").style.display="none";
        document.getElementById("pergunta_nome").style.display="block";
        document.getElementById("eonome").style.display="none";
        aud.play()
        dio.play();
    }


document.getElementById("play").onclick=function(){
    menu ();
    document.getElementById("skip").onclick=function(){
    skip ();
    }
    vid.autoplay=true;
    vid.load();
}

vid.onended=function(){
    skip();
}

document.getElementById("credits").onclick=function(){
    creditos ();
    document.getElementById("setatras").onclick=function(){
        document.getElementById("corpomenu").style.display="block";
        document.getElementById("nomescreditos").style.display="none";
    }
}


document.getElementById("opcions").onclick=function(){
    alert("Até à próxima!");
}

document.getElementById("confirmacao").onclick=function(){
    confirmado();
}
document.getElementById("start").onclick=function(){

}

}






