$(function(){
    
    abrirJanela();
    fecharPopup();

    function abrirJanela(){
        $('.btn').click(function(e){
            e.stopPropagation();
            $('.bg').fadeIn();
        });
    }

    function fecharPopup(){
        
        var el = $('body, .fechar-popup');

        el.click(function(){
            $('.bg').fadeOut();
        })

        $('.form').click(function(e){
            e.stopPropagation();
        })
    }

});