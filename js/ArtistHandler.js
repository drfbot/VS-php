/**
 * 

$("#searchSubmit").on('search', function () {
    // search logic here
    console.log("Search-2 aktiv")
    // this function will be executed on click of X (clear button)
    console.log($("#search-2").val());
    search($("#search-2").val());
});
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
        alert(resultString);
    }
}