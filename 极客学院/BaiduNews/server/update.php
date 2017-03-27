<?php
header("Content-type: application/json;charset=utf-8");
require_once ('db.php');
if ($con) {
	//插入新闻
	$newstitle = addslashes(htmlspecialchars($_POST['newstitle']));
	$newstype = addslashes(htmlspecialchars($_POST['newstype']));
	$newsimg = addslashes(htmlspecialchars($_POST['newsimg']));
	$newssrc = addslashes(htmlspecialchars($_POST['newssrc']));
	$newstime = $_POST['newstime'];
	$newsid = $_POST['newsid'];
	// 修改语句
	$sql = "UPDATE `news` SET `newstitle`='{$newstitle}',`newstype`='{$newstype}',`newsimg`='{$newsimg}',`newstime`='{$newstime}',`newssrc`='{$newssrc}' WHERE `id`='{$newsid}'";
	//设置编码格式
	mysqli_query($con, 'SET NAMES utf8');
	// 执行方法
	mysqli_query($con, $sql);
	echo json_encode(array('success' => 'ok'));
}
// 关闭连接
mysqli_close($con);
?>
