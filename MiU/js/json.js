// DOCTYPE html
// Project: Web App Part 4
// Rami Hollingsworth
// Term 0112



var json = {
	"item1": {
		"group": ["Group:", "Own"],
		"name": ["Name of Electronic:", "Samsung Galaxy S2"],
		"purchased": ["Purchase Date", "2011-09-10"],
		"rating": ["Rating", "5"],
		"toe": ["Type of Electronic", "Phone"], 
		"notes": ["Notes", "Bad Reception"]
	},
	"item2": {
		"group": ["Group:", "Owned"],
		"name": ["Name of Electronic:", "Samsung Galaxy S1"],
		"purchased": ["Purchase Date", "2011-02-10"],
		"rating": ["Rating", "3"],
		"toe": ["Type of Electronic", "Phone"], 
		"notes": ["Notes", "Small Screen"]
	},
	"item3": {
		"group": ["Group:", "Own"],
		"name": ["Name of Electronic:", "Samsung Galaxy Nexus"],
		"purchased": ["Purchase Date", "2011-12-25"],
		"rating": ["Rating", "5"],
		"toe": ["Type of Electronic", "Phone"], 
		"notes": ["Notes", "Perfect phone even on Verizon"]
	},
	"item4": {
		"group": ["Group:", "Owned"],
		"name": ["Name of Electronic:", "iPhone"],
		"purchased": ["Purchase Date", "2005-01-11"],
		"rating": ["Rating", "3"],
		"toe": ["Type of Electronic", "Phone"], 
		"notes": ["Notes", "Glorified MP3 player"]
	},
	"item5": {
		"group": ["Group:", "Owned"],
		"name": ["Name of Electronic:", "iPod Touch Gen3"],
		"purchased": ["Purchase Date", "2010-02-16"],
		"rating": ["Rating", "4"],
		"toe": ["Type of Electronic", "Other"], 
		"notes": ["Notes", "Best MP3 of all Time"]
	},
	"item6": {
		"group": ["Group:", "Owned"],
		"name": ["Name of Electronic:", "iPhone 4"],
		"purchased": ["Purchase Date", "2010-09-17"],
		"rating": ["Rating", "4"],
		"toe": ["Type of Electronic", "Phone"], 
		"notes": ["Notes", "Great phone but you don't need it if you have an iPad."]
	},
	"item7": {
		"group": ["Group:", "Owned"],
		"name": ["Name of Electronic:", "Evo 4G"],
		"purchased": ["Purchase Date", "2009-05-10"],
		"rating": ["Rating", "4"],
		"toe": ["Type of Electronic", "Phone"], 
		"notes": ["Notes", "First 4g Phone"]
	},
	"item8": {
		"group": ["Group:", "Want"],
		"name": ["Name of Electronic:", "Samsung Galaxy Note"],
		"purchased": ["Purchase Date", "2012-05-10"],
		"rating": ["Rating", "3"],
		"toe": ["Type of Electronic", "Phone"], 
		"notes": ["Notes", "Large Screen"]
	},
	"item9": {
		"group": ["Group:", "Want"],
		"name": ["Name of Electronic:", "Nokia 910"],
		"purchased": ["Purchase Date", "2012-12-25"],
		"rating": ["Rating", "3"],
		"toe": ["Type of Electronic", "Phone"], 
		"notes": ["Notes", "Windows Phone"]
	},
	"item10": {
		"group": ["Group:", "Own"],
		"name": ["Name of Electronic:", "iPad2"],
		"purchased": ["Purchase Date", "2011-08-24"],
		"rating": ["Rating", "5"],
		"toe": ["Type of Electronic", "Other"], 
		"notes": ["Notes", "Best Tablet so far"]
	},
	"item11": {
		"group": ["Group:", "Owned"],
		"name": ["Name of Electronic:", "Samsung Galaxy Tab"],
		"purchased": ["Purchase Date", "2011-09-10"],
		"rating": ["Rating", "4"],
		"toe": ["Type of Electronic", "Other"], 
		"notes": ["Notes", "Very Slow"]
	},
	"item12": {
		"group": ["Group:", "Own"],
		"name": ["Name of Electronic:", "HTC Flyer"],
		"purchased": ["Purchase Date", "2011-12-20"],
		"rating": ["Rating", "4"],
		"toe": ["Type of Electronic", "Other"], 
		"notes": ["Notes", "Slow but has a Digital Pen"]
	},
	"item13": {
		"group": ["Group:", "Owned"],
		"name": ["Name of Electronic:", "Motorola Atrix"],
		"purchased": ["Purchase Date", "2010-12-20"],
		"rating": ["Rating", "5"],
		"toe": ["Type of Electronic", "Phone"], 
		"notes": ["Notes", "Super Phone. Screen to small"]
	},
	"item14": {
		"group": ["Group:", "Own"],
		"name": ["Name of Electronic:", "HTC Sensation 4g"],
		"purchased": ["Purchase Date", "2011-02-10"],
		"rating": ["Rating", "4"],
		"toe": ["Type of Electronic", "Phone"], 
		"notes": ["Notes", "Wife's Phone"]
	},
	"item15": {
		"group": ["Group:", "Owned"],
		"name": ["Name of Electronic:", "Sony Xperia"],
		"purchased": ["Purchase Date", "2008-12-25"],
		"rating": ["Rating", "1"],
		"toe": ["Type of Electronic", "Phone"], 
		"notes": ["Notes", "Sony makes horrible phones"]
	},
	"item16": {
		"group": ["Group:", "Owned"],
		"name": ["Name of Electronic:", "LG 2974"],
		"purchased": ["Purchase Date", "2006-09-10"],
		"rating": ["Rating", "5"],
		"toe": ["Type of Electronic", "Phone"], 
		"notes": ["Notes", "Korean phone with Video Talk.Last phone in Korea."]
	},
	"item17": {
		"group": ["Group:", "Own"],
		"name": ["Name of Electronic:", "Motorola ACTV "],
		"purchased": ["Purchase Date", "2011-11-26"],
		"rating": ["Rating", "5"],
		"toe": ["Type of Electronic", "Other"], 
		"notes": ["Notes", "BLACK FRIDAY… Best smart watch and sport watch.Hack to run full Android 2.3"]
	},
	"item18": {
		"group": ["Group:", "Own"],
		"name": ["Name of Electronic:", "MacBook Pro"],
		"purchased": ["Purchase Date", "2011-06-10"],
		"rating": ["Rating", "5"],
		"toe": ["Type of Electronic", "Other"], 
		"notes": ["Notes", "I will never go back to PC"]
	},
	"item19": {
		"group": ["Group:", "Owned"],
		"name": ["Name of Electronic:", "iPod Nano 5GEN"],
		"purchased": ["Purchase Date", "20011-01-13"],
		"rating": ["Rating", "4"],
		"toe": ["Type of Electronic", "Other"], 
		"notes": ["Notes", "First Smart watch"]
	},
	"ite20": {
		"group": ["Group:", "Owned"],
		"name": ["Name of Electronic:", "Nook Color"],
		"purchased": ["Purchase Date", "2010-12-16"],
		"rating": ["Rating", "2"],
		"toe": ["Type of Electronic", "Other"], 
		"notes": ["Notes", "Poor quality Tablet"]
	},
	"item21": {
		"group": ["Group:", "Want"],
		"name": ["Name of Electronic:", "PadPhone"],
		"purchased": ["Purchase Date", "2012-09-17"],
		"rating": ["Rating", "3"],
		"toe": ["Type of Electronic", "Phone"], 
		"notes": ["Notes", "Phone and Tablet all in one."]
	}

}