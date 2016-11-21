/**
 * 
 */
var buttonCount=0;
var forename = new Array();
var pobarray = [];
var dobarray = [];
var ckarray  = [];

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
};

function hello(){
	//document.getElementById("test").innerHTML ="Hallo";
	$("#test").text("New Text");
}

function register(){
	this.buttonCount++;
	arrayInput();
	//$("#test").text(("#vorname").val());
	//showUp();
}

function arrayInput(){
 forename.push($("#vorname").val());
 pobarray.push($("#pob").val());
 dobarray.push($("#dob").val());
 ckarray.push($("#checkbox").val());
 
}

function showUp(){
	var content = "<table>";
	 content+= "<tr>"+ $("#vorname").val() + "</tr>"
	
	
	
	/**
		content += "<tr>";
		for(i=0; i<forename.length; i++){
			content += "<td>" + forname[i] +"</td>";
		}
		content += "</tr>";
		
		content += "<tr>";
		for(j=0; j<forename.length; j++){
			content += "<td>" + pobarray[j] +"</td>";
		}
		content += "</tr>";
		
		content += "<tr>";
		for(k=0; k<forename.length; k++){
			content += "<td>" + dobarray[k] +"</td>";
		}
		content += "</tr>";
		
		content += "<tr>";
		for(l=0; l<forename.length; l++){
			content += "<td>" + ckarray[l] +"</td>";
		}
		content += "</tr>";
		**/
	content += "</table>";
	$("#resulttablediv").append(content);
}

function validateForm() {
    var x = document.forms["myForm"]["fname"].value;
    if (x == "") {
        alert("Name must be filled out");
        return false;
    }
}