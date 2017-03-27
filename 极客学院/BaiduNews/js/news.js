var count = 0;//计数器
var type = '精选';
$(document).ready(function() {
        refreshNews(type, count);
        //点击分类
        $('nav a').click(function(e) {
            count = 0;
            e.preventDefault();
            type = $(this).text();
            refreshNews(type, count);
        });
        //点击更多新闻
        $('.moreNews a').click(function(event) {
            count = count + 5;
            refreshNews(type, count);
        });
        //返回顶部
        $(window).scroll(function(event) {
            var t = $(window).scrollTop();
            var top = $("#gotop");
            if (t > 0) {
                top.fadeIn();
            } else {
                top.fadeOut();
            }
            top.click(function(event) {
                $("body").scrollTop(0);
            });
        });
    })
    // 刷新页面
function refreshNews(type, count) {
    var $lists = $("article ul");
    $lists.empty();
    $.ajax({
        url: 'server/getNews.php',
        type: 'get',
        datatype: 'json',
        data: { newstype: type, count: count },
        success: function(data) {
            // console.log(data.totalCounts);
            data.forEach(function(item, index, array) {
                var $list = $('<li></li>').addClass('news-list').prependTo($lists);
                var $newsImg = $('<div></div>').addClass('newsimg').appendTo($list);
                var $img = $('<img>').attr('src', item.newsimg).appendTo($newsImg);
                var $newscontent = $('<div></div>').addClass('newscontent').appendTo($list);
                var $h1 = $('<h1></h1>').html(item.newstitle).appendTo($newscontent);
                var $p = $('<p></p>').appendTo($newscontent);
                var $newsTime = $('<span></span>').addClass('newstime').html(item.newstime).appendTo($p);
                var $newssrc = $('<span></span>').addClass('newssrc').html(item.newssrc).appendTo($p);
            })

        }

    });

}
