$(document).ready(function() {
    index.init();
     // 获取cookie中的skin
    var skinval = cookie.getCookie('skin');
    //换肤
    if (skinval != "") {
        $(".container").css({
            "background-image": "url(img/" + skinval + ".jpeg)"
        })
        $("#" + skinval).append("<span class='skin-ok'></span>");
    }

        //选择皮肤换肤
    $(".img-wrap").each(function() {
            $(this).click(function() {
                skinId = $(this).attr("id");
                $(".skin-ok").remove();
                cookie.setCookie('skin', skinId, 30);
                $(this).append("<span class='skin-ok'></span>");
                $(".container").css("background-image", "url(img/" + skinId + ".jpeg)");
            });
        })
});
//单例模式
var index = {
    init: function() {
        var me = this;
        me.render();
        me.bind();
    },
    render: function() {
        var me = this;
        me.more = $("#more"); //更多产品
        me.side = $("#side"); //侧边栏
        me.rSet = $("#r_set"); //右侧设置栏
        me.setMenu = $("#setMenu"); //设置按钮
        me.login = $("#r_login"); //登录
        me.setInfo = $("#setInfo"); //个人信息
        me.lskin = $("#l_skin"); //换肤项
        me.skinUp = $("#skin-up"); //皮肤收起
        me.dragSkin = $("#dragSkin");
        me.dragMsg = $("#dragMsg");
        me.imgWrap = $(".img-wrap");
        me.goTop = $("#gotoTop"); //回到顶部
        me.goIcon = $(".go-to-icon");
        me.goTxt = $(".go-to-txt");
        me.lMsg = $("#l_msg"); //消息
    },
    bind: function() {
        var me = this;
        // 鼠标移动上导航栏中更多产品显示侧边栏
        me.more.hover(function() {
            me.side.show();
        });
        //侧边栏鼠标移入移出事件
        me.side.mouseover(function() {
            $(this).show();
        }).mouseout(function() {
            $(this).hide();
        });
        // 鼠标移动上导航栏中设置事件
        me.rSet.hover(function() {
            me.setMenu.show();
        }, function() {
            me.setMenu.hide();
        });
        //设置按钮的鼠标移入移出事件
        me.setMenu.mouseover(function() {
            $(this).show();
        }).mouseout(function() {
            $(this).hide();
        });
        // 鼠标移动上导航栏中个人事件
        me.login.hover(function() {
            me.setInfo.show();
        }, function() {
            me.setInfo.hide();
        });
        //个人按钮的鼠标移入移出事件
        me.setInfo.mouseover(function() {
            $(this).show();
        }).mouseout(function() {
            $(this).hide();
        });
        //换肤滑下
        me.lskin.click(function() {
            me.dragMsg.hide();
            me.dragSkin.slideDown('slow');
        });
        //换肤收起
        me.skinUp.click(function() {
            me.dragSkin.slideUp();
        });
        // 皮肤鼠标悬浮事件
        me.imgWrap.each(function() {
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

        //回到顶部 按钮悬停
        me.goTop.hover(function() {
            me.goIcon.hide();
            me.goTxt.show();
        }, function() {
            me.goTxt.hide();
            me.goIcon.show();
        }).click(function() {
            /* 点击回到顶部*/
            $(window).scrollTop(0);
            $(this).hide();
        });
        //鼠标移动上导航栏中消息 事件
        var flag = true;
        me.lMsg.click(function() {
            if (flag) {
                me.dragMsg.show();
                flag = false;
            } else {
                me.dragMsg.hide();
                flag = true;
            }
        });

    }
}
//工厂模式
var cookie = {};
cookie.setCookie = function(c_name, value, expiredays) {
    // console.log(value);
    var exdate = new Date()
    exdate.setDate(exdate.getDate() + expiredays)
    document.cookie = c_name + "=" + escape(value) +
        ((expiredays == null) ? "" : ";expires=" + exdate.toGMTString())
}
cookie.getCookie=function(c_name) {
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


