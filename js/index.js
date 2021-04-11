$(document).ready(function () {
    
    /**
     * DROPDOWN MENU
     */
    //REFERENZE
    var dropDown = $('.with-dropdown');
    var dropLinks = dropDown.children('a');
    var dropMenus = dropDown.children('.dropdown-menu');

    //CLICK MOSTRA/NASCONDI MENU'
    dropLinks.click(function(e) {


        var actualMenu = $(this).next('.dropdown-menu');
        //RESET
        dropMenus.not(actualMenu).hide();

        actualMenu.toggle();
    }); 




    //FINE CODICE
});