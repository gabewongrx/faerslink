var int_spots = {
	//to create more spots, just copy and paste one object in the array.
	'spots':[
	{
		'hover': '<u><b>Kidney</b></u><br>Click to see Adverse Events.',//the hover content of this hotspot
		'pos_X':480,// X position, to get the accurate value, please check the documentation folder.
		'pos_Y':600,// Y position, to get the accurate value, please check the documentation folder.
		'diameter':40,// diameter of this spot
		'arrayID': 9,// this is the tracking array ID for the dynamic list generation to correspond with meddra adr's.  Not the best way to track, but place keeper until server can send me JSON.

		'upColor':'#FF0000',// normal color when the page loads
		'upOpacity':'0.7',// opacity of that color from 0-1 (e.g 0.3, can be 0 to hide it)
		'outlineUpColor':'yellow',// outline color of the spot when the page loads
		'outlineUpOpacity':'0.9',// opacity of the outline (e.g 0.3, can be 0 to hide it)


		'overColor':'#FF0000',// color of this spot when you hover with mouse
		'overOpacity':'0.5',// opacity of that color from 0-1 (e.g 0.3, can be 0 to hide it)
		'outlineOverColor':'#FF0000',// outline color of the spot when you hover with mouse
		'outlineOverOpacity':'1',// opacity of the outline (e.g 0.3, can be 0 to hide it)

		'downColor':'#993366',// color of this spot when you click it
		'downOpacity':'0.7',// opacity of that color from 0-1 (e.g 0.3, can be 0 to hide it)
		'outlineDownColor':'#993366',// outline color of the spot when you click it
		'outlineDownOpacity':'1',// opacity of the outline (e.g 0.3, can be 0 to hide it)

		'url':'#bodyADRresults',// go to this URL
		'target':'same_window',//'new_window' opens URL in new window//'same_window' opens URL in the same window //'none' pin is not clickable
		'enable':true,//true/false to enable/disable this pin
	},
	]
}
