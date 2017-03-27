var val = ""; //选中的子辅导科目,需要全局
var var2 = ""; //选中的具体区域，需要全局

window.onload = function() {
    years(); //计算所有出生年份
    var subject = document.getElementById("subject"); //获取可辅导的类别对象
    var sort = document.getElementsByClassName("sort"); //获取class为sort的所有select对象

    subject.onchange = function() {
        changeSubject(); //显示对应可辅导科目
    }
    for (var i = 0; i < sort.length; i++) {
        sort.item(i).onchange = function() {
            val = this.value;
        }
    }
    var area = document.getElementById("area"); //获取授课区域对象
    var section = document.getElementsByClassName("section"); //获取class为section的所有select对象
    area.onchange = function() {
        changeSection(); //显示对应具体区域
    }
    for (var i = 0; i < section.length; i++) {
        section.item(i).onchange = function() {
            val2 = this.value;
        }
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
/*显示对应可辅导科目*/
function changeSubject() {
    sort = document.getElementsByClassName("sort"); //获取class为sort的所有select对象
    var subjectdefault = document.getElementById("subjectdefault"); //获取默认select对象
    /*所有select初始化不可见，仅默认的select可见*/
    for (var i = 0; i < sort.length; i++) {
        sort.item(i).style.display = "none";
        subjectdefault.style.display = "inline-block";
    }
    var index = subject.selectedIndex; // 选中的类别索引
    if (index != 0) {
        if (subject.value == "小学") {
            var primary = document.getElementById("primary");
            primary.style.display = "inline-block";
        } else if (subject.value == "初中") {
            var middle = document.getElementById("middle");
            middle.style.display = "inline-block";
        } else if (subject.value == "高中") {
            var high = document.getElementById("high");
            high.style.display = "inline-block";
        } else if (subject.value == "大学") {
            var university = document.getElementById("university");
            university.style.display = "inline-block";
        } else if (subject.value == "英语") {
            var english = document.getElementById("english");
            english.style.display = "inline-block";
        } else if (subject.value == "小语种") {
            var minority = document.getElementById("minority");
            minority.style.display = "inline-block";
        } else if (subject.value == "艺术") {
            var art = document.getElementById("art");
            art.style.display = "inline-block";
        } else if (subject.value == "乐器") {
            var music = document.getElementById("music");
            music.style.display = "inline-block";
        } else if (subject.value == "计算机") {
            var computer = document.getElementById("computer");
            computer.style.display = "inline-block";
        } else {
            var sport = document.getElementById("sport");
            sport.style.display = "inline-block";
        }
        subjectdefault.style.display = "none";
    }
}
/*添加辅导科目*/
function addSubject() {
    var newsub = subject.value;
    if (newsub == "default") {
        alert("请先选择辅导类别！");
        return;
    }
    if (val == "default") {
        alert("请先选择辅导科目！");
        return;
    }
    var elems = document.getElementsByClassName("elem");
    if (elems.length >= 10) {
        alert("可辅导的科目不超过10项!");
        return;
    }
    for (var i = 0; i < elems.length; i++) {
        if (elems.item(i).id == val) {
            alert("该科目已加入可选！请重新选择！");
            return;
        }
    }
    var subject_div = document.getElementById("subject_div");
    var elem = document.createElement("span");
    elem.id = val;
    elem.className = "elem";
    elem.innerHTML = "<br/>" + newsub + ":" + val + "<button type='button' onclick='deleteSubject("+val+");'>删除</button>";
    subject_div.appendChild(elem);
}
/*删除科目元素*/
function deleteSubject(obj) {
    var subject_div = document.getElementById("subject_div");
    subject_div.removeChild(obj);
}
/*显示对应具体授课区域*/
function changeSection() {
    var section = document.getElementsByClassName("section"); //获取class为section的所有select对象
    var sectiondefault = document.getElementById("sectiondefault"); //获取默认select对象
    /*所有select初始化不可见，仅默认的select可见*/
    for (var i = 0; i < section.length; i++) {
        section.item(i).style.display = "none";
        sectiondefault.style.display = "inline-block";
    }
    var index = area.selectedIndex; // 选中的区域索引
    if (index != 0) {
        if (area.value == "市南全区") {
            var south = document.getElementById("south");
            south.style.display = "inline-block";
        } else if (area.value == "市北全区") {
            var north = document.getElementById("north");
            north.style.display = "inline-block";
        } else if (area.value == "四方全区") {
            var sifang = document.getElementById("sifang");
            sifang.style.display = "inline-block";
        } else if (area.value == "李沧全区") {
            var licang = document.getElementById("licang");
            licang.style.display = "inline-block";
        } else if (area.value == "崂山全区") {
            var laoshan = document.getElementById("laoshan");
            laoshan.style.display = "inline-block";
        } else if (area.value == "城阳") {
            var chengyang = document.getElementById("chengyang");
            chengyang.style.display = "inline-block";
        } else if (area.value == "黄岛") {
            var huangdao = document.getElementById("hangdao");
            huangdao.style.display = "inline-block";
        } else if (area.value == "即墨") {
            var jimo = document.getElementById("jimo");
            jimo.style.display = "inline-block";
        } else if (area.value == "胶州") {
            var jiaozhou = document.getElementById("jiaozhou");
            jiaozhou.style.display = "inline-block";
        } else if (area.value == "胶南") {
            var jiaonan = document.getElementById("jiaonan");
            jiaonan.style.display = "inline-block";
        } else if (area.value == "平度") {
            var pingdu = document.getElementById("pingdu");
            pingdu.style.display = "inline-block";
        } else if (area.value == "莱西") {
            var laixi = document.getElementById("laixi");
            laixi.style.display = "inline-block";
        }
        sectiondefault.style.display = "none";
    }
}
/*添加区域*/
function addArea() {
    var newarea = area.value;
    if (newarea == "default") {
        alert("请先选择区域！");
        return;
    }
    if (val2 == "default") {
        alert("请先选择具体区域！");
        return;
    }
    var elems = document.getElementsByClassName("sect");
    if (elems.length >= 10) {
        alert("可辅导的科目不超过10项!");
        return;
    }
    
    var section_div = document.getElementById("section_div");
    var elem = document.createElement("span");
    elem.id = val2;
    elem.className = "sect";
    elem.innerHTML = "<br/>" + newarea + ":" + val2 + "<button type='button' onclick='deleteArea(" + val2 + ");'>删除</button>";
    section_div.appendChild(elem);
}
/*删除区域元素*/
function deleteArea(obj) {
    var section_div = document.getElementById("section_div");
    section_div.removeChild(obj);
}

