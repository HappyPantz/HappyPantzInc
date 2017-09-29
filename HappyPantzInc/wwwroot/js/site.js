$(document).ready(function() {
    //Set sub-item images
    $('li.sub-item').each(function() {
        $(this).css('background-image', $(this).attr('bg'));
    });
    
    //Set initial selected sub-items
    $('menu.sub-menu').each(function() {
        var $item = $(this).children('li.sub-item').first();
        $item.addClass('selected');
    });
    
    //Main menu action
    $('li.menu-item').mouseenter(function() {
        var $submenu = $(this).children('menu.sub-menu');
        var itemCount = $submenu.children('li').length;
        var newHeight = 0;
        
        if (itemCount > 0) {
            $submenu.children('li').each(function() {
                newHeight += $(this).outerHeight();
            });

            $submenu.css({'height': newHeight, 'padding-top': '0.2em'});
        }
    });
    $('li.menu-item').mouseleave(function() {
        var $submenu = $(this).children('menu.sub-menu');
        
        $submenu.css({'height': 0, 'padding-top': 0});
    })
    
    //Sub menu action
    $('li.sub-item').hover(function() {
        $(this).parent().children('.selected').removeClass('selected');
        $(this).addClass('selected');
    });
});