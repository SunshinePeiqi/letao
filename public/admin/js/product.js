
$(function () {
    
    // 渲染列表
    render(1);

    function render(page) {
        // 发送ajax请求
        $.ajax({
            type: 'get',
            url: '/product/queryProductDetailList',
            data: {
                page: page,
                pageSize: 2
            },
            success: function (res) {
                // console.log(res)
                $('tbody').html( template('tpl', res) )

                // 渲染分页
                renderPagintor(res, render);
            }
        })
    }

    // 点击按钮  添加分类框显示
    $(".btn-add").on('click', function () {
        $('#addModal').modal('show')
        // console.log(1)
    })


    // 渲染下拉菜单
    $.ajax({
        type: 'get',
        url: '/category/querySecondCategoryPaging',
        data: {
            page: 1,
            pageSize: 100
        },
        success: function (res) {
            console.log(res);
            $('.dropdown-menu').html( template('tpl1', res) )
        }
    })


    $('.dropdown-menu').on('click', 'li', function () {
        // console.log(1)
        $('.option-con').text( $(this).children().text() )
    })



})