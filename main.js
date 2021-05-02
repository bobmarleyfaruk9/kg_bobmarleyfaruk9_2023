let arr = process.argv.slice(2);
let output = "";
let string = ""
for(let i=0; i<arr.length; i++){
    //Divide numbers into digits
    arr[i] = arr[i].split("");
    //Iterating through the digits of number
    for(let j=0; j<arr[i].length; j++){
        //Convert the input to integers since the translator funtion only recognizes integers.
        arr[i][j] = parseInt(arr[i][j]);
        //Combine output from the translator.
        string+=translator(arr[i][j]);
    }
    //Combine the strings with coma.
    output = output +","+ string;
    //Free the string for next iteration of outer loop
    string = "";
}
//Stdout (slice(1) was necessary to prevent starting with a coma).
console.log(output.slice(1));
//Translator function to translate integers to their string values.
function translator(digit){
switch (digit) {
    case 0:
       return "Zero";
    case 1:
        return "One";
    case 2:
        return "Two";
    case 3:
        return "Three";
    case 4:
        return "Four";
    case 5:
        return "Five";
    case 6:
        return "Six";
    case 7:
        return "Seven";
    case 8:
        return "Eight";
    case 9:
        return "Nine";
    // Error statement if user enters something other than integers.
    default:
        return "Error, your input is not recognized. You can only enter positive integers and 0 .";
    }
}