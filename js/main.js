/**
 * 
 */
var buttonCount=0;
var array = new Array();

window.onload=function(){
 $("#myButton").click(function(){
	 //alert("Servus");
	 hello();
 })
    
 $("#fave").click(function(){
	 //ev.preventDefault();
	 register();
	 showUp();
 })
	$("#searchSubmit").click(function () {
	// search logic here
	console.log("Search-2 aktiv")
	// this function will be executed on click of X (clear button)
	//console.log($("#search-2").val());
	search();
	})
};

function hello(i){
	//document.getElementById("test").innerHTML ="Hallo";
	array[i]="false";
    //$("#test").text(array);
    console.log("VALUE an i: " + array[i]);
    showUp();
}

function bye(i){
    //document.getElementById("test").innerHTML ="Hallo";
    array[i]="true";
    console.log("VALUE an i: " + array[i]);
    showUp();
}

function showUp(){
	var content = "<table border = 1>";
//	 content+= "<tr>"+ $("#vorname").val() + "</tr>";
	for(var i=0; i<array.length; i++){
		if(i%5==0){
			content+="<tr><td>" +array[i]+ "</td>";
		}
		else if(i%5==4){
            if(array[i]!="true"){
                content += '<td><div id="favimg' +i+ '"class="emptyBox" onclick="bye('+i+')"></div></td>';
            }
		    else if(array[i]=="true") {
			//Bild
			    content += '<td><div id="favimg' +i+' "class="starBox" onclick="hello('+i+')"></div></td>';
		}
		}
		else{
			content +="<td>" + array[i] + "</td>";
		}
		if(i%5==4){

			content +="</tr>";
		}
	}
	content += "</table>";


	$("#resulttablediv").empty();
	$("#resulttablediv").append(content);
}

function validateForm() {
    var x = document.forms["myForm"]["fname"].value;
    if (x == "") {
        alert("Name must be filled out");
        return false;
    }
}