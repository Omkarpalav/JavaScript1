
const person = {
    firstName : "omkar",
    lastName : "palav",
    age : 23
}
console.log(person);

// Methods

// Object.keys(obj) : Returns an array of an object’s property names.
console.log(Object.keys(person));

// Objects.values(obj) : Returns an array of an object’s property values.
console.log(Object.values(person));

// Object.entries(obj) : Returns an array of key-value pairs.
console.log(Object.entries(person));

// Object.assign(target, source) : Copies properties from one or more objects to a target object.
const additionalInfo = {city : "New York", occupation : "Engieer"}
const updatedPerson = Object.assign({}, person, additionalInfo);
console.log(updatedPerson);

Object.freeze(person);
person.age = 40;
console.log(person.age);