var ext_spots = {
	'spots':[
	{
		'hover': '<u><b>OTHER SYMPTOMS</b></u><br>Placeholder Text.',//the hover content of this spot
		'pos_X':200,// X position, to get the accurate value, please check the documentation folder.
		'pos_Y':100,// Y position, to get the accurate value, please check the documentation folder.
		'diameter':100,// diameter of this spot

		'upColor':'#FF0000',// normal color when the page loads
		'upOpacity':'0.2',// opacity of that color from 0-1 (e.g 0.3, can be 0 to hide it)
		'outlineUpColor':'#FF0000',// outline color of the spot when the page loads
		'outlineUpOpacity':'0.6',// opacity of the outline (e.g 0.3, can be 0 to hide it)


		'overColor':'#FF0000',// color of this spot when you hover with mouse
		'overOpacity':'0.5',// opacity of that color from 0-1 (e.g 0.3, can be 0 to hide it)
		'outlineOverColor':'#FF0000',// outline color of the spot when you hover with mouse
		'outlineOverOpacity':'1',// opacity of the outline (e.g 0.3, can be 0 to hide it)

		'downColor':'#993366',// color of this spot when you click it
		'downOpacity':'0.7',// opacity of that color from 0-1 (e.g 0.3, can be 0 to hide it)
		'outlineDownColor':'#993366',// outline color of the spot when you click it
		'outlineDownOpacity':'1',// opacity of the outline (e.g 0.3, can be 0 to hide it)

		'url':'#bodyADRresults',// go to this URL
		'name':'Other',
		'target':'same_window',//'new_window' opens URL in new window//'same_window' opens URL in the same window //'none' pin is not clickable
		'enable':true,//true/false to enable/disable this pin
		'arrayID':0,// this is the tracking array ID for the dynamic list generation to correspond with meddra adr's.  Not the best way to track, but place keeper until server can send me JSON.
	},
	{
		'hover': '<u><b>Example "A"</b></u><br>Placeholder Text.',
		'pos_X':142,
		'pos_Y':612,
		'diameter':0,//change diameter to a number to make spot appear.  Copy and paste entire object into array to make additional spots.

		'upColor':'#FF0000',
		'upOpacity':'0.2',
		'outlineUpColor':'#FF0000',
		'outlineUpOpacity':'0.6',


		'overColor':'#FF0000',
		'overOpacity':'0.5',
		'outlineOverColor':'#FF0000',
		'outlineOverOpacity':'1',

		'downColor':'#993366',
		'downOpacity':'0.7',
		'outlineDownColor':'#993366',
		'outlineDownOpacity':'1',

		'url':'#bodyADRresults',
		'target':'same_window',
		'enable':true,
	},
	]
}
