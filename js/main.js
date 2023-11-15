//==========Exercise #1 ===========//
/*
Write a function that parses through the below object and displays all of their
favorite food dishes as shown:
*/

let person3 = {
    pizza:["Deep Dish","South Side Thin Crust"],
    tacos:"Anything not from Taco bell",
    burgers:"Portillos Burgers",
    ice_cream:["Chocolate","Vanilla","Oreo"],
    shakes:[{
        oberwise:"Chocolate",
        dunkin:"Vanilla",
        culvers:"All of them",
        mcDonalds:"Sham-rock-shake",
        cupids_candies:"Chocolate Malt"
    }]
}

function displayFavoriteFoods(person) {
    const favoriteFoods = [];

    for (const key in person) {
        if (Array.isArray(person[key])) {
        
            favoriteFoods.push(person[key].join(", "));
        } else if (typeof person[key] === "object") {
            for (const subKey in person[key]) {
                favoriteFoods.push(person[key][subKey]);
            }
        } else {
            favoriteFoods.push(person[key]);
        }
    }

    const result = favoriteFoods.join("\n");

    console.log(result);
}

displayFavoriteFoods(person3);



//=======Exercise #2=========//
/*
Write an object prototype for a Person that has a name and age, has a
printInfo method, and also has a method that 
increments the persons age by 1 each time the method is called.
Create two people using the 'new' keyword, and print 
both of their infos and increment one persons
age by 3 years. Use an arrow function for both methods
*/

// Create our Person Prototype
function Person(name, age) {
    this.name = name;
    this.age = age;
}

Person.prototype.printInfo = function() {
    console.log(`Name: ${this.name}`);
    console.log(`Age: ${this.age}`);
};


Person.prototype.addAge = function(years) {
    this.age += years;
};

// Create two people 
const person1 = new Person("John", 30);
const person2 = new Person("Jane", 25);

// Print both persons infos
console.log("Person 1 Info:");
person1.printInfo();
console.log("\nPerson 2 Info:");
person2.printInfo();

person1.addAge(3);

console.log("\nPerson 1 Info (After Age Increment):");
person1.printInfo();

// =============Exercise #3 ============//
/*

    Create a Promised based function that will check a string to determine if it's length is greater than 10.
    If the length is greater than ten console log "Big word". 
    If the length of the string is less than 10 console log "Small Number"
*/

function checkStringLength(str) {
    return new Promise((resolve, reject) => {
        if (str.length > 10) {
            resolve("Big word");
        } else {
            reject("Small Number");
        }
    });
}

// Example usage:
checkStringLength("Hello, World!")
    .then((message) => {
        console.log(message);
    })
    .catch((error) => {
        console.error(error);
    });
