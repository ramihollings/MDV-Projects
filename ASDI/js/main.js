// DOCTYPE html
// Project: 1
// Rami Hollingsworth
// Term 1205 

// Wait until the DOM is ready.
window.addEventListener("DOMContentLoaded", function(){

	//getElementById Function
	function dollarSign(x){
		var theElement = $("#id");
		return theElement;
	}
	
	//Create select field element and populate with options.
	function makeCats(){
		var formTag = $("form"),// formtag is an array of all the form tags.
			selectLi = dollarSign("select"),
			makeSelect = $.create("select");
			makeSelect.setAttribute("id", "groups");
		for(var i=0, j=contactGroups.length; i<j; i++){
			var makeOption = $.create("option");
			var optText = contactGroups[i];
			makeOption.setAttribute("value", optText);
			$(makeOption).HTML = optText;
			makeSelect.appendChild(makeOption);
		}
		selectLi.appendChild(makeSelect);
	}
	
	//Find value of selected radio button.
	function getSelectedRadio(){
		var radios = document.forms[0].toe;
		for(var i=0; i<radios.length; i++){
			if(radios[i].checked){
			toeValue = radios[i].value;
			}	
		}
	}
	
	function toggleControls(n){
		switch(n){
		case "on":
			$("contactForm").style.display = "none";
			dollarSign("clear").style.display = "inline";
			dollarSign("displayLink").style.display = "none";
			dollarSign("addNewItem").style.display = "inline";

			break;
				case "off":
			dollarSign("contactForm").style.display = "block";
			dollarSign("clear").style.display = "inline";
			dollarSign("displayLink").style.display = "inline";
			dollarSign("addNewItem").style.display = "none";
			dollarSign("items").style.display = "none";
			break;
				default:
			return false;
		}
	}

	function storeData(key){
		if(!key){
			var id 			= Math.floor(Math.random()*100000001);
		}else{
			id = key;
		}
		//gather all form fiel values an store in an objects
		//Object proprties contain array with the form label
		getSelectedRadio();
		var item 			= {};
			item.group		= ["Group:", dollarSign("groups").value];
			item.name  		= ["Name:", dollarSign("name").value];
			item.purchased	= ["Purchase Date:", dollarSign("purchased").value];
			item.rating		= ["Rating:", dollarSign("rating").value];
			item.toe 		= ["Type of Electronic:", toeValue];
			item.notes		= ["Notes:", dollarSign("notes").value];
		//Save data into localstorage: using Stringify to convert object to string.
		localStorage.setItem(id, JSON.stringify(item));
		alert("Item Saved!");
	}
	
	function getData(){
		toggleControls("on");
		if(localStorage.length === 0){
			alert("No data Stored. Default data added.");
			autoFillData();
		}
		//write data from loacal storage to the browser.
		var makeDiv = $.create("div");
		makeDiv.setAttribute("id", "items");
		var makeList = $.create("ul");
		makeDiv.appendChild(makeList);
		document.body.appendChild(makeDiv);
		dollarSign("items").style.display = "display";
		for(var i=0, len=localStorage.length; i<len;i++){
			var makeli 	= $.create("li");
			var linksLi = $.create("li")
			makeList.appendChild(makeli);
			var key 	= localStorage.key(i);
			var value 	= localStorage.getItem(key);
			//Convert the String from Local Storage value back to an object by using JSON
			var obj 	= JSON.parse(value);
			var makeSubList = $.create("ul");
			makeli.appendChild(makeSubList);
			getImage(obj.group[1], makeSubList);
			for(var n in obj){
				var makeSubli = $.create("li");
				makeSubList.appendChild(makeSubli);
				var optSubText = obj[n][0]+" "+obj[n][1];
				$(makeSubli).HTML = optSubText;
				makeSubList.appendChild(linksLi);
			}	
			makeItemLinks(localStorage.key(i), linksLi); //Create our edit and delete links for each item in local storage.
		}
	}
	
	//Get image for right catagory
	function getImage(imeName, makeSubList){
	 var imageLi = $.create("li")
	 makeSubList.appendChild(imageLi);
	 var newImg = $.create("img");
	 var setSrc = newImg.setAttribute("src", "images/"+ imeName + ".png");
	}
	//Auto Populate local storage.
	function autoFillData(){
		//The actual JSON Object data required for this to work is coming from our json.js file, which is loaded from our HTML page.
		// Store JSON object into local storage
		for(var n in json){
			var id = Math.floor(Math.random()*100000001);
			localStorage.setItem(id, JSON.stringify(json[n]));
			
		}
	}
	

	//Make Items Links
	//Create the edit and delete links for each stored item when displayed.
	function makeItemLinks(key, linksLi){
		var editLink = $.create("a");
		editLink.href = "#";
		editLink.key = key;
		var editText = "Edit Item";
		editLink.addEventListener("click", editItem);
		$(editLink).HTML = editText;
		linksLi.appendChild(editLink);
	//add delete single item link
		var deleteLink = $.create("a");
		deleteLink.href = "#";
		deleteLink.key = key;
		var deleteText = "Delete Item";
		deleteLink.addEventListener("click", deleteItem);
		$(deleteLink).HTML = deleteText;
		linksLi.appendChild(deleteLink);
	}

		
	function editItem(){
		//Grab the data from our item from local storage.
		var value = localStorage.getItem(this.key);
		var item = JSON.parse(value);
		
		//show the form
		toggleControls("off");
		
		//populate the form fields with current localStorage values.
		dollarSign("groups").value 	 = item.group[1];
		dollarSign("name").value   	 = item.name[1];
		dollarSign("purchased").value = item.purchased[1];
		dollarSign("rating").value 	 = item.rating[1];
		var radios = document.forms[0].toe;
		for(var i=0; i<radios.length; i++){
			if(radios[i].value == "Phone" && item.toe[1] == "Phone"){
				radios[i].setAttribute("checked", "checked");
			}else if(radios[i].value == "Other" && item.toe[1] == "Other"){
				radios[i].setAttribute("checked","checked");
			}
		}
		
		dollarSign("notes").value = item.notes[1];
		
		save.removeEventListener("click", storeData);
		dollarSign("submit").value = "Edit Item";
		var editSubmit = dollarSign("submit");
		editSubmit.addEventListener("click", validate);
		editSubmit.key = this.key;
		
		
	}
	function deleteItem(){
		var ask = confirm("Do you want to delete this item. This can not be undone.");
			if(ask){
				localStorage.removeItem(this.key);
				alert("Item Deleted");
				window.location.reload();
			}else{
				alert("Item Deleted");
			}
		
	}
		
	function clearLocal(){
		if(localStorage.length === 0){
			alert("Database Empty.");
		}else{
			localStorage.clear();
			alert("All data deleted");
			window.location.reload();
			return false;
		}
	}
	function validate(e){
		var getGroup = dollarSign("groups");
		var getName  = dollarSign("name");
		
		
		
			$(errMsg).HTML= "";
			getGroup.style.border = "1px solid black";
			getName.style.border = "1px solid black";
		
		var messageA = [];
		if (getGroup.value === "---Do I own this Item---"){
			var groupError = "Please pick a group.";
			getGroup.style.border = "1px solid red";
			messageA.push(groupError);
		}
		
		if (getName.value === ""){
			var nameError = "Please put in name for DataBase.";
			getName.style.border = "1px solid red";
			messageA.push(nameError);
		}
		
		if (messageA.length >=1){
			for(var i=0, j=messageA.length; i<j; i++){
				var txt = $.create("li");
				$(txt).HTML = messageA[i];
				errMsg.appendChild(txt);
			}
			e.preventDefault();
			return false;
		}else{
			storeData(this.key);
		}		
	}

	//Variable defaults
	var contactGroups = ["---Do I own this Item---", "I own it","I owned", "Really Want It"],
		toeValue;
	makeCats();

	//Set Links & Submit Click Events
	var displayLink = dollarSign("displayLink");
	displayLink.addEventListener("click", getData);
	var clearLink = dollarSign("clear");
	clearLink.addEventListener("click", clearLocal);
	var save = dollarSign("submit");
	save.addEventListener("click", storeData);
});