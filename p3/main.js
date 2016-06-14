
var alumno = function (nombre,notas){
	this.nombre = nombre,
	this.notas = notas

	var tipo_nombre = typeof(this.nombre);
	var tipo_notas = notas instanceof Array;
	var suma = 0;
	var promedio = 0;

	 if (!(tipo_nombre == "string")){
		console.log("El nombre ingresado no es una cadena");
		return false;
	} else {
		//console.log("Es cadena");
		if(tipo_notas){
			this.notas =  notas.filter(function(e){
		    	return !isNaN(e)
		    	}).map(function(e){
		    		return Math.round(e)
		    	})
		} else {
		    alert("el valor de notas no es arreglo")
		    return false;
		}
			
	}

	///metodo
	this.calcula_promedio = function () {
	  for (var i=0; i<this.notas.length; i++){
	  	suma = suma + parseInt(this.notas[i]);
	  }
	  	return promedio = suma / this.notas.length;
	};
}
