$(function() {
    var i = 0;
    var clonefirst = $(".slider-wrapper a").first().clone();
    $(".slider-wrapper").append(clonefirst);
    var size = $(".slider-wrapper a").length;
    $(".banner-pagination span").first().addClass("on");

    //整体滑入
      $(".slider-wrapper").hover(function() {
            $(".banner-arrow-right").show();
            $(".banner-arrow-left").show();
        },function(){
        	$(".banner-arrow-right").hide();
            $(".banner-arrow-left").hide();
        })
    //下标滑入
    $(".banner-pagination span").hover(function() {
            var index = $(this).index();
            i = index;
            $(".slider-wrapper").stop().animate({ left: -index * 750 }, 500);
            $(".banner-pagination span").eq(index).addClass("on").siblings().removeClass("on");
        })
        //自动轮播
    var t = setInterval(moveR, 2000);
        //鼠标悬停

    $(".slider-wrapper").hover(function(){
		clearInterval(t);
	},function(){
		t=setInterval(moveR,2000);
	})
    // 向右事件
    $(".banner-arrow-right").click(moveR);
    // 向左事件
    $(".banner-arrow-left").click(moveL);

// 向右移动
function moveR() {
    i++;
    if (i == size) {
        $(".slider-wrapper").css({ left: 0 });
        i = 1;
    }
    $(".slider-wrapper").stop().animate({ left: -i * 750 }, 500);
    if (i==size-1) {
    $(".banner-pagination span").eq(0).addClass("on").siblings().removeClass("on");
    }else{
    $(".banner-pagination span").eq(i).addClass("on").siblings().removeClass("on");

    }
}
// 向左移动
function moveL() {
    i--;
    if (i == -1) {
        $(".slider-wrapper").css({ left: -(size - 1) * 750 });
        i = size - 2;
    }
    $(".slider-wrapper").stop().animate({ left: -i * 750 }, 500);
    $(".banner-pagination span").eq(i).addClass("on").siblings().removeClass("on");
}

})

