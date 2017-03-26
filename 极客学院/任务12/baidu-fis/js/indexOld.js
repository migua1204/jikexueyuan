$(document).ready(function() {
    // 获取cookie中的skin
    var skinval = getCookie("skin");
    //换肤
    if (skinval != "") {
        $(".container").css({
            "background-image": "url(img/" + skinval + ".jpeg)"
        })
        $("#" + skinval).append("<span class='skin-ok'></span>");
    }
    // 鼠标移动上导航栏中更多产品显示侧边栏
    $("#more").hover(function() {
        $("#side").show();
    });
    //侧边栏鼠标移入移出事件
    $("#side").mouseover(function() {
        $(this).show();
    }).mouseout(function() {
        $(this).hide();
    });

    // 鼠标移动上导航栏中设置事件
    $("#r_set").hover(function() {
        $("#setMenu").show();
    }, function() {
        $("#setMenu").hide();
    });
    //设置按钮的鼠标移入移出事件
    $("#setMenu").mouseover(function() {
        $(this).show();
    }).mouseout(function() {
        $(this).hide();
    });
    // 鼠标移动上导航栏中个人事件
    $("#r_login").hover(function() {
        $("#setInfo").show();
    }, function() {
        $("#setInfo").hide();
    });
    //个人按钮的鼠标移入移出事件
    $("#setInfo").mouseover(function() {
        $(this).show();
    }).mouseout(function() {
        $(this).hide();
    });
    //鼠标移动上导航栏中消息 事件
    var flag = true;
    $("#l_msg").click(function() {
        if (flag) {
            $("#dragMsg").show();
            flag = false;
        } else {
            $("#dragMsg").hide();
            flag = true;
        }
    });

    //换肤滑下
    $("#l_skin").click(function() {
        $("#dragMsg").hide();
        $("#dragSkin").slideDown('slow');
    });
    //换肤收起
    $("#skin-up").click(function() {
        $("#dragSkin").slideUp();
    });
    //选择皮肤换肤
    $(".img-wrap").each(function() {
            $(this).click(function() {
                skinId = $(this).attr("id");
                $(".skin-ok").remove();
                setCookie("skin", skinId, 30);
                $(this).append("<span class='skin-ok'></span>");
                $(".container").css("background-image", "url(img/" + skinId + ".jpeg)");
            });
        })
        // 皮肤鼠标悬浮事件
    $(".img-wrap").each(function() {
        $(this).hover(function() {
            var skin_shadow = $("#" + $(this).attr("id") + " .skin-shadow");
            var p = $("#" + $(this).attr("id") + " p");
            $(this).find(skin_shadow).css("opacity", "0.5");
            $(this).find(p).css("opacity", "1");
        }, function() {
            skin_shadow = $("#" + $(this).attr("id") + " .skin-shadow");
            p = $("#" + $(this).attr("id") + " p");
            $(this).find(skin_shadow).animate({
                    opacity: 0
                },
                'slow', 'linear');
            $(this).find(p).animate({
                    opacity: 0
                },
                'fast');
        });
    });
    // 中部标签切换
    var timeoutId;
    $(".c-header-wrap ul li").each(function(index) {
        var li = $(this);
        li.mouseover(function() {
            timeoutId = setTimeout(function() {
                $(".tabin").removeClass("tabin");
                li.addClass("tabin");
            }, 100);
        }).mouseout(function() {
            clearTimeout(timeoutId);
        });
        li.click(function() {
            /* 标签点击显示对应内容 */
            $(".content-in").removeClass("content-in");
            $(".c-wrap >div").eq(index).addClass("content-in");
        });
    });
});
//回到顶部
var dragPoint = $(".main").first().offset().top - 13;
$(window).scroll(function() {
        var t = $(this).scrollTop();
        if (t > 0) {
            $("#gotoTop").fadeIn("fast");
        } else {
            $("#gotoTop").fadeOut("fast");
        }
        //下拉搜索框
        if (t >= dragPoint) {
            $(".dragSearch").show();
        } else {
            $(".dragSearch").hide();

        }

    })
    //回到顶部 按钮悬停
$("#gotoTop").hover(function() {
    $(".go-to-icon").hide();
    $(".go-to-txt").show();
}, function() {
    $(".go-to-txt").hide();
    $(".go-to-icon").show();
}).click(function() {
    /* 点击回到顶部*/
    $(window).scrollTop(0);
    $(this).hide();
});


//创建存储cookie
function setCookie(c_name, value, expiredays) {
    // console.log(value);
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
