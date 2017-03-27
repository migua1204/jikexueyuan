var express = require('express');
var router = express.Router();
var mysql = require('mysql');
var conn = require('../models/db');

/* 后台路由界面 */
router.get('/getNews', function(req, res, next) {

    var pageSize = parseInt(req.query.pageSize);
    var curPage = req.query.num;
    var totalCounts = 0;
    var startCount=0;//数据库查询的条目

    if (curPage != 1) {
        startCount=(curPage - 1) * pageSize;
    }

    var sql_count = "SELECT COUNT(*) totalCounts FROM `news`";
    conn.query(sql_count, function(err, rows, field) {
        totalCounts = rows[0].totalCounts;
    });
    var sql_query = "SELECT * FROM `news` ORDER BY `newstime` DESC  LIMIT ?,?";
    conn.query(sql_query, [startCount,pageSize], function(err, rows, field) {
        rows.push({ 'totalCounts': totalCounts });
        res.json(rows);
    });

});
//获取当前项
router.get('/curnews', function(req, res, next) {
        var newsid = req.query.newsid;
        var sql_cur = "SELECT * FROM `news` WHERE `id`=?";
        conn.query(sql_cur, [newsid], function(err, rows, field) {
            res.json(rows);
        });
    })
    //确认更新
router.post('/update', function(req, res, next) {
    var newstitle = req.body.newstitle,
        newstype = req.body.newstype,
        newsimg = req.body.newsimg,
        newssrc = req.body.newssrc,
        newstime = req.body.newstime,
        newsid = req.body.newsid;

    var sql_update = "UPDATE `news` SET `newstitle`=?,`newstype`=?,`newsimg`=?,`newstime`=?,`newssrc`=? WHERE `id`=?";
    conn.query(sql_update, [newstitle, newstype, newsimg, newstime, newssrc, newsid], function(err, rows, field) {
        res.json(rows.changedRows);
    });
});
//删除
router.post('/delete', function(req, res, next) {
        var newsid = req.body.newsid;
        var sql_delete = "DELETE FROM `news` WHERE `news`.`id`=?";
        conn.query(sql_delete, [newsid], function(err, rows, field) {
            res.json(rows.affectedRows);
        });
    })
    //插入
router.post('/insert', function(req, res, next) {
    var newstitle = req.body.newstitle,
        newstype = req.body.newstype,
        newsimg = req.body.newsimg,
        newssrc = req.body.newssrc,
        newstime = req.body.newstime;

    var sql_insert = "INSERT INTO  `news` (`newstitle`,`newstype`,`newsimg`,`newstime`,`newssrc`) VALUE(?,?,?,?,?)";
    conn.query(sql_insert, [newstitle, newstype, newsimg, newstime, newssrc], function(err, rows, field) {
        res.json(rows);
    });
});

module.exports = router;
