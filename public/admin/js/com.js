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

  // 封装分页
  function renderPagintor(res, render) {
    $('#pagintor').bootstrapPaginator({
        bootstrapMajorVersion: 3,
        currentPage: res.page,
        size: 'small',
        totalPages: Math.ceil(res.total / res.size),
        // 点击切换页数
        onPageClicked: function (event, originalEvent, type, page) {
            render(page);
        },
        itemTexts: function (type, page, current) {
            // console.log(type, page, current)
            switch (type) {
                case 'first':
                    return "首页"
                case 'prev':
                    return "上一页"
                case 'next':
                    return "下一页"
                case 'last':
                    return "尾页"            
                default:
                    return page;
            }
        }
    })
}