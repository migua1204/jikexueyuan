window.onload = function() {};

function onMores() {
    var side = document.getElementById("side");
    var more = document.getElementById("more");
    side.style.display = "";
    more.style.display = "none";
}

function outMores() {
    var side = document.getElementById("side");
    var more = document.getElementById("more");
    side.style.display = "none";
    more.style.display = "";
}

function onSet() {
    var setmenu = document.getElementById("setmenu");
    setmenu.style.display = "block";
}

function outSet() {
    var setmenu = document.getElementById("setmenu");
    setmenu.style.display = "none";
}
