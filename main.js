// initLocalStorage();

// 打开页面时应该只有一条空的, 此时要利用本地储存将数据还原, 下午要学一下json

let form = document.getElementsByTagName("form").item(0);
let listNum = form.children.length;
// let listNum = localStorage.clickcount

function del(my) {
    // 通过my获取到要删除行 删除
    (my.parentNode).remove(my);
}

function add() {
    var elem = document.createElement("div");
    elem.id = "1";
    elem.innerHTML = `<!-- 这个按钮按下去就可以删除该条ddl -->
    <button class="btn" onclick="del(this)">任务完成</button>
    <!-- 这是ddl内容 -->
    <input type="text"  placeholder="ddl内容">
    <!-- 距离ddl还有多少时间 -->
    <label id="ddl-time" style="display: none;"></label>
    <input type="text" id="ddl_time_text" placeholder="格式:08/31/2024 00:00:00">
    <button class="btn" onclick="count_down(this)">确认</button>
    <!-- 在haha里存储ddl时间 -->
    <label style="display:none"></label>`;
    form.appendChild(elem);
    // add1();
}

// my是一个按钮
function count_down(my) {
    //const endDate = '01/01/2024 00:00:00';
    const endDate = my.previousElementSibling.value
    // date format mm/dd/yyyy

    var arr=cal_time(endDate);
    var [d,h,m,s]=[arr[0],arr[1],arr[2],arr[3]];
    //删除输入框和确认键 添加倒计时
    my.previousElementSibling.previousElementSibling.innerHTML=`ddl在${d}天${h}小时${m}分之后`;
    my.previousElementSibling.previousElementSibling.setAttribute("style","display:")
    my.nextElementSibling.innerHTML= my.previousElementSibling.value;
    (my.previousElementSibling).remove();
    (my).remove();
    // 不移除元素，只是让他隐形
    // (my.previousElementSibling).setAttribute("style","display:none");
    // (my).setAttribute("style","display:none");
    // console.log( my.previousElementSibling.value);
    //自动加一个
    add();
}

function cal_time(endDate)
{
    const now = new Date(endDate).getTime();
    const countDown = new Date().getTime();
    const distance = now - countDown;
    
    // 时间计算 for dats, hours, minutes and seconds
    let d = Math.floor(distance / (1000 * 60 * 60 * 24));
    let h = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let m = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    let s = Math.floor((distance % (1000 * 60)) / (1000));
    return [d,h,m,s];
}

function update(div)
{
    var endDate=div.children[3].innerHTML;
    var arr=cal_time(endDate);
    var [d,h,m,s]=[arr[0],arr[1],arr[2],arr[3]];
    div.children[2].innerHTML=`ddl在${d}天${h}小时${m}分之后`;
}

//每分钟更新一次倒计时
window.onload=function()
{
  setInterval("UpdateCountDownTime()",1000*60);
}

function UpdateCountDownTime()
{
    listNum = form.children.length;
    for(var i=0;i<listNum-1;i++)
    {
        // 参数是div
        update(form.children[i]);
    }
}

// 本地储存
// function initLocalStorage()
// {
//     if(typeof(Storage) !== "undefined") {
//         if (localStorage.clickcount) {
            
            
//         } else {
//             localStorage.clickcount = 1;
//         }
//         } else {
//         document.getElementById("result").innerHTML = "抱歉！您的浏览器不支持 Web Storage ...";
//     }
// }

// function add1()
// {
//     localStorage.clickcount = Number(localStorage.clickcount)+1;
//     console.log(localStorage.clickcount);
// }