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
};

function hello(i){
	//document.getElementById("test").innerHTML ="Hallo";
	array[i]="false";
    $("#test").text(array);
    console.log("VALUE an i: " + array[i]);
    showUp();
}

function bye(i){
    //document.getElementById("test").innerHTML ="Hallo";
    array[i]="true";
    console.log("VALUE an i: " + array[i]);
    showUp();
}

function register(){
	this.buttonCount++;
	arrayInput();
	//$("#test").text(("#vorname").val());
	//showUp();
}

function arrayInput(){
	array.push(buttonCount);
	array.push($("#vorname").val());
 	array.push($("#pob").val());
	array.push($("#dob").val());
 	array.push($("#checkbox:checked").val());
    console.log("CHECKBOX: "+ $("#checkbox:checked").val());
    console.log("VALUE: " + array[array.length-1]);
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

	$("#resulttablediv").empty();
	$("#resulttablediv").append(content);
	$("#resulttablediv").append();
}

function validateForm() {
    var x = document.forms["myForm"]["fname"].value;
    if (x == "") {
        alert("Name must be filled out");
        return false;
    }
}