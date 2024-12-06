
// primitive datatype

//  7 Type of primitive datatype : string, number, boolean, null, undefine, symbol, bigInt

let str = "hello"
console.log(typeof str, str);

let num = 12345;
console.log(typeof num, num);

let bool = false;
console.log(typeof bool, bool);

let nullValue = null;
console.log( typeof nullValue, nullValue);

let score;
console.log(typeof score, score);

let id = Symbol('2345');
let anotherId = Symbol('2345');
console.log(id === anotherId);

let number = 1246536450987856087067456904n;
console.log(typeof number, number);


// Reference (Non-Primtive)
// array, object, function 

let arr1 = [2,34,6,78,98];
console.log(typeof arr1, arr1);

let obj2 = {name:"omkar",age:23}
console.log(typeof obj2, obj2);

const myfun= function(){

}
console.log(typeof myfun , myfun);

