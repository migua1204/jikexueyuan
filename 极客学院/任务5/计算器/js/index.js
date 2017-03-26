var calObj = new Object(); //定义一个对象用来存放num1 num2 和符号
var flag = false; //用来标记用户操作 true表示用户点击了运算方法按钮 例如：*/+- AC %

// 定义一个事件添加函数，分别对不同的浏览器进行适配
function addEvent(obj, type, handle) {
    try { // Chrome、FireFox、Opera、Safari、IE9.0及其以上版本
        obj.addEventListener(type, handle, false);
    } catch (e) {
        try { // IE8.0及其以下版本
            obj.attachEvent('on' + type, handle);
        } catch (e) { // 早期浏览器
            obj['on' + type] = handle;
        }
    }
};

window.onload = function() {
        var tds = document.getElementsByTagName("td");
        for (var i in tds) {
            addEvent(tds[i], "click", function(event) {
                var press = event.target.innerHTML;
                if (isNaN(press) && press != ".") {
                    onCal(press);
                } else {
                    onNum(press);
                }
            })
        }
    }

//点击数字执行方法
function onNum(i) {
    var showNode = document.getElementsByTagName("th")[0];
    if (flag) {
        showNode.innerHTML = "";
        flag = false;
    }

    if (showNode.innerHTML != 0 && calObj.num2 != null) { //判断显示框是否为0 不为0 说明已有输入 直接拼接
        showNode.innerHTML += i;

    } else if (i == ".") { //如果显示框是0 此时判断输入是否为"."，为"."则不清除显示屏的0 并且在0后拼接

        showNode.innerHTML += i;

    } else if (showNode.innerHTML.indexOf(".") != -1) { //如果显示框包含"." 则继续拼接
        if(calObj.num2!=null){
            showNode.innerHTML += i;
        }else if (calObj.num1 != null) {
            showNode.innerHTML = "";
            showNode.innerHTML = i;
           
        } else{
            showNode.innerHTML += i;
        }

    }else if(showNode.innerHTML==0){//说明显示框不是清空状态 且界面显示0 则需要把0先清除掉 显示所点击数字。
        
        showNode.innerHTML = "";
        
        showNode.innerHTML = i;

    }else if(calObj.num1!=null){
        showNode.innerHTML = "";
         showNode.innerHTML = i;
    }
    else{
        showNode.innerHTML += i;
    }
    if (calObj.num1 != null) {
        calObj.num2 = parseFloat(showNode.innerHTML);
    }
}

//点击运算符执行方法
function onCal(str)
 {

    flag = true;
    var showNode = document.getElementsByTagName("th")[0];
    // showNode.innerHTML=val;
    var tempNum = parseFloat(showNode.innerHTML); //显示屏的str数据float化
    if (str == "AC") {
        showNode.innerHTML = "0";
        calObj.num1 = null;
        calObj.num2 = null;
        calObj.symbol = null;
        return;
    }
    if (str == "+/-") { //正负号 同时显示在显示屏上
        showNode.innerHTML = -showNode.innerHTML;
        if (calObj.num1 != null) {
            calObj.num2 = parseFloat(showNode.innerHTML);
        } else {
            calObj.num1 = parseFloat(showNode.innerHTML);
        }
        return;
    } else if (str == "%") { //取余数
        calObj.num1 = parseFloat(showNode.innerHTML) / 100;
        calObj.num1 = saveFixed(calObj.num1, 12);
        showNode.innerHTML = calObj.num1.toString();

        return;
    } else if (str == "x²") {
        calObj.num1 = Math.pow(parseFloat(showNode.innerHTML), 2);
        calObj.num1 = saveFixed(calObj.num1, 12);
        showNode.innerHTML = calObj.num1.toString();

        return;
    } else if (str == "sin") {
        calObj.num1 = parseFloat(Math.sin(parseFloat(showNode.innerHTML)*Math.PI/180).toFixed(12));
        calObj.num1 = saveFixed(calObj.num1,12);
        showNode.innerHTML = calObj.num1.toString();

        return;
    } else if (str == "cos") {
        calObj.num1 = parseFloat(Math.cos(parseFloat(showNode.innerHTML)*Math.PI/180).toFixed(12));
        calObj.num1 = saveFixed(calObj.num1,12);
        showNode.innerHTML = calObj.num1.toString();

        return;
    } else if (str == "tan") {
        var sin =parseFloat(Math.sin(parseFloat(showNode.innerHTML)*Math.PI/180).toFixed(12));
        var cos = parseFloat(Math.cos(parseFloat(showNode.innerHTML)*Math.PI/180).toFixed(12));
        calObj.num1 = sin/cos;
        calObj.num1 = saveFixed(calObj.num1,12);
        showNode.innerHTML = calObj.num1.toString();
        return;
    } else if (str == "=") {
        if (calObj.num2 != null) {
            onEqual();
            calObj.num1 = result;
            return;
        }
        // onEqual(); //结果显示在显示屏上
        return;
    } else if (str == "×") {
        calObj.symbol = "*";
        if (calObj.num2 != null) {
            onEqual();
            calObj.num1 = result;
            return;
        }

    } else {
        calObj.symbol = str;
        if (calObj.num2 != null) {
            onEqual();
            calObj.num1 = result;
            return;
        }
    }
    calObj.num1 = tempNum; //将结果赋值给num1
}

// 等于号点击事件
function onEqual() {
    var showNode = document.getElementsByTagName("th")[0];
    var tempNum = parseFloat(showNode.innerHTML);
    calObj.num2 = tempNum; //将结果赋值给num2
    res(calObj.num1, calObj.num2, calObj.symbol); //三个变量都已取得  执行计算方法！！！
    calObj.num2 = null;
}
// 计算方法
var result = 0;

function res(num1, num2, symbol) {
    var showNode = document.getElementsByTagName("th")[0];
    if (symbol == "*") { //乘法
        result = accMul(num1, num2);
    } else if (symbol == "/") { //除法
        if (num2 == 0) {
            showNode.innerHTML = "被除数不能为0";
            return;
        }
        result = accDiv(num1, num2);
        // 计算保留位数
        result = saveFixed(result, 8);

    } else if (symbol == "+") { //加法
        result = accAdd(num1, num2);
    } else if (symbol == "-") { //减法
        result = accMin(num1, num2);
    }
    showNode.innerHTML = result;
    flag = false;
}
//js高精度计算 遵循IEEE 754标准 以64位浮点进行存储
//高精度加法
function accAdd(arg1, arg2) {
    var r1, r2, m;
    try { r1 = arg1.toString().split(".")[1].length } catch (e) { r1 = 0 }
    try { r2 = arg2.toString().split(".")[1].length } catch (e) { r2 = 0 }
    m = Math.pow(10, Math.max(r1, r2))
    return (arg1 * m + arg2 * m) / m
}

//高精度减法
function accMin(arg1, arg2) {
    var r1, r2, m;
    try { r1 = arg1.toString().split(".")[1].length } catch (e) { r1 = 0 }
    try { r2 = arg2.toString().split(".")[1].length } catch (e) { r2 = 0 }
    m = Math.pow(10, Math.max(r1, r2))
    return (arg1 * m - arg2 * m) / m
}

//高精度乘法
function accMul(arg1, arg2) {
    var m = 0,
        s1 = arg1.toString();
    s2 = arg2.toString();
    try { m += s1.split(".")[1].length } catch (e) {}
    try { m += s2.split(".")[1].length } catch (e) {}
    return Number(s1.replace(".", "")) * Number(s2.replace(".", "")) / Math.pow(10, m)
}

//高精度除法
function accDiv(arg1, arg2) {
    var t1 = 0,
        t2 = 0,
        r1, r2;
    try { t1 = arg1.toString().split(".")[1].length } catch (e) {}
    try { t2 = arg2.toString().split(".")[1].length } catch (e) {}
    with(Math) {
        r1 = Number(arg1.toString().replace(".", ""))
        r2 = Number(arg2.toString().replace(".", ""))
        return (r1 / r2) * pow(10, t2 - t1);
    }
}
//保留位数
function saveFixed(obj, num) {
    if (obj.toString().split(".")[1] != null) {
        if (obj.toString().split(".")[1].length > num) {
            obj = obj.toFixed(num);
        } else {
            obj = obj.toFixed(obj.toString().split(".")[1].length);
        }
    }
    return obj;
}
