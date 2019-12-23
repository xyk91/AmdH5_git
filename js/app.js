require(['common'], function (common) {
    require(['index', 'selectedCard', 'tree', 'wish'], function (index, selectedCard, tree, wish) {
        index.clickFun();
        index.textClick();
        setInterval(index.toggleSound(), 1);
        selectedCard.cardClick();
        selectedCard.giftText();
        tree.treeBtnClick();
        wish.toPicFun();
    });
});