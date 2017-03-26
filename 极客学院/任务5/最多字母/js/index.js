window.onload = function() {
    var arr = ["a", "x", "b", "d", "m", "a", "k", "m", "p", "j", "a"];
    var arr2 = [];
    //复制数组
    for (var i in arr) {
        arr2[i] = arr[i];
    }
    // 计算每个字母出现的次数
    var count = 0;
    var num = [];
    for (var m in arr) {
        count = 0;
        for (var n in arr2) {
            if (arr[m] == arr[n]) {
                count++;
            }
        }
        num[m] = count;
    }
    //计算出现最多字母的次数
    var max = 0;
    for (var i in num) {
        if (max < num[i]) {
            max = num[i];
        }
    }
    //计算出现最多次数的字母（可以多个）
    var letters = [];
    var indexs = [];
    var j = 0;
    var letter = arr[num.indexOf(max)];
    for (var i in num) {
        if (num[i] == max) {
            indexs[j] = i;
            j++;
        }
    }
    for (var i in indexs) {
        letters[i] = arr[indexs[i]];
    }
    //去掉重复字母 得到最终结果
    var letters2 = [];
    var k = 0;
    for (var i in letters) {
        if (letters2.indexOf(letters[i]) == -1) {
            letters2[k] = letters[i];
            k++;
        }
    }
    document.getElementsByTagName("span")[0].innerHTML = "<p>出现次数最多的字母是： " + letters2 + ";</p>";

    //计算该字母在原数组的索引
    var index = [];
    var l = 0;
    for (var i in letters2) {
        l = 0;
        index = [];
        for (var j in arr) {
            if (arr[j] == letters2[i]) {
                index[l] = j;
                l++;
            }
        }
        document.getElementsByTagName("span")[0].innerHTML += "<p>" + letters2[i] + "出现的次数是：" + index.length + "; 其索引是：" + index + ";</p>";
    }


}
