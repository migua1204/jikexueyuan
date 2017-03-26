 var totalPages = 0; //设置总页数
 var pageSize = 10; //设置每页显示的条数
 var totalCounts = 0; //总条目数
 $(document).ready(function() {

     var $newsTable = $('#newstable tbody');
     //更新列表
     refreshNews();
     //显示分页组件
     paginator(totalCounts, pageSize);

     //添加新闻
     $('#btnsubmit').click(function(e) {
         e.preventDefault();
         //输入判断
         if ($('#newstitle').val() === "" || $('#newsimg').val() === "" || $('#newssrc').val() === "" || $('#newstime').val() === "") {
             if ($('#newstitle').val() === "") {
                 $('#newstitle').parent().addClass('has-error');
             } else {
                 $('#newstitle').parent().removeClass('has-error');
             }
             if ($('#newsimg').val() === "") {
                 $('#newsimg').parent().addClass('has-error');
             } else {
                 $('#newsimg').parent().removeClass('has-error');
             }
             if ($('#newstime').val() === "") {
                 $('#newstime').parent().addClass('has-error');
             } else {
                 $('#newstime').parent().removeClass('has-error');
             }
             if ($('#newssrc').val() === "") {
                 $('#newssrc').parent().addClass('has-error');
             } else {
                 $('#newssrc').parent().removeClass('has-error');
             }
         } else {
             var jsonNews = {
                     newstitle: $('#newstitle').val(),
                     newstype: $('#newstype').val(),
                     newsimg: $('#newsimg').val(),
                     newstime: $('#newstime').val(),
                     newssrc: $('#newssrc').val()
                 }
                 //提交添加
             $.ajax({
                 url: 'server/insert.php',
                 type: 'post',
                 data: jsonNews,
                 datatype: 'json',
                 success: function(data) {
                     console.log(data);
                     refreshNews();
                 }

             })
         }
     });
     // 事件委托 因为操作按钮是通过ajax生成的
     //删除新闻的功能
     var deleteId = null;
     $newsTable.on('click', '.btn-danger', function(e) {
         $('#deleteModal').modal('show');
         deleteId = $(this).parent().prevAll().eq(3).html();
     });
     $('#deleteModal #confirmDelete').click(function(e) {
         console.log(deleteId);
         if (deleteId) {
             $.ajax({
                 url: 'server/delete.php',
                 type: 'post',
                 data: { newsid: deleteId },
                 success: function(data) {
                     console.log(data);
                     $('#deleteModal').modal('hide');
                     refreshNews();
                 }
             })
         }
     });
     //修改新闻功能
     var updateId = null;
     $newsTable.on('click', '.btn-primary', function(e) {
         $('#updateModal').modal('show');
         updateId = $(this).parent().prevAll().eq(3).html();
         if (updateId) {
             $.ajax({
                 url: 'server/curnews.php',
                 type: 'post',
                 data: { newsid: updateId },
                 success: function(data) {
                     console.log(data);
                     $('#unewstitle').val(data[0].newstitle);
                     $('#unewstype').val(data[0].newstype);
                     $('#unewsimg').val(data[0].newsimg);
                     var utime = data[0].newstime.split(' ')[0];
                     $('#unewstime').val(utime);
                     $('#unewssrc').val(data[0].newssrc);
                 }
             })
         }
     });
     $('#updateModal #confirmUpdate').click(function(e) {
         var updatejson = {
             newsid: updateId,
             newstitle: $('#unewstitle').val(),
             newstype: $('#unewstype').val(),
             newsimg: $('#unewsimg').val(),
             newstime: $('#unewstime').val(),
             newssrc: $('#unewssrc').val()
         }
         $.ajax({
             url: 'server/update.php',
             type: 'post',
             data: updatejson,
             success: function(data) {
                 console.log(data);
                 $('#updateModal').modal('hide');
                 refreshNews();
             }
         })
     });

     function refreshNews(num) {

         //清空所有新闻
         $newsTable.empty();
         // 查询数据库中的新闻
         $.ajax({
             type: 'get',
             url: 'server/getNews.php',
             datatype: 'json',
             async: false, //设置为同步操作就可以给全局变量赋值成功 
             data: { newstype: "", num: num, pageSize: pageSize },
             success: function(data) {
                 console.log(data);
                 totalCounts = parseInt(data[data.length - 1].totalCounts);
                 data.forEach(function(item, index, array) {
                     if (index == (data.length - 1)) {
                         //如果传入的是totalCount退出循环
                         return;
                     }
                     var $tdid = $('<td>').html(item.id);
                     var $tdtype = $('<td>').html(item.newstype);
                     var $tdtitle = $('<td>').html(item.newstitle);
                     var $tdimg = $('<td>').html(item.newsimg);
                     var $tdsrc = $('<td>').html(item.newssrc);
                     var $tdtime = $('<td>').html(item.newstime);
                     var $tdctrl = $('<td>');
                     var $btnupdate = $('<button>').addClass('btn btn-primary btn-xs').html('修改');
                     var $btndelete = $('<button>').addClass('btn btn-danger btn-xs').html('删除');
                     $tdctrl.append($btnupdate, $btndelete);
                     var $tRow = $('<tr>');
                     $tRow.append($tdid, $tdtype, $tdtitle, $tdtime, $tdctrl);
                     $newsTable.append($tRow);
                     // $('#paginator li').eq(num+2).addClass('active');   
                 });
             }
         });
     }

     function paginator(totalCounts, pageSize) {
         var totalPages = totalCounts % pageSize > 0 ? parseInt(totalCounts / pageSize) + 1 : parseInt(totalCounts / pageSize);
         $('#paginator').jqPaginator({
             totalPages: totalPages,
             pageSize: pageSize,
             visiblePages: 5,
             currentPage: 1,
             first: '<li class="first"><a href="javascript:;">首页</a></li>',
             prev: '<li class="prev"><a href="javascript:;">上一页</a></li>',
             next: '<li class="next"><a href="javascript:;">下一页</a></li>',
             last: '<li class="last"><a href="javascript:;">尾页</a></li>',
             page: '<li class="page"><a href="javascript:;">{{page}}</a></li>',
             onPageChange: function(num, type) {
                 // $('#text').html('当前第' + num + '页');
                 if (type == "change") {
                     refreshNews(num);
                 }

             }
         });
     }

 })
