var express = require('express');
var router = express.Router();

var conn = require('../models/db');

/* 在主页获取新闻的请求 */
router.get('/', function(req, res, next) {
    conn.connect();
    var newstype = req.query.newstype;
    var count = parseInt(req.query.count);
    console.log(newstype);
    if (count > 0) {
        sql = "SELECT * FROM news WHERE `newstype`=? ORDER BY `newstime` DESC LIMIT ?,?";
        conn.query(sql, [newstype, count, 5], function(err, rows, field) {
            if (err) throw err;
            res.json(rows);
        });

    } else {
        sql = "SELECT * FROM `news` WHERE `newstype`=? ORDER BY `newstime` DESC LIMIT 0,5";
        conn.query(sql, [newstype], function(err, rows, field) {
            if (err) throw err;
            res.json(rows);
        });
    }
    conn.end();

});

module.exports = router;
