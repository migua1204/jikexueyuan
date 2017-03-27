<?php
require_once ('db.php');
if ($con) {
	//获取待删项id
	$newsid = $_POST['newsid'];
	//删除语句
	$sql = "DELETE FROM `news` WHERE `news`.`id`={$newsid}";
	//设置编码格式
	mysqli_query($con, 'SET NAMES utf8');
	//执行方法
	mysqli_query($con, $sql);
	echo json_encode(array('删除信息' => '删除成功'));
}
//关闭连接
mysqli_close($con);
?>
