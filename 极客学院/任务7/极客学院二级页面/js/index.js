$(document).ready(function() {
    // 导航栏的搜索按钮
    $("#search-btn").click(function() {
        $("#search-box").show();
    });
    $("#close-btn").click(function() {
        $("#search-box").hide();
    });
    // 搜索框的关闭按钮

    // 滚动条滑动事件
    $(window).scroll(function(event) {
        var t = $(window).scrollTop();
        var top = $("#top");
        if (t > 0) {
            top.fadeIn();
        } else {
            top.fadeOut();
        }
        top.click(function(event) {
            $("body").scrollTop(0);
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
    //子菜单显示事件
    $("#h-nav li:not(li:first-child)").each(function(index, el) {
        $(el).hover(function() {
            $(el).find("div").fadeIn();
        }, function() {
            $(el).find("div").hide();
        });
    });
    $("#appicon").hover(function() {
        $(".appicon-menu").show();
        $(".top-icon").show();
    }, function() {
        $(".appicon-menu").hide();
        $(".top-icon").hide();
    });
    //子菜单li悬停事件
    $("#aside .asbd ul li").each(function(index, el) {
        $(el).hover(function(event) {
            $(el).find("a").first().css({
                'font-size': '13px',
                'color': '#35b558'
            });
            $(el).find('div').first().css('background', '#fff');
            $(el).find(".list-show").show();
        }, function() {
            $(el).find("a").first().css({
                'font-size': '12px',
                'color': '#666'
            });
            $(el).find('div').first().css({
                'background': ' url(img/r-arrow.png) 186px center no-repeat',
                "background-size": "6px 10px"
            });
            $(el).find(".list-show").hide();
        });
    });
    //右侧菜单悬停
    $(".sortMode dl").each(function(index, el) {
        $(el).hover(function() {
            $(el).find(".arrow").hide();
            $(el).find("dt").css({
                "box-shadow": "1px 2px 4px rgba(0, 0, 0, .1)"
            });
            $(el).find("dd").show();
        }, function() {
            $(el).find(".arrow").show();
            $(el).find("dt").css({
                "box-shadow": ""
            });
            $(el).find("dd").hide();
        });
    });
    //鼠标切换列表显示方式
    $(".list-icon2").click(function() {
        $(".lesson-list").removeClass("lesson-list").addClass("lesson-list2");
    });
    $(".list-icon").click(function() {
        $(".lesson-list2").removeClass("lesson-list2").addClass("lesson-list");
    });




});
