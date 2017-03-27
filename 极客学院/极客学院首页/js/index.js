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
    var arrow_icons = document.getElementById("h-nav").getElementsByTagName("i");
    var header_lis = document.getElementById("h-nav").getElementsByTagName("li");
    header_lis[1].onmouseover = function() {
        arrow_icons[0].className = "arrow-icon arrow-open";
    }
    header_lis[1].onmouseout = function() {
        arrow_icons[0].className = "arrow-icon";
    }
    header_lis[2].onmouseover = function() {
        arrow_icons[1].className = "arrow-icon arrow-open";
    }
    header_lis[2].onmouseout = function() {
        arrow_icons[1].className = "arrow-icon";
    }
    header_lis[3].onmouseover = function() {
        arrow_icons[2].className = "arrow-icon arrow-open";
    }
    header_lis[3].onmouseout = function() {
        arrow_icons[2].className = "arrow-icon";
    }


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
