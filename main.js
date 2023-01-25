let form = document.getElementsByTagName("form").item(0);

function del(my) {
    // 通过my获取到要删除行 删除
    (my.parentNode).remove(my);
}

function add() {
    var elem = document.createElement("div");
    elem.id = "1";
    elem.innerHTML = "<button class=\"btn\" onclick=\"del(this)\">任务完成</button>\
    <input type=\"text\">\n<label id=\"ddl-time\"></label>\n<input type=\"text\" id=\"ddl_time_text\" placeholder=\"格式:12/31/2024 00:00:00\">\
    <button class=\"btn\" onclick=\"count_down(this)\">确认</button>";
    form.appendChild(elem);
}

function count_down(my) {
    //const endDate = '01/01/2024 00:00:00';
    const endDate = my.previousElementSibling.value
    // date format mm/dd/yyyy

    // window.onload=function(){
    //     //每1秒刷新时间
    //   setInterval("cal_time()",1000);
    // }
    var arr=cal_time(endDate);
    var [d,h,m,s]=[arr[0],arr[1],arr[2],arr[3]];
    //删除输入框和确认键 添加倒计时
    my.previousElementSibling.previousElementSibling.innerHTML=`ddl在${d}天${h}小时${m}分之后, hurry up!`;
    (my.previousElementSibling).remove();
    (my).remove();
    
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