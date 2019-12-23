define([
    'jquery',
    'public'
], function ($, public) {

    function clickFun() {
        $('textarea input').on('blur', function () {
            window.scroll(0, 0);
        });
        $('.ball').click(function () {
            $(".black,.panel").fadeIn("slow");
            public.setBallBackground($(this).parent('.wrap').index() + 1);
        });
        $('.wish').click(function () {
            var txt = $('#textareaContent').val();
            if (!$.trim(txt)) {
                alert('请写下您的祝福语哦！');

            } else {
                public.wishLanguage(txt);
                $('.blessing').html(txt)
                $('.ballBoxes').hide();
                $(".black,.panel").fadeOut("slow");
                $('.cardContent').show();
            }

        });
    }

    function toggleSound() {
        var music = document.getElementById("m_bg_music"); //获取ID  
        if (music.paused) { //判读是否播放  
            music.paused = false;
            music.play();
        }
    }

    function textClick() {
        $("#textareaContent").on('input propertychange', function () {
            var userDesc = $(this).val();
            var len;
            if (userDesc) {
                len = public.checkStrLengths(userDesc, 70);
            } else {
                len = 0
            }
            $("#spanName").html(len);
        });
    }
    return {
        clickFun,
        toggleSound,
        textClick
    }
});