$(document).ready(function(){
  var url = "http://adverse.docking.org/adverse.json";
	
	//searches when the button with div id "button" is clicked
	$("#drugSearchButton").click(function(){
		executeSearch();
	});
	
	
	
	//search function
     function executeSearch(){
        var drugSearch = $('input[name=drugSearchBar]').val();
		
		
		//html table display string variables
		var display = "<table><tr><th>Adverse Event</th><th>Number Reported</th><th>Percent Reported</th></tr>";
		var foundDisplay ="";
		var similarDisplay = "<table><tr><th>Adverse Event</th><th>Number Reported</th></tr>";
		
			
		
		
		//Store ADR Outcome JSON Data
		$.getJSON(url, function(result){
			for (var i in result.results) {
										
				}
		});
	}
});