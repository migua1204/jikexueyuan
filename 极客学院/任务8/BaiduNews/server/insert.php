<?php
require_once ('db.php');
if ($con) {
	//插入新闻
	$newstitle = addslashes(htmlspecialchars($_POST['newstitle']));
	$newstype = addslashes(htmlspecialchars($_POST['newstype']));
	$newsimg = addslashes(htmlspecialchars($_POST['newsimg']));
	$newssrc = addslashes(htmlspecialchars($_POST['newssrc']));
	$newstime = $_POST['newstime'];
	//插入语句
	$sql = "INSERT INTO  `news` (`newstitle`,`newstype`,`newsimg`,`newstime`,`newssrc`) VALUE('{$newstitle}','{$newstype}','{$newsimg}','{$newstime}','{$newssrc}')";
	//设置编码格式
	mysqli_query($con, 'SET NAMES utf8');
	//执行语句
	mysqli_query($con, $sql);
	echo json_encode(array('success' => 'ok'));
}
//关闭连接
mysqli_close($con);
?>