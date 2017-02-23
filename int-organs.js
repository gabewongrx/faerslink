var int_config = {
	'int_1':{
		'hover': '<b><u>Brain</u></b><br><span style="color: yellow">Click to see list of adverse events</span><br>',//organ hover content
		'enable':true,//true/false to enable/disable this organ
		'url':'#bodyADRresults',//Goto URL
		'target':'same_window',//open link in new window:new_window, open in current window:same_window, or none for nothing.
		'name':'BRAIN',
		'arrayID':4,// this is the tracking array ID for the dynamic list generation to correspond with meddra adr's.  Not the best way to track, but place keeper until server can send me JSON.
		
		'upColor':'red',//organ color when page loads
		'upOpacity':'0',// opacity of that color from 0-1 (e.g 0.3, can be 0 to hide it)
		'outlineUpColor':'red',//outline color when page loads
		'outlineUpOpacity':'0.2',// opacity of that color from 0-1 (e.g 0.3, can be 0 to hide it)

		'overColor':'#FF0000',//organ color when mouse hover
		'overOpacity':'0.6',// opacity of that color from 0-1 (e.g 0.3, can be 0 to hide it)
		'outlineOverColor':'#FF0000',//outline color when mouse hover
		'outlineOverOpacity':'1',// opacity of that color from 0-1 (e.g 0.3, can be 0 to hide it)
		
		'downColor':'#993366',//organ color when mouse clicking
		'downOpacity':'0.7',// opacity of that color from 0-1 (e.g 0.3, can be 0 to hide it)
		'outlineDownColor':'#993366',//outline color when mouse clicking
		'outlineDownOpacity':'1',// opacity of that color from 0-1 (e.g 0.3, can be 0 to hide it)
	},
	'int_2':{
		'hover': '<b><u>Larynx</u></b><br><span style="color: yellow">Click to see list of adverse events</span><br>',
		'enable':true,
		'url':'#bodyADRresults',
		'target':'same_window',
		'name':'LARYNX',
		'arrayID':2,

		'upColor':'#FF0000',
		'upOpacity':'0',
		'outlineUpColor':'#FF0000',
		'outlineUpOpacity':'0.2',

		'overColor':'#FF0000',
		'overOpacity':'0.6',
		'outlineOverColor':'#FF0000',
		'outlineOverOpacity':'1',
		
		'downColor':'#993366',
		'downOpacity':'0.7',
		'outlineDownColor':'#993366',
		'outlineDownOpacity':'1',
	},
	'int_3':{
		'hover': '<b><u>Thyroid</u></b><br><span style="color: yellow">Click to see list of adverse events</span><br>',
		'enable':true,
		'url':'#bodyADRresults',
		'target':'same_window',
		'name':'THYROID',
		'arrayID':19,

		'upColor':'#FF0000',
		'upOpacity':'0',
		'outlineUpColor':'#FF0000',
		'outlineUpOpacity':'0.2',

		'overColor':'#FF0000',
		'overOpacity':'0.6',
		'outlineOverColor':'#FF0000',
		'outlineOverOpacity':'1',
		
		'downColor':'#993366',
		'downOpacity':'0.7',
		'outlineDownColor':'#993366',
		'outlineDownOpacity':'1',
	},
	'int_4':{
		'hover': '<b><u>Trachea</u></b><br><span style="color: yellow">Click to see list of adverse events</span><br>',
		'enable':true,
		'url':'#bodyADRresults',
		'target':'same_window',
		'name':'TRACHEA',
		'arrayID':12,

		'upColor':'#FF0000',
		'upOpacity':'0',
		'outlineUpColor':'#FF0000',
		'outlineUpOpacity':'0.2',

		'overColor':'#FF0000',
		'overOpacity':'0.6',
		'outlineOverColor':'#FF0000',
		'outlineOverOpacity':'1',
		
		'downColor':'#993366',
		'downOpacity':'0.7',
		'outlineDownColor':'#993366',
		'outlineDownOpacity':'1',
	},
	'int_5':{
		'hover': '<b><u>Lungs</u></b><br><span style="color: yellow">Click to see list of adverse events</span><br>',
		'enable':true,
		'url':'#bodyADRresults',
		'target':'same_window',
		'name':'LUNGS',
		'arrayID':12,

		'upColor':'#FF0000',
		'upOpacity':'0',
		'outlineUpColor':'#FF0000',
		'outlineUpOpacity':'0.2',

		'overColor':'#FF0000',
		'overOpacity':'0.6',
		'outlineOverColor':'#FF0000',
		'outlineOverOpacity':'1',
		
		'downColor':'#993366',
		'downOpacity':'0.7',
		'outlineDownColor':'#993366',
		'outlineDownOpacity':'1',
	},
	'int_6':{
		'hover': '<b><u>Stomach</u></b><br><span style="color: yellow">Click to see list of adverse events</span><br>',
		'enable':true,
		'url':'#bodyADRresults',
		'target':'same_window',
		'name':'STOMACH',
		'arrayID':18,

		'upColor':'#FF0000',
		'upOpacity':'0',
		'outlineUpColor':'#FF0000',
		'outlineUpOpacity':'0.2',

		'overColor':'#FF0000',
		'overOpacity':'0.6',
		'outlineOverColor':'#FF0000',
		'outlineOverOpacity':'1',
		
		'downColor':'#993366',
		'downOpacity':'0.7',
		'outlineDownColor':'#993366',
		'outlineDownOpacity':'1',
	},
	'int_7':{
		'hover': '<b><u>Heart</u></b><br><span style="color: yellow">Click to see list of adverse events</span><br>',
		'enable':true,
		'url':'#bodyADRresults',
		'target':'same_window',
		'name':'HEART',
		'arrayID':8,

		'upColor':'#FF0000',
		'upOpacity':'0',
		'outlineUpColor':'#FF0000',
		'outlineUpOpacity':'0.2',

		'overColor':'#FF0000',
		'overOpacity':'0.6',
		'outlineOverColor':'#FF0000',
		'outlineOverOpacity':'1',
		
		'downColor':'#993366',
		'downOpacity':'0.7',
		'outlineDownColor':'#993366',
		'outlineDownOpacity':'1',
	},
	'int_8':{
		'hover': '<b><u>Spleen</u></b><br><span style="color: yellow">Click to see list of adverse events</span><br>',
		'enable':true,
		'url':'#bodyADRresults',
		'target':'same_window',
		'name':'SPLEEN',
		'arrayID':11,

		'upColor':'#FF0000',
		'upOpacity':'0',
		'outlineUpColor':'#FF0000',
		'outlineUpOpacity':'0.2',

		'overColor':'#FF0000',
		'overOpacity':'0.6',
		'outlineOverColor':'#FF0000',
		'outlineOverOpacity':'1',
		
		'downColor':'#993366',
		'downOpacity':'0.7',
		'outlineDownColor':'#993366',
		'outlineDownOpacity':'1',
	},
	'int_9':{
		'hover': '<b><u>Liver</u></b><br><span style="color: yellow">Click to see list of adverse events</span><br>',
		'enable':true,
		'url':'#bodyADRresults',
		'target':'same_window',
		'name':'LIVER',
		'arrayID':11,

		'upColor':'#FF0000',
		'upOpacity':'0',
		'outlineUpColor':'#FF0000',
		'outlineUpOpacity':'0.2',

		'overColor':'#FF0000',
		'overOpacity':'0.6',
		'outlineOverColor':'#FF0000',
		'outlineOverOpacity':'1',
		
		'downColor':'#993366',
		'downOpacity':'0.7',
		'outlineDownColor':'#993366',
		'outlineDownOpacity':'1',
	},
	'int_10':{
		'hover': '<b><u>Colon - Large Intestine</u></b><br><span style="color: yellow">Click to see list of adverse events</span><br>',
		'enable':true,
		'url':'#bodyADRresults',
		'target':'same_window',
		'name':'COLON',
		'arrayID':10,

		'upColor':'#FF0000',
		'upOpacity':'0',
		'outlineUpColor':'#FF0000',
		'outlineUpOpacity':'0.2',

		'overColor':'#FF0000',
		'overOpacity':'0.6',
		'outlineOverColor':'#FF0000',
		'outlineOverOpacity':'1',
		
		'downColor':'#993366',
		'downOpacity':'0.7',
		'outlineDownColor':'#993366',
		'outlineDownOpacity':'1',
	},
	'int_11':{
		'hover': '<b><u>Small Intestine</u></b><br><span style="color: yellow">Click to see list of adverse events</span><br>',
		'enable':true,
		'url':'#bodyADRresults',
		'target':'same_window',
		'name':'SMALL INTESTINE',
		'arrayID':18,

		'upColor':'#FF0000',
		'upOpacity':'0',
		'outlineUpColor':'#FF0000',
		'outlineUpOpacity':'0.2',

		'overColor':'#FF0000',
		'overOpacity':'0.6',
		'outlineOverColor':'#FF0000',
		'outlineOverOpacity':'1',
		
		'downColor':'#993366',
		'downOpacity':'0.7',
		'outlineDownColor':'#993366',
		'outlineDownOpacity':'1',
	}
}
