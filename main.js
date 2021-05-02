let arr = process.argv.slice(2);
let output = "";
let string = ""
for(let i=0; i<arr.length; i++){
    num = arr[i];
    num = parseInt(num);

    while(num >= 1){

        last_digit = num%10;
        num = (num/10)-(last_digit/10);
        string=translator(last_digit)+string;

    }
    output = output +","+ string;
    string = "";
}
console.log(output.slice(1));
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
    
    }
}
