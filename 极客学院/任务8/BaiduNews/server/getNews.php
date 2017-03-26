<?php
require_once('db.php');
if($con){
	if($_GET['newstype']){
		//获取新闻类型
		$newstype=$_GET['newstype'];
		//获取计数器
		$count=$_GET['count'];
		// echo $count;
		//根据新闻类型获得该新闻语句
		$sql="SELECT * FROM news WHERE `newstype`='{$newstype}' ORDER BY `id` DESC LIMIT 0,5";
		if ($count>0) {
			$sql="SELECT * FROM news WHERE `newstype`='{$newstype}' ORDER BY `id` DESC LIMIT  ".($count).",".(5+$count)."";
		}
		//设置编码格式
		mysqli_query($con,'SET NAMES utf8');
		//执行方法获取结果集
		$result=mysqli_query($con,$sql);
		$senddata=array();
		//将结果放到数组中
		while ($row = mysqli_fetch_assoc($result)) {
			array_push($senddata,array(
				'id'=>$row['id'],
				'newstype'=>$row['newstype'],
				'newstitle'=>$row['newstitle'],
				'newsimg'=>$row['newsimg'],
				'newstime'=>$row['newstime'],
				'newssrc'=>$row['newssrc']
			));
		}
		echo json_encode($senddata);
	}else{
		$curPage=1;
		$pageSize=$_GET['pageSize'];
		if(!empty($_GET['num'])){
		$curPage=$_GET['num'];
		}
		//查询所有新闻语句 
		$sql="SELECT * FROM `news` ORDER BY `id` DESC  LIMIT ".(($curPage-1)*$pageSize).",".($pageSize*$curPage)."";
		// echo $sql;
		$sql2="SELECT COUNT(*) FROM `news`";
		mysqli_query($con,'SET NAMES utf8');
		$result=mysqli_query($con,$sql);
		$result2=mysqli_query($con,$sql2);
		//获取总条数
		// $num_rows = mysql_num_rows($result);
		$totalCounts = mysqli_fetch_assoc($result2)['COUNT(*)'];
		$senddata=array();
		while ($row = mysqli_fetch_assoc($result)) {
			array_push($senddata,array(
				'id'=>$row['id'],
				'newstype'=>$row['newstype'],
				'newstitle'=>$row['newstitle'],
				'newsimg'=>$row['newsimg'],
				'newstime'=>$row['newstime'],
				'newssrc'=>$row['newssrc']
				));
		}
		array_push($senddata, array('totalCounts'=>$totalCounts));
		echo json_encode($senddata);
	}

}else{
	echo json_encode(array('success'=>'none'));
}
//关闭连接
mysqli_close($con);

?>