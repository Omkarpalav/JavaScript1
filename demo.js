// Write a function called numberClassifier that takes a number as input and classifies it based on the following rules:
// If the number is positive, return "Positive".
// If the number is negative, return "Negative".
// If the number is zero, return "Zero".
// If the input is not a number, return "Invalid input".\\

function numberClassifier(number) {
    if(typeof number!== "number"){
        return "Invalid Input";
    }

    if(number>0) {
        return "Postive Number";
    }else if(number<0) {
        return "Negative Number";
    }else{
        return "Zero";
    }
}

console.log(numberClassifier(19));