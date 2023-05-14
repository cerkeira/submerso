
window.onload = function () {

        document.getElementById("play").onclick = function () {
            document.getElementById("video").innerHTML="<video width='1280' height='720' id='videozinho' autoplay><source src='nivel1.5_1080.mp4' type='video/mp4'></video>";
            document.getElementById('play').style.display = "none";
            document.getElementById("continue").style.display="block";
}
}