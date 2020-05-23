
//Problem given by EZ

//mergeArrays function
function mergeArrays(arrayA, arrayB) {

    //take the values of arrayB with the spread operator and use .push to push onto arrayA
    arrayA.push(...arrayB)

    //console log the updated arrayA values
    console.log(`New Array '\A' = ` + arrayA);
 
    //outter loop to loop through index length of arrayA
    for (i = 0; i < arrayA.length; i++) {

        //inner loop to loop through arrayA indexes and compare index values to each other
        for (j = i + 1; j < arrayA.length; j++) {
            //arrayA comparison
            if (arrayA[i] > arrayA[j]) {
                temp = arrayA[i];
                arrayA[i] = arrayA[j];
                arrayA[j] = temp;
            }
        }
    }
    //console.log that new, sorted arrayA
    console.log(`Sorted Array '\A' = ` + arrayA);
}

//function call and pass values of arrayA and arrayB
mergeArrays([16, 17, 18, 19], [10, 11, 12, 13, 14, 15]);
mergeArrays(['d', 'e', 'f'], ['a', 'b', 'c']);

 













