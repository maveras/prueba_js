

$(document).keydown(function(e) {
    switch(e.which) {
        case 37: // left
        
        var actual = $(".cuadrado").position().left;
        var nuevo = actual - 50; 
        $(".cuadrado").css("left", ""+nuevo+"px");
        
        break;

        

        case 39: // right
        
        var actual = $(".cuadrado").position().left;
        var nuevo = actual + 50; 
        
        $(".cuadrado").css("left", ""+nuevo+"px");
        
        break;

        

        default: return; // exit this handler for other keys
    }
    e.preventDefault(); // prevent the default action (scroll / move caret)
});