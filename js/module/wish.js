define([
    'jquery',
    'html2canvas'
], function ($, html2canvas) {
    // 生成图片

    function toPicFun() {
        $(".generate").click(function () {
            $('.generate').children().remove();
            $('.generate').append(" <p style='color: #fff'>请长按并保存至手机</p>");
            $('.qr').show();
            html2canvas(document.getElementById('views'), {
                useCORS: true,
                foreignObjectRendering: true,
            }).then(function (canvas) {
                //将canvas转化成base64图片
                var tempSrc = canvas.toDataURL("image/png");
                $(".down2").attr("src", tempSrc);
            });
            $('.wish-bg').fadeOut();
            $('.pic').fadeIn();
        });
    }
    return {
        toPicFun
    }
});