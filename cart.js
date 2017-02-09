$(document).ready(function(){
	
	var cart = [];
	var Item = function(name, dose, route, frequency, taking){
		this.name = name
		this.dose = dose
		this.route = route
		this.frequency = frequency
		this.taking = taking
	};
	
	$(".add-to-profile").click(function(event){
		event.preventDefault();
		var name = $(this).attr("data-name");
		var dose = $(this).attr("data-dose");
		var route = $(this).attr("data-route");
		var frequency = $(this).attr("data-frequency");
		
		addItem(name, dose, route, frequency, 1);
		
	});
	
	//adds drug object to the cart with attributes
	function addItem(name, dose, route, frequency, taking){
		
		//this will check for any doule drugs and dosages in the profile before adding to the array
		for(var i in cart){
			if(cart[i].name==name && cart[i].dose==dose && cart[i].route==route && cart[i].frequency==frequency){
				return;
			}
		}
		
		var item = new Item(name, dose, route, frequency, taking);
		cart.push(item);
	}
	
	//removes one drug from cart profile depending on name, dose, frequency, route, etc.
	function removeItem(name, dose, route, frequency, taking){
		for(var i in cart){
			if(cart[i].name==name && cart[i].dose==dose && cart[i].route==route && cart[i].frequency==frequency){
				cart.splice(i,1); //removes at position i, removes 1 item
				break;
			}
		}
	}
	
	//removes all items in drug profile
	function clearItems(){
		cart=[];
	}
	
	//saves drugProfile to local storage
	function saveItems(){
		localStorage.setItem("drugProfile", JSON.stringify(cart));
	}
	
	//loads drugProfile from local storage
	function loadItems(){
		cart = JSON.parse(localStorage.getItem("drugProfile"));
	}
	
	addItem("SOVALDI","200MG","PO","QD",1);
	console.log(cart[0].name);
	saveItems(cart);
	removeItem("SOVALDI","200MG","PO","QD",1);
	console.log(cart);
	loadItems();
	console.log(cart);
	
	
	
	
	
	
	
});