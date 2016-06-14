$( document ).ready(function() {
    var total = 3;
    	$("#div").on("click", function(event) {
      var target = $(event.target);
      if (target.is("div")) {
            total = total + 1;
        $("#ol").append("<li>Elemento "+total+"</li>");
        
      }
    })
});

