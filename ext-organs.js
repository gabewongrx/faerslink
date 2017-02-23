var ext_config = {
	'ext_1':{
		'hover': '<b><u>Head</u></b><br><span style="color: yellow">Click to see list of adverse events</span><br>',//organ hover content
		'enable':true,//true/false to enable/disable this organ
		'url':'#bodyADRresults',//Goto URL
		'target':'same_window',//open link in new window:new_window, open in current window:same_window, or none for nothing.
		'name':'HEAD',
		'arrayID':2, // this is the tracking array ID for the dynamic list generation to correspond with meddra adr's.  Not the best way to track, but place keeper until server can send me JSON.
		
		'upColor':'red',//organ color when page loads
		'upOpacity':'0',// opacity of that color from 0-1 (e.g 0.3, can be 0 to hide it)
		'outlineUpColor':'red',//outline color when page loads
		'outlineUpOpacity':'0.5',// opacity of that color from 0-1 (e.g 0.3, can be 0 to hide it)

		'overColor':'#FF0000',//organ color when mouse hover
		'overOpacity':'0.3',// opacity of that color from 0-1 (e.g 0.3, can be 0 to hide it)
		'outlineOverColor':'#FF0000',//outline color when mouse hover
		'outlineOverOpacity':'1',// opacity of that color from 0-1 (e.g 0.3, can be 0 to hide it)
		
		'downColor':'#993366',//organ color when mouse clicking
		'downOpacity':'0.7',// opacity of that color from 0-1 (e.g 0.3, can be 0 to hide it)
		'outlineDownColor':'#993366',//outline color when mouse clicking
		'outlineDownOpacity':'1',// opacity of that color from 0-1 (e.g 0.3, can be 0 to hide it)
	},
	'ext_2':{
		'hover': '<b><u>Eye</u></b><br><span style="color: yellow">Click to see list of adverse events</span><br>',
		'enable':true,
		'url':'#bodyADRresults',
		'target':'same_window',
		'name':'EYE',
		'arrayID':6,

		'upColor':'#FF0000',
		'upOpacity':'0',
		'outlineUpColor':'#FF0000',
		'outlineUpOpacity':'0.5',

		'overColor':'#FF0000',
		'overOpacity':'0.3',
		'outlineOverColor':'#FF0000',
		'outlineOverOpacity':'1',
		
		'downColor':'#993366',
		'downOpacity':'0.7',
		'outlineDownColor':'#993366',
		'outlineDownOpacity':'1',
	},
	'ext_3':{
		'hover': '<b><u>Eye</u></b><br><span style="color: yellow">Click to see list of adverse events</span><br>',
		'enable':true,
		'url':'#bodyADRresults',
		'target':'same_window',
		'name':'EYE',
		'arrayID':6,

		'upColor':'#FF0000',
		'upOpacity':'0',
		'outlineUpColor':'#FF0000',
		'outlineUpOpacity':'0.5',

		'overColor':'#FF0000',
		'overOpacity':'0.3',
		'outlineOverColor':'#FF0000',
		'outlineOverOpacity':'1',
		
		'downColor':'#993366',
		'downOpacity':'0.7',
		'outlineDownColor':'#993366',
		'outlineDownOpacity':'1',
	},
	'ext_4':{
		'hover': '<b><u>Ear</u></b><br><span style="color: yellow">Click to see list of adverse events</span><br>',
		'enable':true,
		'url':'#bodyADRresults',
		'target':'same_window',
		'name':'EAR',
		'arrayID':5,

		'upColor':'#FF0000',
		'upOpacity':'0',
		'outlineUpColor':'#FF0000',
		'outlineUpOpacity':'0.5',

		'overColor':'#FF0000',
		'overOpacity':'0.3',
		'outlineOverColor':'#FF0000',
		'outlineOverOpacity':'1',
		
		'downColor':'#993366',
		'downOpacity':'0.7',
		'outlineDownColor':'#993366',
		'outlineDownOpacity':'1',
	},
	'ext_5':{
		'hover': '<b><u>Ear</u></b><br><span style="color: yellow">Click to see list of adverse events</span><br>',
		'enable':true,
		'url':'#bodyADRresults',
		'target':'same_window',
		'name':'EAR',
		'arrayID':5,

		'upColor':'#FF0000',
		'upOpacity':'0',
		'outlineUpColor':'#FF0000',
		'outlineUpOpacity':'0.5',

		'overColor':'#FF0000',
		'overOpacity':'0.3',
		'outlineOverColor':'#FF0000',
		'outlineOverOpacity':'1',
		
		'downColor':'#993366',
		'downOpacity':'0.7',
		'outlineDownColor':'#993366',
		'outlineDownOpacity':'1',
	},
	'ext_6':{
		'hover': '<b><u>Nose</u></b><br><span style="color: yellow">Click to see list of adverse events</span><br>',
		'enable':true,
		'url':'#bodyADRresults',
		'target':'same_window',
		'name':'NOSE',
		'arrayID':2, //general for now

		'upColor':'#FF0000',
		'upOpacity':'0',
		'outlineUpColor':'#FF0000',
		'outlineUpOpacity':'0.5',

		'overColor':'#FF0000',
		'overOpacity':'0.3',
		'outlineOverColor':'#FF0000',
		'outlineOverOpacity':'1',
		
		'downColor':'#993366',
		'downOpacity':'0.7',
		'outlineDownColor':'#993366',
		'outlineDownOpacity':'1',
	},
	'ext_7':{
		'hover': '<b><u>Mouth</u></b><br><span style="color: yellow">Click to see list of adverse events</span><br>',
		'enable':true,
		'url':'#bodyADRresults',
		'target':'same_window',
		'name':'MOUTH',
		'arrayID':13,

		'upColor':'#FF0000',
		'upOpacity':'0',
		'outlineUpColor':'#FF0000',
		'outlineUpOpacity':'0.5',

		'overColor':'#FF0000',
		'overOpacity':'0.3',
		'outlineOverColor':'#FF0000',
		'outlineOverOpacity':'1',
		
		'downColor':'#993366',
		'downOpacity':'0.7',
		'outlineDownColor':'#993366',
		'outlineDownOpacity':'1',
	},
	'ext_8':{
		'hover': '<b><u>Neck</u></b><br><span style="color: yellow">Click to see list of adverse events</span><br>',
		'enable':true,
		'url':'#bodyADRresults',
		'target':'same_window',
		'name':'NECK',
		'arrayID':2,

		'upColor':'#FF0000',
		'upOpacity':'0',
		'outlineUpColor':'#FF0000',
		'outlineUpOpacity':'0.5',

		'overColor':'#FF0000',
		'overOpacity':'0.3',
		'outlineOverColor':'#FF0000',
		'outlineOverOpacity':'1',
		
		'downColor':'#993366',
		'downOpacity':'0.7',
		'outlineDownColor':'#993366',
		'outlineDownOpacity':'1',
	},
	'ext_9':{
		'hover': '<b><u>Chest/Breast</u></b><br><span style="color: yellow">Click to see list of adverse events</span><br>',
		'enable':true,
		'url':'#bodyADRresults',
		'target':'same_window',
		'name':'CHEST/BREAST',
		'arrayID':20,

		'upColor':'#FF0000',
		'upOpacity':'0',
		'outlineUpColor':'#FF0000',
		'outlineUpOpacity':'0.5',

		'overColor':'#FF0000',
		'overOpacity':'0.3',
		'outlineOverColor':'#FF0000',
		'outlineOverOpacity':'1',
		
		'downColor':'#993366',
		'downOpacity':'0.7',
		'outlineDownColor':'#993366',
		'outlineDownOpacity':'1',
	},
	'ext_10':{
		'hover': '<b><u>Abdomen</u></b><br><span style="color: yellow">Click to see list of adverse events</span><br>',
		'enable':true,
		'url':'#bodyADRresults',
		'target':'same_window',
		'name':'ABDOMEN',
		'arrayID':17,

		'upColor':'#FF0000',
		'upOpacity':'0',
		'outlineUpColor':'#FF0000',
		'outlineUpOpacity':'0.5',

		'overColor':'#FF0000',
		'overOpacity':'0.3',
		'outlineOverColor':'#FF0000',
		'outlineOverOpacity':'1',
		
		'downColor':'#993366',
		'downOpacity':'0.7',
		'outlineDownColor':'#993366',
		'outlineDownOpacity':'1',
	},
	'ext_11':{
		'hover': '<b><u>Pelvis</u></b><br><span style="color: yellow">Click to see list of adverse events</span><br>',
		'enable':true,
		'url':'#bodyADRresults',
		'target':'same_window',
		'name':'PELVIS',
		'arrayID':7,

		'upColor':'#FF0000',
		'upOpacity':'0',
		'outlineUpColor':'#FF0000',
		'outlineUpOpacity':'0.5',

		'overColor':'#FF0000',
		'overOpacity':'0.3',
		'outlineOverColor':'#FF0000',
		'outlineOverOpacity':'1',
		
		'downColor':'#993366',
		'downOpacity':'0.7',
		'outlineDownColor':'#993366',
		'outlineDownOpacity':'1',
	},
	'ext_12':{
		'hover': '<b><u>Genitals</u></b><br><span style="color: yellow">Click to see list of adverse events</span><br>',
		'enable':true,
		'url':'#bodyADRresults',
		'target':'same_window',
		'name':'GENITALS',
		'arrayID':7,

		'upColor':'#FF0000',
		'upOpacity':'0',
		'outlineUpColor':'#FF0000',
		'outlineUpOpacity':'0.5',

		'overColor':'#FF0000',
		'overOpacity':'0.3',
		'outlineOverColor':'#FF0000',
		'outlineOverOpacity':'1',
		
		'downColor':'#993366',
		'downOpacity':'0.7',
		'outlineDownColor':'#993366',
		'outlineDownOpacity':'1',
	},
	'ext_13':{
		'hover': '<b><u>Blood</u></b><br><span style="color: yellow">Click to see list of adverse events</span><br>',
		'enable':true,
		'url':'#bodyADRresults',
		'target':'same_window',
		'name':'BLOOD',
		'arrayID':1,

		'upColor':'#FF0000',
		'upOpacity':'0',
		'outlineUpColor':'#FF0000',
		'outlineUpOpacity':'0.5',

		'overColor':'#FF0000',
		'overOpacity':'0.3',
		'outlineOverColor':'#FF0000',
		'outlineOverOpacity':'1',
		
		'downColor':'#993366',
		'downOpacity':'0.7',
		'outlineDownColor':'#993366',
		'outlineDownOpacity':'1',
	},
	'ext_14':{
		'hover': '<b><u>Shoulder</u></b><br><span style="color: yellow">Click to see list of adverse events</span><br>',
		'enable':true,
		'url':'#bodyADRresults',
		'target':'same_window',
		'name':'SHOULDER',
		'arrayID':2,

		'upColor':'#FF0000',
		'upOpacity':'0',
		'outlineUpColor':'#FF0000',
		'outlineUpOpacity':'0.5',

		'overColor':'#FF0000',
		'overOpacity':'0.3',
		'outlineOverColor':'#FF0000',
		'outlineOverOpacity':'1',
		
		'downColor':'#993366',
		'downOpacity':'0.7',
		'outlineDownColor':'#993366',
		'outlineDownOpacity':'1',
	},
	'ext_15':{
		'hover': '<b><u>Arm</u></b><br><span style="color: yellow">Click to see list of adverse events</span><br>',
		'enable':true,
		'url':'#bodyADRresults',
		'target':'same_window',
		'name':'ARM',
		'arrayID':2,

		'upColor':'#FF0000',
		'upOpacity':'0',
		'outlineUpColor':'#FF0000',
		'outlineUpOpacity':'0.5',

		'overColor':'#FF0000',
		'overOpacity':'0.3',
		'outlineOverColor':'#FF0000',
		'outlineOverOpacity':'1',
		
		'downColor':'#993366',
		'downOpacity':'0.7',
		'outlineDownColor':'#993366',
		'outlineDownOpacity':'1',
	},
	'ext_16':{
		'hover': '<b><u>Elbow</u></b><br><span style="color: yellow">Click to see list of adverse events</span><br>',
		'enable':true,
		'url':'#bodyADRresults',
		'target':'same_window',
		'name':'ELBOW',
		'arrayID':2,

		'upColor':'#FF0000',
		'upOpacity':'0',
		'outlineUpColor':'#FF0000',
		'outlineUpOpacity':'0.5',

		'overColor':'#FF0000',
		'overOpacity':'0.3',
		'outlineOverColor':'#FF0000',
		'outlineOverOpacity':'1',
		
		'downColor':'#993366',
		'downOpacity':'0.7',
		'outlineDownColor':'#993366',
		'outlineDownOpacity':'1',
	},
	'ext_17':{
		'hover': '<b><u>Forearm</u></b><br><span style="color: yellow">Click to see list of adverse events</span><br>',
		'enable':true,
		'url':'#bodyADRresults',
		'target':'same_window',
		'name':'FOREARM',
		'arrayID':2,

		'upColor':'#FF0000',
		'upOpacity':'0',
		'outlineUpColor':'#FF0000',
		'outlineUpOpacity':'0.5',

		'overColor':'#FF0000',
		'overOpacity':'0.3',
		'outlineOverColor':'#FF0000',
		'outlineOverOpacity':'1',
		
		'downColor':'#993366',
		'downOpacity':'0.7',
		'outlineDownColor':'#993366',
		'outlineDownOpacity':'1',
	},
	'ext_18':{
		'hover': '<b><u>Wrist</u></b><br><span style="color: yellow">Click to see list of adverse events</span><br>',
		'enable':true,
		'url':'#bodyADRresults',
		'target':'same_window',
		'name':'WRIST',
		'arrayID':2,

		'upColor':'#FF0000',
		'upOpacity':'0',
		'outlineUpColor':'#FF0000',
		'outlineUpOpacity':'0.5',

		'overColor':'#FF0000',
		'overOpacity':'0.3',
		'outlineOverColor':'#FF0000',
		'outlineOverOpacity':'1',
		
		'downColor':'#993366',
		'downOpacity':'0.7',
		'outlineDownColor':'#993366',
		'outlineDownOpacity':'1',
	},
	'ext_19':{
		'hover': '<b><u>Hand</u></b><br><span style="color: yellow">Click to see list of adverse events</span><br>',
		'enable':true,
		'url':'#bodyADRresults',
		'target':'same_window',
		'name':'HAND',
		'arrayID':2,

		'upColor':'#FF0000',
		'upOpacity':'0',
		'outlineUpColor':'#FF0000',
		'outlineUpOpacity':'0.5',

		'overColor':'#FF0000',
		'overOpacity':'0.3',
		'outlineOverColor':'#FF0000',
		'outlineOverOpacity':'1',
		
		'downColor':'#993366',
		'downOpacity':'0.7',
		'outlineDownColor':'#993366',
		'outlineDownOpacity':'1',
	},
	'ext_20':{
		'hover': '<b><u>Fingers</u></b><br><span style="color: yellow">Click to see list of adverse events</span><br>',
		'enable':true,
		'url':'#bodyADRresults',
		'target':'same_window',
		'name':'FINGERS',
		'arrayID':2,

		'upColor':'#FF0000',
		'upOpacity':'0',
		'outlineUpColor':'#FF0000',
		'outlineUpOpacity':'0.5',

		'overColor':'#FF0000',
		'overOpacity':'0.3',
		'outlineOverColor':'#FF0000',
		'outlineOverOpacity':'1',
		
		'downColor':'#993366',
		'downOpacity':'0.7',
		'outlineDownColor':'#993366',
		'outlineDownOpacity':'1',
	},
	'ext_21':{
		'hover': '<b><u>Bone</u></b><br><span style="color: yellow">Click to see list of adverse events</span><br>',
		'enable':true,
		'url':'#bodyADRresults',
		'target':'same_window',
		'name':'BONE',
		'arrayID':3,

		'upColor':'#FF0000',
		'upOpacity':'0',
		'outlineUpColor':'#FF0000',
		'outlineUpOpacity':'0.5',

		'overColor':'#FF0000',
		'overOpacity':'0.3',
		'outlineOverColor':'#FF0000',
		'outlineOverOpacity':'1',
		
		'downColor':'#993366',
		'downOpacity':'0.7',
		'outlineDownColor':'#993366',
		'outlineDownOpacity':'1',
	},
	'ext_22':{
		'hover': '<b><u>Thigh</u></b><br><span style="color: yellow">Click to see list of adverse events</span><br>',
		'enable':true,
		'url':'#bodyADRresults',
		'target':'same_window',
		'name':'THIGH',
		'arrayID':2,

		'upColor':'#FF0000',
		'upOpacity':'0',
		'outlineUpColor':'#FF0000',
		'outlineUpOpacity':'0.5',

		'overColor':'#FF0000',
		'overOpacity':'0.3',
		'outlineOverColor':'#FF0000',
		'outlineOverOpacity':'1',
		
		'downColor':'#993366',
		'downOpacity':'0.7',
		'outlineDownColor':'#993366',
		'outlineDownOpacity':'1',
	},
	'ext_23':{
		'hover': '<b><u>Knee</u></b><br><span style="color: yellow">Click to see list of adverse events</span><br>',
		'enable':true,
		'url':'#bodyADRresults',
		'target':'same_window',
		'name':'KNEE',
		'arrayID':2,

		'upColor':'#FF0000',
		'upOpacity':'0',
		'outlineUpColor':'#FF0000',
		'outlineUpOpacity':'0.5',

		'overColor':'#FF0000',
		'overOpacity':'0.3',
		'outlineOverColor':'#FF0000',
		'outlineOverOpacity':'1',
		
		'downColor':'#993366',
		'downOpacity':'0.7',
		'outlineDownColor':'#993366',
		'outlineDownOpacity':'1',
	},
	'ext_24':{
		'hover': '<b><u>Leg</u></b><br><span style="color: yellow">Click to see list of adverse events</span><br>',
		'enable':true,
		'url':'#bodyADRresults',
		'target':'same_window',
		'name':'LEG',
		'arrayID':2,

		'upColor':'#FF0000',
		'upOpacity':'0',
		'outlineUpColor':'#FF0000',
		'outlineUpOpacity':'0.5',

		'overColor':'#FF0000',
		'overOpacity':'0.3',
		'outlineOverColor':'#FF0000',
		'outlineOverOpacity':'1',
		
		'downColor':'#993366',
		'downOpacity':'0.7',
		'outlineDownColor':'#993366',
		'outlineDownOpacity':'1',
	},
	'ext_25':{
		'hover': '<b><u>Ankle</u></b><br><span style="color: yellow">Click to see list of adverse events</span><br>',
		'enable':true,
		'url':'#bodyADRresults',
		'target':'same_window',
		'name':'ANKLE',
		'arrayID':2,

		'upColor':'#FF0000',
		'upOpacity':'0',
		'outlineUpColor':'#FF0000',
		'outlineUpOpacity':'0.5',

		'overColor':'#FF0000',
		'overOpacity':'0.3',
		'outlineOverColor':'#FF0000',
		'outlineOverOpacity':'1',
		
		'downColor':'#993366',
		'downOpacity':'0.7',
		'outlineDownColor':'#993366',
		'outlineDownOpacity':'1',
	},
	'ext_26':{
		'hover': '<b><u>Foot</u></b><br><span style="color: yellow">Click to see list of adverse events</span><br>',
		'enable':true,
		'url':'#bodyADRresults',
		'target':'same_window',
		'name':'FOOT',
		'arrayID':2,

		'upColor':'#FF0000',
		'upOpacity':'0',
		'outlineUpColor':'#FF0000',
		'outlineUpOpacity':'0.5',

		'overColor':'#FF0000',
		'overOpacity':'0.3',
		'outlineOverColor':'#FF0000',
		'outlineOverOpacity':'1',
		
		'downColor':'#993366',
		'downOpacity':'0.7',
		'outlineDownColor':'#993366',
		'outlineDownOpacity':'1',
	},
	'ext_27':{
		'hover': '<b><u>Toes</u></b><br><span style="color: yellow">Click to see list of adverse events</span><br>',
		'enable':true,
		'url':'#bodyADRresults',
		'target':'same_window',
		'name':'TOES',
		'arrayID':2,

		'upColor':'#FF0000',
		'upOpacity':'0',
		'outlineUpColor':'#FF0000',
		'outlineUpOpacity':'0.5',

		'overColor':'#FF0000',
		'overOpacity':'0.3',
		'outlineOverColor':'#FF0000',
		'outlineOverOpacity':'1',
		
		'downColor':'#993366',
		'downOpacity':'0.7',
		'outlineDownColor':'#993366',
		'outlineDownOpacity':'1',
	}
}
