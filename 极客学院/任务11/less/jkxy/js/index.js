window.onload = function() {
    // 搜索框的关闭按钮
    var close_icon = document.getElementById("close-btn");
    close_icon.onclick = function() {
            var search_box = document.getElementById("search-box");
            search_box.style.display = "none";
        }
        // 导航栏的搜索按钮
    var search = document.getElementById("search-btn");
    search.onclick = function() {
            var search_box = document.getElementById("search-box");
            search_box.style.display = "block";
        }
        // 滚动条滑动事件
    window.onscroll = function() {
        var t = document.documentElement.scrollTop || document.body.scrollTop;
        var top = document.getElementById("top");

        if (t > 0) {
            top.className = "top fadeIn";
        } else {
            top.className = "top fadeOut";
        }
        // 点击返回顶部
        top.onclick = function() {
            document.body.scrollTop = 0;
        }
    }
    // 鼠标移动到nav
   

    var mySwiper = new Swiper('.swiper-container', {
        direction: 'horizontal',
        loop: true,
        speed: 2000,
        autoplay: 3000,

        // 如果需要分页器
        pagination: '.swiper-pagination',

        // 如果需要前进后退按钮
        nextButton: '.swiper-button-next',
        prevButton: '.swiper-button-prev',

    })

}
$(document).ready(function() {
  $("#h-nav li:not(li:first-child)").each(function(index, el) {
        $(el).hover(function() {
            $(el).find("div").fadeIn();
        }, function() {
            $(el).find("div").hide();
        });
    }); 
  //鼠标移上菜单事件
      $("#h-nav li").each(function(index, el) {
        $(el).hover(function() {
            $(el).find(".arrow-icon").addClass("arrow-open");
        }, function() {
            $(el).find(".arrow-icon").removeClass("arrow-open");

        });
    }); 

    // 鼠标移动到nav
    $("#h-nav li").each(function(index, el) {
        $(el).hover(function() {
            $(el).find(".arrow-icon").addClass("arrow-open");
        }, function() {
            $(el).find(".arrow-icon").removeClass("arrow-open");

        });
    });
})
