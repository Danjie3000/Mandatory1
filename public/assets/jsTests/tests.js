
const name = Danjie; // String
const age = 33; // Number
const isCool = true; // Boolean
const x = null; // Null
const y = undefined; // Undefined

const coolDude = { firstName: 'Danjie', 
                            age: 33, 
                            isCool: true, 
                            hobbies: ['Being cool', 'wicked clothing style', 'killuminati'] /* Array */ 
                        }; // Object


// Not a Callback function.                         
function calculator(num1, num2) {
    const sum = num1 + num2;
    return sum;
}
const result = calculator(5, 5);

// Callback function
function calculator(num1, num2, callback) {
    let sum = num1 + num2;
    callback(sum);
  }
  
  calculator(5, 5);


const dudes = [
    { 
        name: 'Danjie', 
        age: 33 ,
        occupation: 'being cool'
    },

    { 
        name: 'John', 
        age: 73,
        occupation: 'being old'
    },

    { 
        name: 'Jane', 
        age: 25,
        occupation: 'being young'
    }
];

const oldDudes = dudes.filter(dudes => {
    return dudes.age >= 30; // Will return Danjie and John.
}).map(dudes => { // Since it's still an array, we can map it.
    return dudes.name; // Instead of returning the whole object, we just return the name.
});

const totalAge = dudes.reduce((total, dudes) => { // With reduce you can return anything. 
    return total + dudes.age; // It's normally used for numbers and it doesn't even have to be an array.
}, 0); // 0 here is because we want to start from 0 in the array, this means it starts from Danjie. 
