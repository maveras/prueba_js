$( document ).ready(function() {
	$("#boton").click(function(){
		var texto = $("#texto").val();
		var color = $("#color").val()
		var tam_letra = $("#tam_letra").val();
		var tipografia = $("#tipografia").val();
		

		$("#derecha").html("<p style='color:"+color+";font-size:"+tam_letra+"px; font-family: "+tipografia+"   '    >"+texto+"</p>");
	});
});

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