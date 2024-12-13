// Write a JavaScript function called gradeCalculator that takes a number as an input (representing a student's marks) and returns the grade based on the following criteria:
// If the marks are 90 or above, the grade is "A".
// If the marks are between 80 and 89 (inclusive), the grade is "B".
// If the marks are between 70 and 79 (inclusive), the grade is "C".
// If the marks are between 60 and 69 (inclusive), the grade is "D".
// If the marks are below 60, the grade is "F".
// Additionally, if the input is not a valid number or is out of the range 0-100, return "Invalid marks".

function gradeCalculator(mark) {
    if(typeof mark != "number" || mark<0 || mark >100){
        return "Invalid Input";
    }

    if(mark>=90) {
        return "Grade : A";
    }else if(mark>=80) {
        return "Grade : B";
    }else if(mark>=70) {
        return "Grade : C";
    }else if(mark>=60) {
        return "Grade : D";
    }else{
        return "Grade : F";
    }
}

console.log(gradeCalculator(0));
