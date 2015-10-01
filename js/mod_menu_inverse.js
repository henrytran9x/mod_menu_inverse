(function($){
    $(document).ready(function(){
       var menu_block = $('.block-menu.inverse');
       var menu_lv1 =  menu_block.children('.content').children('ul');
        menu_lv1.addClass('accordion');
        menu_block.find('.content ul li ul').wrap('<div class="divsubmenu"></div>')
        menu_block.find('.content ul li > a').wrap('<p></p>');
        menu_block.find('.content ul li > p').prepend('<i class="fa fa-angle-right"></i>');
        menu_block.find('.content ul li.expanded').addClass('deeper parent');
        $(".parent .fa").click(function(){
        	var el = $(this);
        	el.toggleClass("min").parent("p").next(".divsubmenu").slideToggle();
      	});
    });
}(jQuery))