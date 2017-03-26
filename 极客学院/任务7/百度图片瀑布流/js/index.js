$(document).ready(function(){
    $(window).on("load",function(){
        imgLocation();
        var dataImg = {"data":[{"src":"ym1.jpg"},{"src":"ym2.jpg"},{"src":"ym3.jpg"},{"src":"ym4.jpg"},{"src":"ym5.jpg"}]};
        window.onscroll = function(){
            if(scrollside()){
                $.each(dataImg.data,function(index,value){
                    var box = $("<div>").addClass("box").appendTo($("#container"));
                    var content = $("<div>").addClass("content").appendTo(box);
                    $("<img>").attr("src","./img/"+$(value).attr("src")).appendTo(content);
                });
                
            }
        };
        // 响应式
        window.onresize = function(){
            imgLocation();
        }
    });
});
// 滚动事件
function scrollside(){
    var box = $(".box");
    var lastboxHeight = box.last().get(0).offsetTop+Math.floor(box.last().height()/2);
    var documentHeight = $(document).height();
    var scrollHeight = $(window).scrollTop();
    return lastboxHeight<scrollHeight+documentHeight;
}

function imgLocation() {
    var box = $(".box");
    var boxWidth = box.eq(0).width(); //获取第一个盒子的宽度
    var num = Math.floor($(window).width() / boxWidth); //当前一行可以摆放的个数
    var boxArr = []; //数组用来存放盒子的宽度
    box.each(function(index, el) {
        el.style.cssText="";
        var boxHeight = box.eq(index).height(); //获取盒子的高度
        if (index < num) {
            boxArr[index] = boxHeight;
        } else {
            var minHeight = Math.min.apply(null, boxArr); //获取最小高度
            var minIndex = $.inArray(minHeight, boxArr); //获取最小位置
            $(el).css({
                "position": "absolute",
                "top": minHeight,
                "left": box.eq(minIndex).position().left
            });

        	boxArr[minIndex]+=box.eq(index).height();
        }

    });
}
