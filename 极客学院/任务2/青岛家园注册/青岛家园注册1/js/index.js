window.onload = function() {
    years(); //计算所有出生年份
    var primarybox = document.getElementById("primarybox");
    var primary = document.getElementById("primary");
    var primarydefault = document.getElementById("primarydefault");
    primarybox.onclick = function() {
        if (primarybox.checked) {
            primary.style.display = "inline-block";
            primarydefault.style.display = "none";
            return;
        }
        primary.style.display = "none";
        primarydefault.style.display = "inline-block";
    }

    var middlebox = document.getElementById("middlebox");
    var middle= document.getElementById("middle");
    var middledefault = document.getElementById("middledefault");
    middlebox.onclick = function() {
        if (middlebox.checked) {
            middle.style.display = "inline-block";
            middledefault.style.display = "none";
            return;
        }
        middle.style.display = "none";
        middledefault.style.display = "inline-block";
    }

    var highbox = document.getElementById("highbox");
    var high= document.getElementById("high");
    var highdefault = document.getElementById("highdefault");
    highbox.onclick = function() {
        if (highbox.checked) {
            high.style.display = "inline-block";
            highdefault.style.display = "none";
            return;
        }
        high.style.display = "none";
        highdefault.style.display = "inline-block";
    }
        var universitybox = document.getElementById("universitybox");
    var university= document.getElementById("university");
    var universitydefault = document.getElementById("universitydefault");
    universitybox.onclick = function() {
        if (universitybox.checked) {
            university.style.display = "inline-block";
            universitydefault.style.display = "none";
            return;
        }
        university.style.display = "none";
        universitydefault.style.display = "inline-block";
    }
        var englishbox = document.getElementById("englishbox");
    var english= document.getElementById("english");
    var englishdefault = document.getElementById("englishdefault");
    englishbox.onclick = function() {
        if (englishbox.checked) {
            english.style.display = "inline-block";
            englishdefault.style.display = "none";
            return;
        }
        english.style.display = "none";
        englishdefault.style.display = "inline-block";
    }
        var minoritybox = document.getElementById("minoritybox");
    var minority= document.getElementById("minority");
    var minoritydefault = document.getElementById("minoritydefault");
    minoritybox.onclick = function() {
        if (minoritybox.checked) {
            minority.style.display = "inline-block";
            minoritydefault.style.display = "none";
            return;
        }
        minority.style.display = "none";
        minoritydefault.style.display = "inline-block";
    }
        var artbox = document.getElementById("artbox");
    var art= document.getElementById("art");
    var artdefault = document.getElementById("artdefault");
    artbox.onclick = function() {
        if (artbox.checked) {
            art.style.display = "inline-block";
            artdefault.style.display = "none";
            return;
        }
        art.style.display = "none";
        artdefault.style.display = "inline-block";
    }
        var musicbox = document.getElementById("musicbox");
    var music= document.getElementById("music");
    var musicdefault = document.getElementById("musicdefault");
    musicbox.onclick = function() {
        if (musicbox.checked) {
            music.style.display = "inline-block";
            musicdefault.style.display = "none";
            return;
        }
        music.style.display = "none";
        musicdefault.style.display = "inline-block";
    }
        var computerbox = document.getElementById("computerbox");
    var computer= document.getElementById("computer");
    var computerdefault = document.getElementById("computerdefault");
    computerbox.onclick = function() {
        if (computerbox.checked) {
            computer.style.display = "inline-block";
            computerdefault.style.display = "none";
            return;
        }
        computer.style.display = "none";
        computerdefault.style.display = "inline-block";
    }
        var sportbox = document.getElementById("sportbox");
    var sport= document.getElementById("sport");
    var sportdefault = document.getElementById("sportdefault");
    sportbox.onclick = function() {
        if (sportbox.checked) {
            sport.style.display = "inline-block";
            sportdefault.style.display = "none";
            return;
        }
        sport.style.display = "none";
        sportdefault.style.display = "inline-block";
    }

};
/* 计算所有出生年份出生年份*/
function years() {
    var birth = document.getElementById('birth');
    var date = new Date();
    var year = date.getFullYear();
    for (var i = 1945; i < year + 1; i++) {
        var option = document.createElement("option");
        option.value = "value";
        option.innerHTML = i;
        birth.appendChild(option);
    }
}
