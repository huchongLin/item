$(function() {
    //提交留言
    const m = new Map();
    $("#submit").click(() => {
        //获取用户名和文本信息
        let _name = $(".name").val(),
            _msg = $(".text").val();
        //将信息存入map中
        m.set(_name, _msg);
        //调用展示方法
        listShow();

    })

    //展示信息
    let listShow = () => {
        let str = "";
        //对map中的信息进行循环遍历
        for (let [key, value] of m) {
            str += `
            <li>${key}说：${value}</li>
            `
        }
        $('.list1').html(str);
    }

})