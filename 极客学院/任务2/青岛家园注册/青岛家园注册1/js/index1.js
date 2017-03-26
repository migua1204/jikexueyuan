window.onload = function() {
    years(); //计算所有出生年份
    var subject = document.getElementById("subject"); //获取可辅导的类别对象
    subject.onchange = function() {
    	changeSubject();//显示对应可辅导科目
    }
    var area = document.getElementById("area");//获取授课区域对象
    area.onchange = function(){
         changeSection();//显示对应具体区域
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
    var sort = document.getElementsByClassName("sort");//获取class为sort的所有select对象
    var subjectdefault = document.getElementById("subjectdefault"); //获取默认select对象
    /*所有select初始化不可见，仅默认的select可见*/
    for (var i = 0; i < sort.length; i++) {
        sort.item(i).style.display = "none";
        subjectdefault.style.display = "inline-block";
    }
    var index = subject.selectedIndex; // 选中的类别索引
    if (index != 0) {
        if (subject.options[index].value == "小学") {
            var primary = document.getElementById("primary");
            primary.style.display = "inline-block";
        }else if (subject.options[index].value == "初中") {
            var middle = document.getElementById("middle");
            middle.style.display = "inline-block";
        } else if (subject.options[index].value == "高中") {
            var high = document.getElementById("high");
            high.style.display = "inline-block";
        } else if (subject.options[index].value == "大学") {
            var university = document.getElementById("university");
            university.style.display = "inline-block";
        } else if (subject.options[index].value == "英语") {
            var english = document.getElementById("english");
            english.style.display = "inline-block";
        } else if (subject.options[index].value == "小语种") {
            var minority = document.getElementById("minority");
            minority.style.display = "inline-block";
        } else if (subject.options[index].value == "艺术") {
            var art = document.getElementById("art");
            art.style.display = "inline-block";
        } else if (subject.options[index].value == "乐器") {
            var music = document.getElementById("music");
            music.style.display = "inline-block";
        } else if (subject.options[index].value == "计算机") {
            var computer = document.getElementById("computer");
            computer.style.display = "inline-block";
        } else {
            var sport = document.getElementById("sport");
            sport.style.display = "inline-block";
        }
        subjectdefault.style.display = "none";
    }
}
/*显示对应具体授课区域*/
function changeSection() {
    var section = document.getElementsByClassName("section");//获取class为section的所有select对象
    var sectiondefault = document.getElementById("sectiondefault"); //获取默认select对象
    /*所有select初始化不可见，仅默认的select可见*/
    for (var i = 0; i < section.length; i++) {
        section.item(i).style.display = "none";
        sectiondefault.style.display = "inline-block";
    }
    var index = area.selectedIndex; // 选中的区域索引
    if (index != 0) {
        if (area.options[index].value == "市南全区") {
            var south = document.getElementById("south");
            south.style.display = "inline-block";
        }else if (area.options[index].value == "市北全区") {
            var north = document.getElementById("north");
            north.style.display = "inline-block";
        } else if (area.options[index].value == "四方全区") {
            var sifang = document.getElementById("sifang");
            sifang.style.display = "inline-block";
        } else if (area.options[index].value == "李沧全区") {
            var licang = document.getElementById("licang");
            licang.style.display = "inline-block";
        } else if (area.options[index].value == "崂山全区") {
            var laoshan = document.getElementById("laoshan");
            laoshan.style.display = "inline-block";
        } else if (area.options[index].value == "城阳") {
            var chengyang = document.getElementById("chengyang");
            chengyang.style.display = "inline-block";
        } else if (area.options[index].value == "黄岛") {
            var huangdao = document.getElementById("hangdao");
            huangdao.style.display = "inline-block";
        } else if (area.options[index].value == "即墨") {
            var jimo = document.getElementById("jimo");
            jimo.style.display = "inline-block";
        } else if (area.options[index].value == "胶州") {
            var jiaozhou = document.getElementById("jiaozhou");
            jiaozhou.style.display = "inline-block";
        } else if (area.options[index].value == "胶南") {
            var jiaonan = document.getElementById("jiaonan");
            jiaonan.style.display = "inline-block";
        }else if (area.options[index].value == "平度") {
            var pingdu = document.getElementById("pingdu");
            pingdu.style.display = "inline-block";
        }else if (area.options[index].value == "莱西") {
            var laixi = document.getElementById("laixi");
            laixi.style.display = "inline-block";
        }
        sectiondefault.style.display = "none";
    }
}
