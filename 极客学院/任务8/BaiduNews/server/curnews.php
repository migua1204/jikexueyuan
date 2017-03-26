<?php 
require_once('db.php');
if($con){
	//获取当前项id
	$newsid=$_POST['newsid'];
	//根据id查询该新闻语句
	$sql="SELECT * FROM `news` WHERE `id`={$newsid}";
	//设置编码格式
	mysqli_query($con,'SET NAMES utf8');
	//执行方法获取结果集
	$result = mysqli_query($con,$sql);
	$senddata=array();
	//将结果放到数组中
	while ($row = mysqli_fetch_assoc($result)) {
		array_push($senddata,array(
			'id'=>$row['id'],
			'newstype'=>htmlspecialchars_decode($row['newstype']),
			'newstitle'=>htmlspecialchars_decode($row['newstitle']),
			'newsimg'=>htmlspecialchars_decode($row['newsimg']),
			'newstime'=>htmlspecialchars_decode($row['newstime']),
			'newssrc'=>htmlspecialchars_decode($row['newssrc'])
			));
	}
	echo json_encode($senddata);
 }
 //关闭连接
mysqli_close($con);
 ?>