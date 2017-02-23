
//javacript runs when html document finishes loading
$(document).ready(function(){
    var api = 'https://api.fda.gov/drug/event.json?search=patient.drug.medicinalproduct:"';
	var reactionCountSuffix ='"&count=patient.reaction.reactionmeddrapt.exact';
	var reactionOutcomeSuffix ='"&count=patient.reaction.reactionoutcome';
	var reactionDateSuffix='"+AND+receivedate:[20040101+TO+20170101]&count=receivedate';
	var ageSuffix ='"&count=patient.patientagegroup';
	var sexSuffix='"&count=patient.patientsex';
	var api2 = 'https://api.fda.gov/drug/label.json?search=openfda.brand_name:"';
	
	
	
	
	
	//searches when the button with div id "button" is clicked
	$("#button").click(function(){
		document.getElementById("defaultOpen").click();
		executeSearch();
	});
	
	$('#drugForm2').keypress(function(e){
        if(e.which == 13){//Enter key pressed
            $('#button').click();//Trigger search button click event
        }
    });
	
	$('#adeForm2').keypress(function(e){
        if(e.which == 13){//Enter key pressed
            $('#button').click();//Trigger search button click event
        }
    });
	
	
	
	//search function
     function executeSearch(){
        var drugSearch = $('input[name=drugItem]').val();
		var adeSearch = $('input[name=adeItem]').val();
		var graphChoice =  $('input[name=graphChoice]').val();
		
		adeSearch = adeSearch.toUpperCase();
		
		//All final URLs sent to FDA for JSON data
		var url = api + drugSearch + reactionCountSuffix;
		var infoUrl = api2 +drugSearch+'"';
		var outcomeUrl = api + drugSearch + reactionOutcomeSuffix;
		var dateUrl = api + drugSearch + reactionDateSuffix;
		var ageUrl = api + drugSearch + ageSuffix;
		var sexUrl = api + drugSearch + sexSuffix;
		var similarUrl= api + drugSearch +'"+AND+patient.reaction.reactionmeddrapt:"'+adeSearch+ reactionCountSuffix;
		
		//html table display string variables
		var display = '<form>Filter Terms:<input id="filterTable-input" data-type="search"></form><table data-role="table" id="adr-table" data-filter="true" data-input="#filterTable-input" class="ui-responsive"><tr class="header"><thead><th>Adverse Event</th><th>Number Reported</th><th>Percent Reported</th></tr></thead><tbody id="#filterRow">';
		var foundDisplay ="";
		var similarDisplay = '<form>Filter Terms:<input id="filterFoundForm" data-type="search"></form><table id="similarTable"><tr><thead><th>Adverse Event</th><th>Number Reported</th></tr></thead><tbody>';
		
		//All arrays to store JSON data
		var adeArray=[],adeCount=[], outcomeArray=[],outcomeCount=[], startDate=[], ageArray=[], ageCount=[], sexArray=[], sexCount=[];
		var dateCount=[["2004",0],["2005",0],["2006",0],["2007",0],["2008",0],["2009",0],["2010",0],["2011",0],["2012",0],["2013",0],["2014",0],["2015",0],["2016",0],["2017",0]];
			
		
		var totalADE=0,totalOutcome=0;
		
		//displays DRUG NAME
			document.getElementById("title").innerHTML = "<h1>"+drugSearch.toUpperCase()+"</h1>";
		
		//Store ADR Outcome JSON Data
		$.getJSON(outcomeUrl,function(result){
			for (var i in result.results) {
					
					if(result.results[i].term===1)
						outcomeArray[i] = "RECOVERED/RESOLVED";
					if(result.results[i].term===2)
						outcomeArray[i] = "RECOVERING/RESOLVING";
					if(result.results[i].term===3)
						outcomeArray[i] = "NOT RECOVERED/NOT RESOLVED";
					if(result.results[i].term===4)
						outcomeArray[i] = "RESOLVED WITH CONSEQUENT HEALTH ISSUES";
					if(result.results[i].term===5)
						outcomeArray[i] = "FATAL";
					if(result.results[i].term===6)
						outcomeArray[i] = "UNKNOWN";
					outcomeCount[i] = result.results[i].count;
					totalOutcome += result.results[i].count
				}
		});
		
		//gets ADE count JSON data and returns it as nested objects in the *result* variable
		$.getJSON( url, function(result){
            
					
			//store ADR JSON in javascript arrays
			for (var i in result.results) {
				adeArray[i] = result.results[i].term;
				adeCount[i] = result.results[i].count;
				totalADE += result.results[i].count
			}
			
						
			//CHART
			// Load the Visualization API and the corechart package.
			google.charts.load('current', {'packages':['corechart','line']});
	
			// Set a callback to run when the Google Visualization API is loaded.
			google.charts.setOnLoadCallback(drawADEChart);
			google.charts.setOnLoadCallback(drawOutcomeChart);
			
			// Callback that creates and populates a data table, instantiates the pie chart, passes in the data and draws it.
			function drawADEChart() {

			// Create the top 5 ADE pie graph.
			var data = new google.visualization.DataTable();
			data.addColumn('string', 'Adverse Event');
			data.addColumn('number', 'Number');
			data.addRows([
				[adeArray[0], adeCount[0]],
				[adeArray[1], adeCount[1]],
				[adeArray[2], adeCount[2]],
				[adeArray[3], adeCount[3]],
				[adeArray[4], adeCount[4]]
			]);

			// Set chart options
			var options = {'title':'Distribution of Top 5 Adverse Events',
						   'width':450,
						   'height':330,
						   'chartArea':{left:20,top:20,width:'100%',height:'100%'}
						   };

			// Instantiate and draw our chart, passing in some options.
			var chart = new google.visualization.PieChart(document.getElementById('adeGraph'));
			chart.draw(data, options);
		  }
		  
		  //draws Outcomes pie graph
		  function drawOutcomeChart() {

			// Create the data table.
			var data = new google.visualization.DataTable();
			data.addColumn('string', 'Adverse Event Outcome');
			data.addColumn('number', 'Number');
			data.addRows([
				[outcomeArray[0], outcomeCount[0]],
				[outcomeArray[1], outcomeCount[1]],
				[outcomeArray[2], outcomeCount[2]],
				[outcomeArray[3], outcomeCount[3]],
				[outcomeArray[4], outcomeCount[4]],
				[outcomeArray[5], outcomeCount[5]]
			]);

			// Set chart options
			var options = {'title':'Outcome of Adverse Events',
						   'width':450,
						   'height':330,
						   'chartArea':{left:20,top:20,width:'100%',height:'100%'}
						   };

			// Instantiate and draw our chart, passing in some options.
			var chart = new google.visualization.PieChart(document.getElementById('outcomeGraph'));
			chart.draw(data, options);
		  }
				
						
			//HTML TABLES	
			// This loops through the entire JSON object and puts it into an HTML table.
			for (var i in result.results) {
				var adePercent =result.results[i].count/totalADE *100;
				
				//this snippet is if the optional ADR input matches. Creates HTML table with match.
				if(adeSearch.includes(result.results[i].term)){
					foundDisplay='</br>Found ADR match:</br><table><th>Adverse Event</th><th>Number Reported</th><th>Percent Reported</th></tr><tr><td>' + result.results[i].term + "</td><td>" +result.results[i].count +"</td><td>" +adePercent.toFixed(2) +'%</td></table></br>';
				}
				
				display += "<tr><td>" + result.results[i].term + "</td>" + "<td>" +result.results[i].count +"</td>"+ "<td>" +adePercent.toFixed(2) +"%</td>";
						
			}
				display +="</tbody></table></br>Total Reported: "+totalADE;
				
			if(foundDisplay==="")
			{
				foundDisplay = "<p>No exact match ADR found in top 100 (or none inputted).<\p>";
			}
				
			//displays in div 's matchADE and adeTable
			//$(foundDisplay).replaceAll("#exactMatch");
			//$(display).replaceAll("#adeTable").trigger("create");
			
			document.getElementById("exactMatch").innerHTML = foundDisplay;
			document.getElementById("adeTable").innerHTML = display;
			
									
			});
		
		//DRUG INFO
		$.getJSON( infoUrl, function(result){
			var testing="";
					
			testing+=result.results[0].description;
			
			document.getElementById("drugInfo").innerHTML = testing;
		});
		
		
		
		//Creates a table using SIMILAR results
		$.getJSON( similarUrl, function(result){
			if(adeSearch!=""){
				for (var i in result.results) {
					similarDisplay += "<tr><td>" + result.results[i].term + "</td>" + "<td>" +result.results[i].count +"</td>";
					
					//Exact match for similar terms
				    if(adeSearch.includes(result.results[i].term))
						foundDisplay="</br>Found ADR match:</br><table><tr><th>Adverse Event</th><th>Number Reported</th></tr><tr><td>" + result.results[i].term + "</td>" + "<td>" +result.results[i].count +"</td></table></br>";
			}
				
				similarDisplay +="</tbody></table>";
			}
			if(adeSearch==="")
			{
				similarDisplay= "<p>No similar terms found (or none inputted).</p>";
			}
			
			//displays in div 's matchADE and adeTable
			
			//$(foundDisplay).replaceAll("#exactMatch").trigger("create");
			//$(similarDisplay).replaceAll("#similarTable").trigger("create");
			document.getElementById("exactMatch").innerHTML = foundDisplay;
			document.getElementById("similarTable").innerHTML = similarDisplay;
										
		});
		
		
		
		//Store ADR Date JSON Data and create graph of reported events by YEAR
		$.getJSON(dateUrl,function(result){
			
			//Populates a multidimensional array with the ADE counts corresponding to years 2004-2017
			for(var date=0;date<14;date++){
				for (var i in result.results) {
					
					var tester = result.results[i].time.substring(0,4);
					
					if(tester===dateCount[date][0])
						dateCount[date][1] += result.results[i].count;;
				}
			}		
			
			
			
			google.charts.load('current', {packages: ['corechart', 'line']});
			google.charts.setOnLoadCallback(drawDateChart);

			function drawDateChart() {
				  var data = new google.visualization.DataTable();
				  data.addColumn('string', 'Year');
				  data.addColumn('number', 'Adverse Events Reported');
				
				
				  for(var date=0;date<14;date++){
					  if(dateCount[date][1]!=0)
						data.addRows([[dateCount[date][0],dateCount[date][1]]]);
						
					}
								  
				  
				 var options = {
					title: 'Adverse Events Reported by Year',
					hAxis: {
					  title: 'Year'
					},
					vAxis: {
					  title: 'Adverse Event Count'
					},
					'chartArea':{width:'50%',height:'30%'},
					'width':950,
					'height':300
				  };

				  var chart = new google.visualization.AreaChart(document.getElementById('dateGraph'));
				  chart.draw(data, options);
			}
		
		
		});
		
		//Draws age bar graph
		$.getJSON(ageUrl,function(result){
			for (var i in result.results) {
					
					if(result.results[i].term===1)
						ageArray[i] = "NEONATE";
					if(result.results[i].term===2)
						ageArray[i] = "INFANT";
					if(result.results[i].term===3)
						ageArray[i] = "CHILD";
					if(result.results[i].term===4)
						ageArray[i] = "ADOLESCENT";
					if(result.results[i].term===5)
						ageArray[i] = "ADULT";
					if(result.results[i].term===6)
						ageArray[i] = "ELDERLY";
					ageCount[i] = result.results[i].count;
					
			}
			google.charts.load('current', {packages: ['corechart', 'bar']});
			google.charts.setOnLoadCallback(drawAgeChart);
			
			function drawAgeChart() {
			
			var data = google.visualization.arrayToDataTable([
				['Age Group','ADR Count'],
				[ageArray[0], ageCount[0]],
				[ageArray[1], ageCount[1]],
				[ageArray[2], ageCount[2]],
				[ageArray[3], ageCount[3]],
				[ageArray[4], ageCount[4]],
				[ageArray[5], ageCount[5]]
			  ]);

			  var options = {
				title: 'Adverse Events by Age Group',
				chartArea: {width: '50%'},
				hAxis: {
				  title: 'Number of Adverse Events',
				  minValue: 0
				},
				vAxis: {
				  title: 'Age Group'
				},
					'chartArea':{width:'40%',height:'50%'},
					'width':450,
					'height':300
			  };

			  var chart = new google.visualization.BarChart(document.getElementById('ageGraph'));

			  chart.draw(data, options);
					
		 }
		 
		 //Draws Gender bar graph
		 $.getJSON(sexUrl,function(result){
			for (var i in result.results) {
					
					if(result.results[i].term===0)
						sexArray[i] = "UNKNOWN";
					if(result.results[i].term===1)
						sexArray[i] = "MALE";
					if(result.results[i].term===2)
						sexArray[i] = "FEMALE";
					sexCount[i] = result.results[i].count;
					
			}
			google.charts.load('current', {packages: ['corechart', 'bar']});
			google.charts.setOnLoadCallback(drawSexChart);
			
			function drawSexChart() {
			
			var data = google.visualization.arrayToDataTable([
				['Gender','ADR Count'],
				[sexArray[0], sexCount[0]],
				[sexArray[1], sexCount[1]],
				[sexArray[2], sexCount[2]]
				
			  ]);

			  var options = {
				title: 'Adverse Events by Gender',
				chartArea: {width: '50%'},
				hAxis: {
				  title: 'Number of Adverse Events',
				  minValue: 0
				},
				vAxis: {
				  title: 'Gender'
				},
					'chartArea':{width:'40%',height:'50%'},
					'width':450,
					'height':300
			  };

			  var chart = new google.visualization.BarChart(document.getElementById('sexGraph'));

			  chart.draw(data, options);
					
			}
		 });
		});
		
	}	

	//Filter function for the table
	$(document).on('keyup', '#filterTable-input', function(){
	var $rows = $('#adr-table tbody tr');

	var val = '^(?=.*\\b' + $.trim($(this).val()).split(/\s+/).join('\\b)(?=.*\\b') + ').*$',
			reg = RegExp(val, 'i'),
			text;
		
		$rows.show().filter(function() {
			text = $(this).text().replace(/\s+/g, ' ');
			return !reg.test(text);
		}).hide();


	});	

		//Filter function for the Found table
	$(document).on('keyup', '#filterFoundForm', function(){
	var $rows = $('#similarTable tbody tr');

	var val = '^(?=.*\\b' + $.trim($(this).val()).split(/\s+/).join('\\b)(?=.*\\b') + ').*$',
			reg = RegExp(val, 'i'),
			text;
		
		$rows.show().filter(function() {
			text = $(this).text().replace(/\s+/g, ' ');
			return !reg.test(text);
		}).hide();


	});	
	
	
 });
