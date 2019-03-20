$(function () {
    
    $('.lt-hidden').on('click', function () {
        // console.log(1);
        $('.lt-aside, .lt-main .top, .lt-main').toggleClass('now')

    })

    // 下拉菜单的显示与隐藏
    $('.btn-show').on('click', function () {
        // console.log($(this).next())
        $(this).next().stop().slideToggle();
    })

    // 点击显示模态框
    $('.btn-loginout').on('click', function () {
        // console.log(1)
        $('#myModal').modal('show')
    })
    // 点击确定按钮 退出登录
    $('.btn-confirm').on('click', function () {
        // console.log(1)
        // 发送ajax请求
        $.ajax({
            type: 'get',
            url: '/employee/employeeLogout',
            success: function (info) {
                if (info.success) {
                    location.href = 'index.html'
                }
            }
        })
    })




})