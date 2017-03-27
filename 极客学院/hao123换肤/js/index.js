 window.onload = function() {
     // 获取cookie中的skin
     var skinval = getCookie("skin");
     // 如果存在 则更换主题
     if (skinval != "") {
         changeSkin(skinval);
     }
 }

 // 换肤方法
 function changeSkin(str) {

     // 获取选择的颜色
     var colStr = str;
     setCookie("skin", colStr, 30);
     if (colStr == "red") {
         var red = "#FF0033";
         changeColor(red);

     } else if (colStr == "blue") {
         var blue = "#0099CC";
         changeColor(blue);
     } else if (colStr == "yellow") {
         var blue = "#FFCC33";
         changeColor(blue);
     } else if (colStr == "pink") {
         var blue = "#FF99CC";
         changeColor(blue);
     } else if (colStr == "green") {
         var blue = "#0aa770";
         changeColor(blue);
     }
 }
 // 根据传进来的颜色值修改颜色
 function changeColor(str) {
     // 横向导航
     var h_nav = document.getElementById("h-nav");
     // 导航的‘首页’项
     var fp = document.getElementById("fp");
     // 导航的‘推荐’项
     var tj = document.getElementById("tj");
     // 导航栏第二行
     var nav2 = document.getElementById("nav2");
     // 右部
     var right = document.getElementById("right");
     // 右边中间栏
     var r3 = document.getElementById("r3");
     // 获取所有元素
     var elements = document.getElementsByTagName('*');
     var nav1_a = document.getElementById("nav1").getElementsByTagName("a");
     //为导航第一行a加鼠标移入移出事件
     for (var i = 0; i < nav1_a.length; i++) {
         nav1_a[i].onmouseover = function() {
             this.style.color = str;
         }
         nav1_a[i].onmouseout = function() {
             this.style.color = "#333";

         }
     }

     h_nav.style.borderTopColor = str;
     fp.style.backgroundColor = str;
     tj.style.borderTopColor = str;
     nav2.style.borderColor = str;
     right.style.borderColor = str;
     r3.style.borderTopColor = str;
     r3.style.borderBottomColor = str;
     for (var i = 0; i < elements.length; i++) {
         if (elements[i].className == "skin-item") {
             elements[i].style.color = str;
         }
     }
 }
 // 创建存储cookie
 function setCookie(c_name, value, expiredays) {
     var exdate = new Date()
     exdate.setDate(exdate.getDate() + expiredays)
     document.cookie = c_name + "=" + escape(value) +
         ((expiredays == null) ? "" : ";expires=" + exdate.toGMTString())
 }
 //读取cookie
 function getCookie(c_name) {
     if (document.cookie.length > 0) {
         c_start = document.cookie.indexOf(c_name + "=")
         if (c_start != -1) {
             c_start = c_start + c_name.length + 1
             c_end = document.cookie.indexOf(";", c_start)
             if (c_end == -1) c_end = document.cookie.length
             return unescape(document.cookie.substring(c_start, c_end))
         }
     }
     return ""
 }
