define([
    'jquery'
], function ($) {
    function treeBtnClick() {
        $(".myWish").click(function () {
            $('.treeBox').fadeOut();
            $('.wish-bg').fadeIn();
        });
    }
    return {
        treeBtnClick
    }
});