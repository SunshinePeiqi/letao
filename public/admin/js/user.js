$(function () {
    var pageSize = 5
    
    // 渲染列表
    render(1);

    function render(page) {
        // 1.发送ajax请求
        $.ajax({
            type: 'get',
            url: '/user/queryUser',
            data: {
                page: page,
                pageSize: pageSize
            },
            success: function (res) {
                console.log(res);
                var htmlstr = template('tpl', res)
                $('tbody').html(htmlstr);
                
                // 渲染分页
                $('#pagintor').bootstrapPaginator({
                    bootstrapMajorVersion: 3,
                    currentPage: res.page,
                    totalPages: Math.ceil(res.total / res.size),
                    // 点击切换页数
                    onPageClicked: function (event, originalEvent, type,page) {
                        render(page);
                    }
                })
            }
            
        })
    }

    // 启用和禁用按钮的功能
    // 点击按钮显示模态框
    var id
    var isDelete
    $('tbody').on('click', '.btn', function () {
        // 显示模态框
        $("#btnModal").modal('show')
    //     // console.log(1)
    //     // 获取当前数据的id 和 isDelete
        id = $(this).parent().data('id');
        
        isDelete = $(this).hasClass('btn-success') ? 1 : 0;
    //     console.log(id, isDelete);
       
    })
     
    // 点击确定按钮发送ajax请求
    // $('.confirm').on('click', function () {            
    //     // 发送ajax请求
    //     $.ajax({
    //         type: 'post',
    //         url: '/user/updateUser',
    //         data: {
    //             id: id,
    //             isDelete: isDelete
    //         },
    //         success: function (res) {
    //             console.log(res)
    //             $('#btnModal').modal('hide')
    //             render(1)
    //         }
    //     })
})


})