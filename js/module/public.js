define([
    'jquery'
], function ($) {
    var str;
    // 设置球体颜色
    function setBallBackground(ballIndex) {
        var imgUrl = {
            "1": "img/彩球.png",
            "2": "img/彩球02.png",
            "3": "img/彩球03.png",
            "4": "img/彩球05.png",
        }
        for (const key in imgUrl) {
            if (String(ballIndex) === key) {
                console.log(imgUrl[key])
                $('.ball-topPic').css({
                    "background": "url('" + imgUrl[key] + "') no-repeat",
                    "background-size": "cover"
                });
                $('.ball-bottomPic').css({
                    "background": "url('" + imgUrl[key] + "') no-repeat",
                    "background-size": "cover",
                    "background-position-y": "bottom"
                });
                $('.ball-bg').css({
                    "background": "url('" + imgUrl[key] + "') no-repeat",
                    "background-size": "cover"
                });
            }
        }
    }

    // 文本框字符长度
    function checkStrLengths(str, maxLength) {
        var result = 0;
        if (str && str.length > maxLength) {
            result = maxLength;
        } else {
            result = str.length;
        }
        return result;
    }

    // 许愿语
    function wishLanguage(txt) {
        console.log(txt)
        str = txt;
    }

    function returnWishLanguage() {
        return str;
    }
    return {
        setBallBackground,
        checkStrLengths,
        wishLanguage,
        returnWishLanguage
    }
});