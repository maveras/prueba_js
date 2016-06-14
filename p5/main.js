$( document ).ready(function() {
	$("#boton").click(function(){
		var texto = $("#texto").val();
		var color = $("#color").val()
		var tam_letra = $("#tam_letra").val();
		var tipografia = $("#tipografia").val();
		

		$("#derecha").html("<p style='color:"+color+";font-size:"+tam_letra+"px; font-family: "+tipografia+"   '    >"+texto+"</p>");
	});
});