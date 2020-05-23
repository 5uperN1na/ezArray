//Problem given by Morag

//function to sum digits of an integer.
function sumDigits(n) {
    //declare and initalize to local variable sum to 0
    var sum = 0;
    //console.log(sum);
    //turn integer into a string and store in string variable
    var string = n.toString();
    //console.log(string);

    //for loop to loop through the length of the string
    for (i = 0; i < string.length; i++) {
        //parse each character and convert back to an integer
        sum = sum + parseInt(string.substring(i, i + 1));
        //outputs each integer that is stored to 'sum' 
        console.log(sum);
    }

    return sum;

}

//function call and pass in integer value
sumDigits(111);


