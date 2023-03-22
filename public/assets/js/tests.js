
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