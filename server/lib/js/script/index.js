jQuery(document).ready(function($){

    $('a.scroll-link').click(function(e){
        e.preventDefault();
        let $id = $(this).attr('href');
        $('body,html').animate({
            scrollTop: $($id).offset().top -20
        }, 750);
    });

});