//this function coordinates with the body diagram and returns the value of whatever ADR is clicked 

$(document).ready(function(){
	//note the 'a' after the id.  Signifies that it will return only the html within the <a> tags.  Helps us disregard unecessary HTML tags.
	$("#adrClickReturn a").click(function(){
		var value = $(this).html();
		var input = $('#adeFormReturn');
        
		input.val(value);
	});
	
		
});