window.onload = function() {
    // 手机端语音旁下三角点击事件
    var icon_arrow = document.getElementById("icon-arrow");
    icon_arrow.onclick = function() {
            var icon_open = document.getElementById("icon-open");
        if (icon_arrow.className == "icon-arrow") {
            icon_arrow.className = "icon-arrow icon-arrow2";
            icon_open.style.display="block";

        } else {
            icon_arrow.className = "icon-arrow";
            icon_open.style.display="none";
        }
    }
};
//pc端更多产品
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
