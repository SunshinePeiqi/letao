
$(function () {
    
    // 渲染列表
    render(1);

    function render(page) {
        // 发送ajax请求
        $.ajax({
            type: 'get',
            url: '/category/querySecondCategoryPaging',
            data: {
                page: page,
                pageSize: 5
            },
            success: function (res) {
                // console.log(res)
                $('tbody').html( template('tpl', res) )
                
                renderPagintor(res, render)
            }
        })
    }

    // 点击添加按钮，显示模态框
    $('.btn-sec').on('click', function () {
        $('#addModal').modal('show')
    })

    // 渲染下拉菜单列表
    $.ajax({
        type: 'get',
        url: '/category/queryTopCategoryPaging',
        data: {
            page: 1,
            pageSize: 100
        },
        success: function (res) {
            console.log(res)
            $('.dropdown-menu').html( template('tpl1', res) )
        }
        
    })
    
    $('.dropdown-menu').on('click', 'li', function () {
        var id = $(this).data('id')
        // console.log(id)
        var tet = $(this).children().text();
        console.log(tet)
        $('.option-con').text(tet);
    })

    // 表单校验
    $("#form").bootstrapValidator({
        fields: {
            categoryName: {
                validators: {
                    notEmpty: {
                        message: '二级分类名不能为空'
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

})