// DOCTYPE html
// Project: 2
// Rami Hollingsworth
// Term 1205

// Wait until the DOM is ready.
$(document).ready("DOMContentLoaded", function(){

	//getElementById Function
	function $(x){
		var theElement = $("#id");
		return theElement;
	} 
	
	//Create select field element and populate with options.
	function makeCats(){
		var formTag = $("form"),// formtag is an array of all the form tags.
			selectLi = $("#select"),
			makeSelect = $.creat("select");
			makeSelect.setAttribute("id", "groups");
		for(var i=0, j=contactGroups.length; i<j; i++){
			var makeOption = $.create("option");
			var optText = contactGroups[i];
			makeOption.setAttribute("value", optText);
			makeOption.HTML = optText;
			makeSelect.append(makeOption);
		}
		selectLi.append(makeSelect);
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
			$("#contactForm").style.display = "none";
			$("#clear").style.display = "inline";
			$("#displayLink").style.display = "none";
			$("#addNewItem").style.display = "inline";

			break;
				case "off":
			$("#contactForm").style.display = "block";
			$("#clear").style.display = "inline";
			$("#displayLink").style.display = "inline";
			$("#addNewItem").style.display = "none";
			$("#items").style.display = "none";
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
			item.group		= ["Group:", $("#groups").value];
			item.name  		= ["Name:", $("#name").value];
			item.purchased	= ["Purchase Date:", $("#purchased").value];
			item.rating		= ["Rating:", $("#rating").value];
			item.toe 		= ["Type of Electronic:", toeValue];
			item.notes		= ["Notes:", $("#notes").value];
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
		makeDiv.append(makeList);
		document.body.append(makeDiv);
		$("#items").style.display = "display";
		for(var i=0, len=localStorage.length; i<len;i++){
			var makeli 	= $.create("li");
			var linksLi = $.create("li")
			makeList.append(makeli);
			var key 	= localStorage.key(i);
			var value 	= localStorage.getItem(key);
			//Convert the String from Local Storage value back to an object by using JSON
			var obj 	= JSON.parse(value);
			var makeSubList = $.create("ul");
			makeli.append(makeSubList);
			getImage(obj.group[1], makeSubList);
			for(var n in obj){
				var makeSubli = $.create("li");
				makeSubList.append(makeSubli);
				var optSubText = obj[n][0]+" "+obj[n][1];
				makeSubli.HTML = optSubText;
				makeSubList.append(linksLi);
			}	
			makeItemLinks(localStorage.key(i), linksLi); //Create our edit and delete links for each item in local storage.
		}
	}
	
	//Get image for right catagory
	function getImage(imeName, makeSubList){
	 var imageLi = $.create("li")
	 makeSubList.append(imageLi);
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
		$(editLink).bind("click", editItem);
		return false;
		editLink.HTML = editText;
		linksLi.append(editLink);
	//add delete single item link
		var deleteLink = $.create("a");
		deleteLink.href = "#";
		deleteLink.key = key;
		var deleteText = "Delete Item";
		$(deleteLink).bind("click", deleteItem);
		return false;
		$deleteLink.HTML = deleteText;
		linksLi.append(deleteLink);
	}

		
	function editItem(){
		//Grab the data from our item from local storage.
		var value = localStorage.getItem(this.key);
		var item = JSON.parse(value);
		
		//show the form
		toggleControls("off");
		
		//populate the form fields with current localStorage values.
		$("#groups").value 	 = item.group[1];
		$("#name").value   	 = item.name[1];
		$("#purchased").value = item.purchased[1];
		$("#rating").value 	 = item.rating[1];
		var radios = document.forms[0].toe;
		for(var i=0; i<radios.length; i++){
			if(radios[i].value == "Phone" && item.toe[1] == "Phone"){
				radios[i].setAttribute("checked", "checked");
			}else if(radios[i].value == "Other" && item.toe[1] == "Other"){
				radios[i].setAttribute("checked","checked");
			}
		}
		
		$("#notes").value = item.notes[1];
		
		$(save).unbind("click", storeData);
		$("#submit").value = "Edit Item";
		var editSubmit = $("#submit");
		$(editSubmit).bind("click", validate);
		return false;
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
		var getGroup = $("#groups");
		var getName  = $("#name");
		
		
		
			errMsg.HTML= "";
			getGroup.attr = "1px solid black";
			getName.attr = "1px solid black";
		
		var messageA = [];
		if (getGroup.value === "---Do I own this Item---"){
			var groupError = "Please pick a group.";
			getGroup.attr = "1px solid red";
			messageA.push(groupError);
		}
		
		if (getName.value === ""){
			var nameError = "Please put in name for DataBase.";
			getName.attr = "1px solid red";
			messageA.push(nameError);
		}
		
		if (messageA.length >=1){
			for(var i=0, j=messageA.length; i<j; i++){
				var txt = $.create("li");
				txt.HTML = messageA[i];
				errMsg.append(txt);
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
	var displayLink = $("#displayLink");
	$(displayLink).bind("click", getData);
	return false;
	var clearLink = $("#clear");
	$(clearLink).bind("click", clearLocal);
	return false;
	var save = $("#submit");
	$(save).bind("click", storeData);
	return false;
});