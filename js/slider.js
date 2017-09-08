$(function(){
   
    slider();
    
    function slider(){
        $('.slide').first().addClass('active');
        $('.controller').first().addClass('active');
    };
    
    $('.controller').click(function(){
        var $this = $(this),
            $controllerLength = $this.parent().children(),
            $position = $controllerLength.index($this);
        
        $('.controller').removeClass('active').eq($position).addClass('active');
		$('.slide').removeClass('active').eq($position).addClass('active');    
    });
    
    $('.play').click(function(){
        
        var amountOfSlide = $('.slide').parent().children(),
            singleSlide = amountOfSlide.index(1);
        
        setInterval(function(){
            
            
        }, 2000);
    });
});

