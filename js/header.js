$(function () {
    var num=0,list=$('.banner_list'),width=$('.banner_item').width();
    setInterval(function () {
        if(num==5){
            num=0;
            list.css('margin-left',-num*width+'px')
        }else{
            num++;
        }
        list.animate({
            'marginLeft':-num*width+'px'
        })
    },8000)


});