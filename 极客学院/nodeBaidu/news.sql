-- phpMyAdmin SQL Dump
-- version 4.5.2
-- http://www.phpmyadmin.net
--
-- Host: localhost
-- Generation Time: 2016-11-27 08:31:08
-- 服务器版本： 10.1.10-MariaDB
-- PHP Version: 7.0.2

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `baidunews`
--

-- --------------------------------------------------------

--
-- 表的结构 `news`
--

CREATE TABLE `news` (
  `id` int(11) NOT NULL,
  `newstype` char(200) NOT NULL,
  `newstitle` char(200) NOT NULL,
  `newstime` datetime NOT NULL,
  `newssrc` char(100) NOT NULL,
  `newsimg` char(200) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- 转存表中的数据 `news`
--

INSERT INTO `news` (`id`, `newstype`, `newstitle`, `newstime`, `newssrc`, `newsimg`) VALUES
(2, '百家', '这是测试数据', '2016-11-10 16:00:00', '极客学院', 'img/2.jpg'),
(3, '百家', '这是测试数据', '2016-11-03 00:18:30', '极客学院', 'img/2.jpg'),
(4, '本地', '这是测试数据', '2016-11-03 00:00:00', '极客学院', 'img/3.jpg'),
(5, '本地', '这是测试数据', '2016-11-03 00:00:00', '极客学院', 'img/3.jpg'),
(6, '百家', '这是测试数据', '2016-11-03 00:00:00', '极客学院', 'img/4.jpg'),
(7, '图片', '这是测试数据', '2016-11-03 09:13:00', '极客学院', 'img/3.jpg'),
(8, '图片', '这是测试数据', '2016-11-03 00:00:00', '极客学院', 'img/4.jpg'),
(9, '图片', '这是测试数据3', '2016-10-31 00:00:00', '极客学院', 'img/4.jpg'),
(10, '娱乐', '这是测试数据', '2016-11-03 00:00:00', '极客学院', 'img/2.jpg'),
(11, '军事', '这是测试数据', '2016-11-03 00:00:00', '极客学院', 'img/1.jpg'),
(12, '军事', '这是测试数据', '2016-11-03 12:14:00', '极客学院', 'img/3.jpg'),
(13, '军事', '这是测试数据', '2016-11-03 00:00:00', '极客学院', 'img/3.jpg'),
(14, '女人', '这是测试数据', '2016-11-03 00:00:00', '极客学院', 'img/2.jpg'),
(15, '女人', '这是测试数据', '2016-11-03 00:00:00', '极客学院', 'img/2.jpg'),
(16, '搞笑', '这是测试数据', '2016-11-03 00:00:00', '极客学院', 'img/2.jpg'),
(17, '精选', '这是测试数据', '2016-11-04 00:00:00', '极客学院', 'img/1.jpg'),
(18, '搞笑', '这是测试数据', '2016-11-03 00:00:00', '极客学院', 'img/1.jpg'),
(19, '搞笑', '这是测试数据', '2016-11-03 00:00:00', '极客学院', 'img/2.jpg'),
(20, '互联网', '这是测试数据', '2016-11-03 00:00:00', '极客学院', 'img/1.jpg'),
(21, '互联网', '这是测试数据', '2016-11-03 00:00:00', '极客学院', 'img/2.jpg'),
(22, '女人', '这是测试数据', '2016-11-03 00:00:00', '极客学院', 'img/1.jpg'),
(23, '女人', '这是测试数据', '2016-11-03 00:00:00', '极客学院', 'img/4.jpg'),
(24, '社会', '这是测试数据', '2016-11-03 00:00:00', '极客学院', 'img/3.jpg'),
(25, '精选', '这是最新的测试数据', '2016-11-11 00:00:00', '极客学院', 'img/1.jpg'),
(26, '精选', '这是测试数据', '2016-11-03 00:00:00', '极客学院', 'img/1.jpg'),
(27, '精选', '这是测试数据', '2016-11-03 00:00:00', '极客学院', 'img/3.jpg'),
(28, '精选', '这是测试数据', '2016-11-03 00:00:00', '极客学院', 'img/4.jpg'),
(29, '精选', '这是测试数据', '2016-11-03 00:00:00', '极客学院', 'img/3.jpg'),
(30, '精选', '这是测试数据', '2016-10-26 00:00:00', '极客学院', 'img/2.jpg'),
(32, '社会', '这是测试数据&lt;script&gt;alert(1);&lt;/script&gt;12', '2016-10-29 00:00:00', '极客学院', 'img/3.jpg');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `news`
--
ALTER TABLE `news`
  ADD PRIMARY KEY (`id`);

--
-- 在导出的表使用AUTO_INCREMENT
--

--
-- 使用表AUTO_INCREMENT `news`
--
ALTER TABLE `news`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=34;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
