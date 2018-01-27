function numValidation() {
    var x;

    // Get the value of the input field with id="number"
    x = document.getElementById("number").value;

    // If x is Not a Number or less than one or greater than 10
    if (isNaN(x) || x < 1 || x > 10) {
        document.getElementById("number").style.color = "red";
    } 
}