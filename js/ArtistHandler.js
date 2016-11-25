/**
 * Artist Array Processing
*/

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

function search() {
    var success=false;
    var searchString=$("#search-2").val();
    var resultString=" Perfect match: \n";
    console.log("search function active");
    console.log(searchString);
    for (var i=0;i<array.length;i++){
        console.log("Array value: " + array[i]);
        //search by name - only by name.
        if(i%5==1 && array[i]==searchString) {
            resultString+= "ID: "+ array[i-1] + ", Name: " + array[i] + ", Pob: " + array[i+1]+ ", Dob: "+ array[i+2] +" \n";
            success=true;
        }
    }
    if(success=false){
     console.log("false no findings");
    }
    else{
        //Ausnahme: Keine main.js Methode zur Aktualisierung des Frontends. - nur ein alert.
        alert(resultString);
    }
}