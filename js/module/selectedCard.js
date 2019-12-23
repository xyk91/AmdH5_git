define([
    'jquery',
    'public'
], function ($, public) {
    var cardIndex;
    //雪花
    var can = document.getElementById("snow");
    var ctx = can.getContext("2d");
    var width = window.innerWidth;
    var height = window.innerHeight;
    can.width = width;
    can.height = height;
    //雪花数目
    var snowNum = 200;
    var arr = []; //保存各圆坐标及半径
    for (var i = 0; i < snowNum; i++) {
        arr.push({
            x: Math.random() * width,
            y: Math.random() * height,
            r: Math.random() * 2
        })
    }

    function cardClick() {
        $('textarea input').on('blur', function () {
            window.scroll(0, 0);
        });
        $('.card').click(function () {
            cardIndex = $(this).index() + 1
            $(".gift-black,.gift-panel").fadeIn("slow");
        });
        $('.card-wish').click(function () {
            var regName = /[\u4e00-\u9fa5]/;
            var regPhone = /^1[345678]\d{9}$/;
            var gift = $('#gift').val();
            var name = $('#name').val();
            var phone = $('#phone').val();
            if (!$.trim(name) || !regName.test(name)) {
                alert('请正确写下您的真实姓名！')
                return;
            }
            if (!$.trim(phone) || !regPhone.test(phone)) {
                alert('请正确写下您的联系方式！')
                return;
            }
            if (!$.trim(gift)) {
                alert('请写下您想要的礼物哦！')
            } else {
                // setBallBackground();
                console.log(public.returnWishLanguage())
                console.log(cardIndex)
                $('#write').hide();
                $(".gift-panel").css('background', '0');
                $('#collect').fadeIn();
                var deg = 0;
                turn = setInterval(function () {
                    if (deg === 180) {
                        deg = 0;
                    }
                    deg++;
                    $(".singleVision").css("transform", "rotateZ(" + deg + "deg)");
                }, 5)
                setTimeout(() => {
                    animationBall()
                }, 800);
            }

        })
    }
    // 祝福单放进球体
    function animationBall() {
        var count = 90;
        // alert(window.screen.width)
        if (window.screen.width == '1024') {
            $(".singleVision").animate({
                left: "3.6rem",
                top: "1rem"
            }, 2000, function () {
                $(this).fadeOut();
                clearInterval(turn)
            });
        } else if (window.screen.width == '1920') {
            $(".singleVision").animate({
                left: "3.8rem",
                top: "1rem"
            }, 2000, function () {
                $(this).fadeOut();
                clearInterval(turn)
            });
        } else {
            $(".singleVision").animate({
                left: "2.8rem",
                top: "1rem"
            }, 2000, function () {
                $(this).fadeOut();
                clearInterval(turn)
            });
        }

        var time = setInterval(() => {
            if (count <= 0) {
                clearInterval(time);
                // 跳转树
                setTimeout(function () {
                    $('.cardContent').hide();
                    $(".treeBox").show();
                }, 1500)
                putUp();
                setInterval(DrawSnow, 40)
            }
            $('.card-ball-top').css("transform", "rotate(" + count + "deg)");
            count--;
        }, 20);
    }

    // 球挂到树
    function putUp() {
        setTimeout(() => {
            $(".tree-ballBox").animate({
                left: "-2rem",
                bottom: "5rem"
            }, 2000, function () {
                $(".myWish button").attr("disabled", false);
            });
        }, 1500);
    }
    //雪花飘落
    function SnowFall() {
        for (var i = 0; i < snowNum; i++) {
            var point = arr[i];
            point.y += Math.random() * 2 + 1;
            if (point.y > height) {
                point.y = 0;
            }
            point.x += Math.random() * 2 + 1;
            if (point.x > width) {
                point.x = 0;
            }
        }
    }
    //画雪花  圆形
    function DrawSnow() {
        ctx.clearRect(0, 0, width, height);
        ctx.fillStyle = "white";
        ctx.beginPath();
        for (var i = 0; i < snowNum; i++) {
            var point = arr[i];
            ctx.moveTo(point.x, point.y);
            ctx.arc(point.x, point.y, point.r, 0, 2 * Math.PI, false);
        }
        ctx.fill();
        SnowFall();
        ctx.closePath();
    }

    // 礼物文本
    function giftText() {
        $("#gift").on('input propertychange', function () {
            var userDesc = $(this).val();
            var len;
            if (userDesc) {
                len = public.checkStrLengths(userDesc, 100);
            } else {
                len = 0
            }
            $("#giftSpanName").html(len);
        });
    }
    return {
        cardClick,
        giftText
    }
});