//

$(document).ready(function() {
 
 $("#phpData").click(function(){
	
	$.ajax({
		type: "POST",
		url: "xml/list.php",
		data: "item1",
		dataType: "json",
		success: function (response){
			console.log(response);
		}
	});
	return false;
 });	

 $("#xmlData").click(function(){
 
 	$.ajax({
 		type:"GET",
 		url: xml/list.xml,
 		dataType: "xml",
 		success: list.parsXML
 	
 	});
 });
});

