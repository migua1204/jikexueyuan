function caculate() {
    //清空结果和页面结果
    document.getElementsByTagName("span")[0].innerHTML = "结果：";
    var result = "";
    // 获取输入节点
    var scoreNode = document.getElementById("score");
    //获取输入节点的值并去空格
    var scoreValue = scoreNode.value.trim();
    //判断空
    if (scoreValue !== "" && scoreValue !== null) {
        // 字符转为int
        var score = parseInt(scoreValue);
        //判断转化后类型是否正确
        if (isNaN(score)) {
            alert("输入类型有误！请重新输入！");
        } else if (score > 100 || score < 0) {
            //范围是否正确
            alert("输入分数必须在0~100之间！请重新输入！");
        }
        //计算score除以10取整
        score = parseInt(score / 10);
        switch (score) {
            case 0:
                result = "该学生为10等生。";
                break;
            case 1:
                result = "该学生为9等生。";
                break;
            case 2:
                result = "该学生为8等生。";
                break;
            case 3:
                result = "该学生为7等生。";
                break;
            case 4:
                result = "该学生为6等生。";
                break;
            case 5:
                result = "该学生为5等生。";
                break;
            case 6:
                result = "该学生为4等生。";
                break;
            case 7:
                result = "该学生为3等生。";
                break;
            case 8:
                result = "该学生为2等生。";
                break;
            case 9:
                result = "该学生为1等生。";
                break;
            case 10:
                result = "该学生为1等生。";
                break;
        }
        //改写结果
        document.getElementsByTagName("span")[0].innerHTML += result;

    } else {
        alert("输入不能为空！请重新输入！");
    }


}
