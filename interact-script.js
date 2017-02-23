//This javascript file is the main driver of functions behind all body diagram scripts including hover, highlight, click, url redirect, etc.

//For all the meddra adr objects, check the meddra.js file which stores the main javascript object.  Makes code a lot cleaner since there is so much going on in this script already.

function isTouchEnabled() {
	return (('ontouchstart' in window)
		|| (navigator.MaxTouchPoints > 0)
		|| (navigator.msMaxTouchPoints > 0));
}

//load functions when page is ready
$(document).ready(function(){
	
	//animation functions to hide and show based on time and opacity
	$('#int_base').hide().animate({'opacity':'0'}, 1000);

	$('.go_int').on('click', function(){
		$('#ext_base').hide().animate({'opacity':'0'}, 1000);
		$('#int_base').show().animate({'opacity':'1'}, 1000);
	});
	$('.go_ext').on('click', function(){
		$('#int_base').hide().animate({'opacity':'0'}, 1000);
		$('#ext_base').show().animate({'opacity':'1'}, 1000);
	});
});


$(function(){
    //all external events, if you want to add more go to the ext-organs.js and ext-spots.js file and create an object then add it here.
	ext_addEvent('ext_1');
	ext_addEvent('ext_2');
	ext_addEvent('ext_3');
	ext_addEvent('ext_4');
	ext_addEvent('ext_5');
	ext_addEvent('ext_6');
	ext_addEvent('ext_7');
	ext_addEvent('ext_8');
	ext_addEvent('ext_9');
	ext_addEvent('ext_10');
	ext_addEvent('ext_11');
	ext_addEvent('ext_12');
	ext_addEvent('ext_13');
	ext_addEvent('ext_14');
	ext_addEvent('ext_15');
	ext_addEvent('ext_16');
	ext_addEvent('ext_17');
	ext_addEvent('ext_18');
	ext_addEvent('ext_19');
	ext_addEvent('ext_20');
	ext_addEvent('ext_21');
	ext_addEvent('ext_22');
	ext_addEvent('ext_23');
	ext_addEvent('ext_24');
	ext_addEvent('ext_25');
	ext_addEvent('ext_26');
	ext_addEvent('ext_27');

	int_addEvent('int_1');
	int_addEvent('int_2');
	int_addEvent('int_3');
	int_addEvent('int_4');
	int_addEvent('int_5');
	int_addEvent('int_6');
	int_addEvent('int_7');
	int_addEvent('int_8');
	int_addEvent('int_9');
	int_addEvent('int_10');
	int_addEvent('int_11');
})

//external organs events handler
function ext_addEvent(id,relationId){
	var _obj = $('#'+id);
	_obj.attr({'fill':ext_config[id]['upColor'],'fill-opacity':ext_config[id]['upOpacity'],'stroke':ext_config[id]['outlineUpColor'],'stroke-opacity':ext_config[id]['outlineUpOpacity']});
	_obj.attr({'cursor':'default'});
	if(ext_config[id]['enable'] == true){
		//checks to see if touch is enabled on mobile devices
		if (isTouchEnabled()) {
			_obj.on('touchstart', function(e){
				var touch = e.originalEvent.touches[0];
				var x=touch.pageX+10, y=touch.pageY+15;
				var tipw=$('#organs-tip').outerWidth(), tiph=$('#organs-tip').outerHeight(), 
				x=(x+tipw>$(document).scrollLeft()+$(window).width())? x-tipw-(20*2) : x
				y=(y+tiph>$(document).scrollTop()+$(window).height())? $(document).scrollTop()+$(window).height()-tiph-10 : y
				$('#'+id).css({'fill':ext_config[id]['overColor'],'fill-opacity':ext_config[id]['downOpacity'],'stroke':ext_config[id]['outlineDownColor'],'stroke-opacity':ext_config[id]['outlineDownOpacity']});
				$('#organs-tip').show().html(ext_config[id]['hover']);
				$('#organs-tip').css({left:x, top:y})
			})
			_obj.on('touchend', function(){
				$('#'+id).css({'fill':ext_config[id]['upColor'],'fill-opacity':ext_config[id]['upOpacity'],'stroke':ext_config[id]['outlineUpColor'],'stroke-opacity':ext_config[id]['outlineUpOpacity']});
				if(ext_config[id]['target'] == 'new_window'){
					window.open(ext_config[id]['url']);	
				}else if(ext_config[id]['target'] == 'same_window'){
					
					var  whichObjectID = ext_config[id]['arrayID'];
					adrPopulate(whichObjectID);
					window.parent.location.href=ext_config[id]['url'];
				}
			})
		}
		_obj.attr({'cursor':'pointer'});
		
		//Code that executes on hover over body part
		_obj.hover(function(){
			$('#organs-tip').show().html(ext_config[id]['hover']);
			_obj.css({'fill':ext_config[id]['overColor'],'fill-opacity':ext_config[id]['overOpacity'],'stroke':ext_config[id]['outlineOverColor'],'stroke-opacity':ext_config[id]['outlineOverOpacity']})
		},function(){
			$('#organs-tip').hide();
			$('#'+id).css({'fill':ext_config[id]['upColor'],'fill-opacity':ext_config[id]['upOpacity'],'stroke':ext_config[id]['outlineUpColor'],'stroke-opacity':ext_config[id]['outlineUpOpacity']});
		})
		
		//What appears when the mouse clicks down.
		_obj.mousedown(function(){
			$('#'+id).css({'fill':ext_config[id]['downColor'],'fill-opacity':ext_config[id]['downOpacity'],'stroke':ext_config[id]['outlineDownColor'],'stroke-opacity':ext_config[id]['outlineDownOpacity']});
		})
		
		//EXTERNAL BODY PARTS FUNCTIONS THAT TRIGGER ON RELEASE OF MOUSE KEY
		_obj.click(function(){
			$('#'+id).css({'fill':ext_config[id]['overColor'],'fill-opacity':ext_config[id]['overOpacity'],'stroke':ext_config[id]['outlineOverColor'],'stroke-opacity':ext_config[id]['outlineOverOpacity']});
			if(ext_config[id]['target'] == 'new_window'){
				window.open(ext_config[id]['url']);	
			}else if(ext_config[id]['target'] == 'same_window'){
				
				console.log(ext_config[id]['arrayID']);
				var  whichObjectID = ext_config[id]['arrayID'];
				
				adrPopulate(whichObjectID); //this function populates the adverse event page								
				window.parent.location.href=ext_config[id]['url'];//go to url
			}
		})
		_obj.mousemove(function(e){
			var x=e.pageX+10, y=e.pageY+15;
			var tipw=$('#organs-tip').outerWidth(), tiph=$('#organs-tip').outerHeight(), 
			x=(x+tipw>$(document).scrollLeft()+$(window).width())? x-tipw-(20*2) : x
			y=(y+tiph>$(document).scrollTop()+$(window).height())? $(document).scrollTop()+$(window).height()-tiph-10 : y
			$('#organs-tip').css({left:x, top:y})
		})
	}	
}

//internal organs events handler
function int_addEvent(id,relationId){
	var _obj = $('#'+id);
	_obj.attr({'fill':int_config[id]['upColor'],'fill-opacity':int_config[id]['upOpacity'],'stroke':int_config[id]['outlineUpColor'],'stroke-opacity':int_config[id]['outlineUpOpacity']});
	_obj.attr({'cursor':'default'});
	if(int_config[id]['enable'] == true){
		if (isTouchEnabled()) {
			_obj.on('touchstart', function(e){
				var touch = e.originalEvent.touches[0];
				var x=touch.pageX+10, y=touch.pageY+15;
				var tipw=$('#organs-tip').outerWidth(), tiph=$('#organs-tip').outerHeight(), 
				x=(x+tipw>$(document).scrollLeft()+$(window).width())? x-tipw-(20*2) : x
				y=(y+tiph>$(document).scrollTop()+$(window).height())? $(document).scrollTop()+$(window).height()-tiph-10 : y
				$('#'+id).css({'fill':int_config[id]['overColor'],'fill-opacity':int_config[id]['downOpacity'],'stroke':int_config[id]['outlineDownColor'],'stroke-opacity':int_config[id]['outlineDownOpacity']});
				$('#organs-tip').show().html(int_config[id]['hover']);
				$('#organs-tip').css({left:x, top:y})
			})
			_obj.on('touchend', function(){
				$('#'+id).css({'fill':int_config[id]['upColor'],'fill-opacity':int_config[id]['upOpacity'],'stroke':int_config[id]['outlineUpColor'],'stroke-opacity':int_config[id]['outlineUpOpacity']});
				if(int_config[id]['target'] == 'new_window'){
					window.open(int_config[id]['url']);	
				}else if(int_config[id]['target'] == 'same_window'){
					
					var  whichObjectID = int_config[id]['arrayID'];//tracks what object we are clicking
					adrPopulate(whichObjectID);
					window.parent.location.href=int_config[id]['url'];
				}
			})
		}
		_obj.attr({'cursor':'pointer'});
		_obj.hover(function(){
			$('#organs-tip').show().html(int_config[id]['hover']);
			_obj.css({'fill':int_config[id]['overColor'],'fill-opacity':int_config[id]['overOpacity'],'stroke':int_config[id]['outlineOverColor'],'stroke-opacity':int_config[id]['outlineOverOpacity']})
		},function(){
			$('#organs-tip').hide();
			$('#'+id).css({'fill':int_config[id]['upColor'],'fill-opacity':int_config[id]['upOpacity'],'stroke':int_config[id]['outlineUpColor'],'stroke-opacity':int_config[id]['outlineUpOpacity']});
		})
		_obj.mousedown(function(){
			$('#'+id).css({'fill':int_config[id]['downColor'],'fill-opacity':int_config[id]['downOpacity'],'stroke':int_config[id]['outlineDownColor'],'stroke-opacity':int_config[id]['outlineDownOpacity']});
		})
		
		//when the mouse is released, decide what to do.  If target is enabled to new window, create a pop-up, if not, open a link within the parent.  Also location to execute any scripts necessary to populate the ADR page
		_obj.click(function(){
			$('#'+id).css({'fill':int_config[id]['overColor'],'fill-opacity':int_config[id]['overOpacity'],'stroke':int_config[id]['outlineOverColor'],'stroke-opacity':int_config[id]['outlineOverOpacity']});
			if(int_config[id]['target'] == 'new_window'){
				window.open(int_config[id]['url']);	
			}else if(int_config[id]['target'] == 'same_window'){
				
				var  whichObjectID = int_config[id]['arrayID'];//tracks what object we are clicking
				
				adrPopulate(whichObjectID);
				window.parent.location.href=int_config[id]['url'];
			}
		})
		_obj.mousemove(function(e){
			var x=e.pageX+10, y=e.pageY+15;
			var tipw=$('#organs-tip').outerWidth(), tiph=$('#organs-tip').outerHeight(), 
			x=(x+tipw>$(document).scrollLeft()+$(window).width())? x-tipw-(20*2) : x
			y=(y+tiph>$(document).scrollTop()+$(window).height())? $(document).scrollTop()+$(window).height()-tiph-10 : y
			$('#organs-tip').css({left:x, top:y})
		})
	}	
}

//The external spots events handlers
$(function(){
	var points_len = ext_spots['spots'].length;
	if( points_len > 0){
		var xmlns = "http://www.w3.org/2000/svg";
		var tsvg_obj = document.getElementById("ext_spots");
		var svg_circle;
		for(var i=0;i<points_len;i++){
			svg_circle = document.createElementNS(xmlns, "circle");
			svg_circle.setAttributeNS(null, "cx", ext_spots['spots'][i]['pos_X']);
			svg_circle.setAttributeNS(null, "cy", ext_spots['spots'][i]['pos_Y']);
			svg_circle.setAttributeNS(null, "r", ext_spots['spots'][i]['diameter']/2);
			svg_circle.setAttributeNS(null, "fill", ext_spots['spots'][i]['upColor']);
			svg_circle.setAttributeNS(null, "fill-opacity", ext_spots['spots'][i]['upOpacity']);
			svg_circle.setAttributeNS(null, "stroke", ext_spots['spots'][i]['outlineUpColor']);
			svg_circle.setAttributeNS(null, "stroke-opacity", ext_spots['spots'][i]['outlineUpOpacity']);
			svg_circle.setAttributeNS(null, "id",'ext_spots_'+i);
			tsvg_obj.appendChild(svg_circle);
			dynamicext_addEvent(i);
		}
	}
});

function dynamicext_addEvent(id){
	var obj = $('#ext_spots_'+id);

	if(ext_spots['spots'][id]['enable'] == true){
		//checks if touch is enabled for mobile devices
		if (isTouchEnabled()) {
			obj.on('touchstart', function(e){
				var touch = e.originalEvent.touches[0];
				var x=touch.pageX+10, y=touch.pageY+15;
				var tipw=$('#organs-tip').outerWidth(), tiph=$('#organs-tip').outerHeight(),
				x=(x+tipw>$(document).scrollLeft()+$(window).width())? x-tipw-(20*2) : x
				y=(y+tiph>$(document).scrollTop()+$(window).height())? $(document).scrollTop()+$(window).height()-tiph-10 : y
				$('#'+id).css({'fill':ext_spots['spots'][id]['downColor'],'fill-opacity':ext_spots['spots'][id]['downOpacity'],'stroke':ext_spots['spots'][id]['outlineDownColor'],'stroke-opacity':ext_spots['spots'][id]['outlineDownOpacity']});
				$('#organs-tip').show().html(ext_spots['spots'][id]['hover']);
				$('#organs-tip').css({left:x, top:y})
			})
			//executes on release of touch
			obj.on('touchend', function(){
				$('#'+id).css({'fill':ext_spots['spots'][id]['upColor'],'fill-opacity':ext_spots['spots'][id]['upOpacity'],'stroke':ext_spots['spots'][id]['outlineUpColor'],'stroke-opacity':ext_spots['spots'][id]['outlineUpOpacity']});
				if(ext_spots['spots'][id]['target'] == 'new_window'){
					window.open(ext_spots['spots'][id]['url']);
				}else if(ext_spots['spots'][id]['target'] == 'same_window'){
					
					var  whichObjectID = ext_spots['spots'][id]['arrayID'];//tracks what object we are clicking
					adrPopulate(whichObjectID); //this function populates the adverse event page		
					window.parent.location.href=ext_spots['spots'][id]['url'];
				}
			})
		}
		obj.attr({'cursor':'pointer'});
		obj.hover(function(){
			$('#organs-tip').show().html(ext_spots['spots'][id]['hover']);
			obj.css({'fill':ext_spots['spots'][id]['overColor'],'fill-opacity':ext_spots['spots'][id]['overOpacity'],'stroke':ext_spots['spots'][id]['outlineOverColor'],'stroke-opacity':ext_spots['spots'][id]['outlineOverOpacity']})
		},function(){
			$('#organs-tip').hide();
			obj.css({'fill':ext_spots['spots'][id]['upColor'],'fill-opacity':ext_spots['spots'][id]['upOpacity'],'stroke':ext_spots['spots'][id]['outlineUpColor'],'stroke-opacity':ext_spots['spots'][id]['outlineUpOpacity']});
		})
		obj.mousedown(function(){
			obj.css({'fill':ext_spots['spots'][id]['downColor'],'fill-opacity':ext_spots['spots'][id]['downOpacity'],'stroke':ext_spots['spots'][id]['outlineDownColor'],'stroke-opacity':ext_spots['spots'][id]['outlineDownOpacity']});
		})
		
		//EXTERNAL SPOTS CHANGE ON MOUSEUP/CLICK
		obj.click(function(){
			obj.css({'fill':ext_spots['spots'][id]['overColor'],'fill-opacity':ext_spots['spots'][id]['overOpacity'],'stroke':ext_spots['spots'][id]['outlineOverColor'],'stroke-opacity':ext_spots['spots'][id]['outlineOverOpacity']});
			if(ext_spots['spots'][id]['target'] == 'new_window'){
				window.open(ext_spots['spots'][id]['url']);	
			}else if(ext_spots['spots'][id]['target'] == 'same_window'){
				
				var  whichObjectID = ext_spots['spots'][id]['arrayID'];//tracks what object we are clicking
				
				adrPopulate(whichObjectID); //this function populates the adverse event page		
				window.parent.location.href=ext_spots['spots'][id]['url'];
			}
		})
		obj.mousemove(function(e){
				var x=e.pageX+10, y=e.pageY+15;
				var tipw=$('#organs-tip').outerWidth(), tiph=$('#organs-tip').outerHeight(), 
				x=(x+tipw>$(document).scrollLeft()+$(window).width())? x-tipw-(20*2) : x
				y=(y+tiph>$(document).scrollTop()+$(window).height())? $(document).scrollTop()+$(window).height()-tiph-10 : y
				$('#organs-tip').css({left:x, top:y})
		})
	}	
}

//The internal spots events handler
$(function(){
	var points_len = int_spots['spots'].length;
	if( points_len > 0){
		var xmlns = "http://www.w3.org/2000/svg";
		var tsvg_obj = document.getElementById("int_spots");
		var svg_circle;
		for(var i=0;i<points_len;i++){
			svg_circle = document.createElementNS(xmlns, "circle");
			svg_circle.setAttributeNS(null, "cx", int_spots['spots'][i]['pos_X']);
			svg_circle.setAttributeNS(null, "cy", int_spots['spots'][i]['pos_Y']);
			svg_circle.setAttributeNS(null, "r", int_spots['spots'][i]['diameter']/2);
			svg_circle.setAttributeNS(null, "fill", int_spots['spots'][i]['upColor']);
			svg_circle.setAttributeNS(null, "fill-opacity", int_spots['spots'][i]['upOpacity']);
			svg_circle.setAttributeNS(null, "stroke", int_spots['spots'][i]['outlineUpColor']);
			svg_circle.setAttributeNS(null, "stroke-opacity", int_spots['spots'][i]['outlineUpOpacity']);
			svg_circle.setAttributeNS(null, "id",'int_spots_'+i);
			tsvg_obj.appendChild(svg_circle);
			dynamicint_addEvent(i);
		}
	}
});

function dynamicint_addEvent(id){
	var obj = $('#int_spots_'+id);

	if(int_spots['spots'][id]['enable'] == true){
		if (isTouchEnabled()) {
			obj.on('touchstart', function(e){
				var touch = e.originalEvent.touches[0];
				var x=touch.pageX+10, y=touch.pageY+15;
				var tipw=$('#organs-tip').outerWidth(), tiph=$('#organs-tip').outerHeight(),
				x=(x+tipw>$(document).scrollLeft()+$(window).width())? x-tipw-(20*2) : x
				y=(y+tiph>$(document).scrollTop()+$(window).height())? $(document).scrollTop()+$(window).height()-tiph-10 : y
				$('#'+id).css({'fill':int_spots['spots'][id]['downColor'],'fill-opacity':int_spots['spots'][id]['downOpacity'],'stroke':int_spots['spots'][id]['outlineDownColor'],'stroke-opacity':int_spots['spots'][id]['outlineDownOpacity']});
				$('#organs-tip').show().html(int_spots['spots'][id]['hover']);
				$('#organs-tip').css({left:x, top:y})
			})
			obj.on('touchend', function(){
				$('#'+id).css({'fill':int_spots['spots'][id]['upColor'],'fill-opacity':int_spots['spots'][id]['upOpacity'],'stroke':int_spots['spots'][id]['outlineUpColor'],'stroke-opacity':int_spots['spots'][id]['outlineUpOpacity']});
				if(int_spots['spots'][id]['target'] == 'new_window'){
					window.open(int_spots['spots'][id]['url']);
				}else if(int_spots['spots'][id]['target'] == 'same_window'){
					
					var  whichObjectID = int_spots['spots'][id]['arrayID'];//tracks what object we are clicking
				
					adrPopulate(whichObjectID);
					window.parent.location.href=int_spots['spots'][id]['url'];
				}
			})
		}
		obj.attr({'cursor':'pointer'});
		obj.hover(function(){
			$('#organs-tip').show().html(int_spots['spots'][id]['hover']);
			obj.css({'fill':int_spots['spots'][id]['overColor'],'fill-opacity':int_spots['spots'][id]['overOpacity'],'stroke':int_spots['spots'][id]['outlineOverColor'],'stroke-opacity':int_spots['spots'][id]['outlineOverOpacity']})
		},function(){
			$('#organs-tip').hide();
			obj.css({'fill':int_spots['spots'][id]['upColor'],'fill-opacity':int_spots['spots'][id]['upOpacity'],'stroke':int_spots['spots'][id]['outlineUpColor'],'stroke-opacity':int_spots['spots'][id]['outlineUpOpacity']});
		})
		obj.mousedown(function(){
			obj.css({'fill':int_spots['spots'][id]['downColor'],'fill-opacity':int_spots['spots'][id]['downOpacity'],'stroke':int_spots['spots'][id]['outlineDownColor'],'stroke-opacity':int_spots['spots'][id]['outlineDownOpacity']});
		})
		obj.mouseup(function(){
			obj.css({'fill':int_spots['spots'][id]['overColor'],'fill-opacity':int_spots['spots'][id]['overOpacity'],'stroke':int_spots['spots'][id]['outlineOverColor'],'stroke-opacity':int_spots['spots'][id]['outlineOverOpacity']});
			if(int_spots['spots'][id]['target'] == 'new_window'){
				window.open(int_spots['spots'][id]['url']);	
			}else if(int_spots['spots'][id]['target'] == 'same_window'){
				
				var  whichObjectID = int_spots['spots'][id]['arrayID'];//tracks what object we are clicking
				
				adrPopulate(whichObjectID);
				window.parent.location.href=int_spots['spots'][id]['url'];
			}
		})
		obj.mousemove(function(e){
				var x=e.pageX+10, y=e.pageY+15;
				var tipw=$('#organs-tip').outerWidth(), tiph=$('#organs-tip').outerHeight(), 
				x=(x+tipw>$(document).scrollLeft()+$(window).width())? x-tipw-(20*2) : x
				y=(y+tiph>$(document).scrollTop()+$(window).height())? $(document).scrollTop()+$(window).height()-tiph-10 : y
				$('#organs-tip').css({left:x, top:y})
		})
	}	
}


//This is the magic function that will dynamically inject HTML into the page corresponding to the body part.  Can be adapted to JSON data later with getJSON() method.
function adrPopulate(whichObjectID){
	
	var masterHeader = '<ul data-role="listview"><li data-role="collapsible" data-iconpos="right" data-inset="false">';
	var listHeader='<ul data-role="listview" data-theme="b" data-filter="true">';
	var listCloser ='</ul></li><li data-role="collapsible" data-iconpos="right" data-inset="false">';
	var masterCloser ='</ul></li></ul>';
	
	var injectedHtml="";
	
	//adds the title of body part category and the master header to begin list
	injectedHtml+='<h1>'+meddraADR.myObject[whichObjectID].name+'</h1>'+masterHeader;
	
	//loops that build the injected html
	for(var i in meddraADR.myObject[whichObjectID].adverse){
		injectedHtml +='<h2>'+meddraADR.myObject[whichObjectID].adverse[i].smq+'</h2>' +listHeader;
		
		for(var x in meddraADR.myObject[whichObjectID].adverse[i].events){
			injectedHtml +='<li><a href="#drugSearch" onclick="adrClick('+i+','+x+','+whichObjectID+')">'+meddraADR.myObject[whichObjectID].adverse[i].events[x]+'</a></li>' ;
		}
		
		if(i<meddraADR.myObject[whichObjectID].adverse.length-1) //the listCloser suffix is to be added as long as we are not on the last smq in the object.  Allows us to continue the list
			injectedHtml+= listCloser;
	}
	
	injectedHtml +=masterCloser;//final closer of list

	$('#other2').empty(); //clears div upon entry
	
	$(injectedHtml).appendTo('#other2').trigger('create'); //final function that appends the injected HTML into the div
	
	$("#other").trigger("create");//supposedly helps refresh page, but I found it doesn't do anything.
	
}

//script to allow for clicking of adr's and then transferring that adr to the form on the search page
//variables y and z are the position of the adverse event 
function adrClick(y,z,id){
	
	var input = $('#adeFormReturn');
	input.val(meddraADR.myObject[id].adverse[y].events[z]);
}

//this is a reload function that reloads the current page since jQuery is stupid at event handling and can only apply properly formatted HTML once if it is dynamically injected into the DOM.
function refreshFunction(){
	window.location.hash = '#bodyDiagram';
    window.location.reload(true);
	
}