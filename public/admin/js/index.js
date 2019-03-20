$(function () {

    // 后台返回的数据
    var res = {
        title : '2018年注册人数',
        list: [
            {month : '一月', count: '3000', count1: '1800'},
            {month : '二月', count: '2000', count1: '1100'},
            {month : '三月', count: '3600', count1: '2000'},
            {month : '四月', count: '1000', count1: '700'},
            {month : '五月', count: '1500', count1: '800'},
            {month : '六月', count: '2500', count1: '1300'}
        ]
    };
    var months = [];
    var counts = [];
    var counts1 = [];
    for ( var i = 0 ; i < res.list.length ; i++) {
        months.push(res.list[i].month);
        counts.push(res.list[i].count);
        counts1.push(res.list[i].count1);            
    }

    // console.log(months)

    // 柱状图
    var myChart = echarts.init(document.getElementById('main'));

    // 指定图表的配置项和数据
    var option = {
        title: {
            text: res.title
        },
        tooltip: {},
        legend: {
            data: ['人数', '在线人数']
        },
        xAxis: {
            data: months
        },
        yAxis: {},
        series: [{
            name: '人数',
            type: 'bar',
            data: counts
        },
        {
            name: '在线人数',
            type: 'bar',
            data: counts1
        }
    ]
    };

    // 使用刚指定的配置项和数据显示图表。
    myChart.setOption(option);

    // 饼状图
    var picChart = echarts.init(document.getElementById('chat-pic'));

    picOption = {
        title : {
            text: '热门品牌销售',
            subtext: '2019年3月',
            x:'center'
        },
        tooltip : {
            trigger: 'item',
            formatter: "{a} <br/>{b} : {c} ({d}%)"
        },
        legend: {
            orient: 'vertical',
            left: 'left',
            data: ["李宁", "安踏", "特步", "361", "耐克"]
        },
        series : [
            {
                name: '销售情况',
                type: 'pie',
                radius : '55%',
                center: ['50%', '60%'],
                data:[
                    {value:335, name:'李宁'},
                    {value:310, name:'安踏'},
                    {value:234, name:'特步'},
                    {value:135, name:'361'},
                    {value:1548, name:'耐克'}
                ],
                itemStyle: {
                    emphasis: {
                        shadowBlur: 10,
                        shadowOffsetX: 0,
                        shadowColor: 'rgba(0, 0, 0, 0.5)'
                    }
                }
            }
        ]
    };
    
    picChart.setOption(picOption)

})