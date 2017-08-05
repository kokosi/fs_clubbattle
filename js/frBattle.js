/*
 2016-01-23
 Gtrix
 WebDev Part_KOKOSI
 */

$(function(){

    $('.btns').click(function () {

        var popup = $($(this).attr('href'));

        $('.popWrap').show();
        $('.m_popWrap').show();
        popup.show();
    });

    $('.close').click(function(){
        $('.popWrap').hide();
        $('.m_popWrap').hide();
        $('.popUp').hide();
    });

    var listWrap;

    sizeCheck();

    function sizeCheck() {
        listWrap = $('.m_matchList');
        listWrap.css('width',200*listWrap.children().size());
    }

});