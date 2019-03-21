
$(function () {

    render(1)

    // 渲染列表
    function render(page) {
        // 发送ajax请求
        $.ajax({
            type: 'get',
            url: '/category/queryTopCategoryPaging',
            data: {
                page: page,
                pageSize: 5
            },
            success: function (res) {
                // console.log(res)
                $('tbody').html(template('tpl', res))

                // 渲染分页
                renderPagintor(res, render)
            }
        })
    }

    // 点击添加分类按钮 显示模态框
    $('.btn-add').on('click', function () {
        $('#addModal').modal('show')        
    })

    // 表单校验
    $('#form').bootstrapValidator({
        fields: {
            categoryName: {
                validators: {
                    notEmpty: {
                        message: '一级分类名称不能为空'
                    }
                }
            }
        },
        feedbackIcons: {
            valid: 'glyphicon glyphicon-ok',
            invalid: 'glyphicon glyphicon-remove',
            validating: 'glyphicon glyphicon-refresh'
        }
    })

    // 当表单校验成功时，发送ajax请求
    $('#form').on('success.form.bv', function (e) {
        // 阻止浏览器的默认行为
        e.preventDefault();
        // 点击确定按钮发送ajax请求
        // $(".add-cate").on('click', function () {
            $.ajax({
                type: 'post',
                url: '/category/addTopCategory',
                data: $('#form').serialize(),
                success: function (res) {
                    console.log(res);
                    if (res.success) {                        
                        $('#addModal').modal('hide');
                        render(1);
                    }
                }
            })
            // console.log(1)
        // })
    })

})