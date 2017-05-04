$(document).ready(function () {
    $('#subQuestion').on('click', function () {
        layer.open({
            type: 1,
			content: $('#popwin'),
			offset:['200px','300px'], //弹出框的坐标位置，自己去设置
			shade:0,
			area:['370px','260px'], 
			title:"查看问卷结果"
        });
    });
})