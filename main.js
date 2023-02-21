// /* 
// Object structure: collections of things with their own context to the object
// const dog = {
//  age: 1
//  size: medium
//  color: brown
// }

// Rules: 
// -Open and closing curly braces
// -Contains keys and values separated by a colon
// -Key/value pairs are separated by a comma

// hiw to call out a value - variableContainingTheObject.keyName 
// */

// const lassie = {
//     age: 7,
//     breed: "Collie",
//     color: "White and Brown"
// }

// // dot notation
// console.log(`Lassie's breed is ${lassie.breed}`);
// // square bracket notation
// console.log(lassie["breed"])
// // variable + square bracket look-up
// const keyToLookup = "breed"
// console.log(keyToLookup)
// const lassiesBreed = lassie[keyToLookup]
// console.log(lassie[keyToLookup])

// // An array as a value
// const kennel = {
//     name: "Nashville North Kennels",
//     address: "100 Demonbreun Road",
//     manager: "Harper Frankstone",
//     capacity: 50,
//     currentAnimals: ["Jet", "Snickers", "Blue", "Jacks", "Flap", "Barnum"]
// }

// const boardedAnimals = kennel.currentAnimals

// //  QUESTION: what does 'for' mean? 
//     // for is used in loops telling code to do a task over & over so it doesn't have to be written a million times


// // console.log(`Boarded animals are ${kennel.currentAnimals}`);
// // console.log(kennel["currentAnimals"]);
// // const listOfAnimals = "currentAnimals"
// // console.log(listOfAnimals)
// // const animalsAtNashvilleNorth = kennel[listOfAnimals]
// // console.log(kennel[listOfAnimals])

// // const wardrobe = {
// //     height: 80,
// //     manufacturer: "Killibrew & Sons",
// //     contents: ["Dress shirt", "Jeans", "Suit", "Skirt", "Tennis shoes"],
// //     depth: 38,
// //     width: 50
// // }

// // // Another way to add
// // wardrobe.material = "Cedar"

console.log(`The wardrobe height is ${wardrobe.height}`);
console.log(`The wardrobe manufacturer is ${wardrobe.manufacturer}`);
console.log(`The wardrobe contains ${wardrobe.contents}`);
console.log(`The wardrobe depth is ${wardrobe.depth}`);
console.log(`The wardrobe width is ${wardrobe.width}`);

console.log(wardrobe)

const empireStateBuilding = {
    stories: 103,
    height: 1453,
    address: "350 Fifth Avenue, Manhattan, New York 10118",
    squareFeet: 2768591,
    constructionDate: 1931,
    cost: 40948900,
    owner: "Empire State Realty Trust",
    eastWestLength: 424,
    northSouthLength: 187,
    architect: "Shreve, Lamb & Harmon"
}

console.log(empireStateBuilding);
console.log(`The empire state building dimensions are: ${empireStateBuilding.height}, ${empireStateBuilding.squareFeet}`);
// QUESTION: Is whats printed supposed to have the value names as well? 

console.log(empireStateBuilding.stories)
console.log(empireStateBuilding.height)
console.log(empireStateBuilding.squareFeet)
console.log(empireStateBuilding.eastWestLength)
console.log(empireStateBuilding.northSouthLength)

let buildingInfoA = "address"
let buildingInfoB = "constructionDate"
let buildingInfoC = "cost"
let buildingInfoD = "owner"
let buildingInfoE = "architect"

console.log(empireStateBuilding[buildingInfoA])
console.log(empireStateBuilding[buildingInfoB])
console.log(empireStateBuilding[buildingInfoC])
console.log(empireStateBuilding[buildingInfoD])
console.log(empireStateBuilding[buildingInfoE])

const nashvilleSoftwareSchool = {
    founded: 2012,
    director: "John Wark",
    instructors: {
        fullTime: ["Jisie", "Brenda", "Steve", "Joe", "Andy"],
        partTime: ["Zoe", "Nathan"]
    },
    address: "500 Interstate Blvd. S"
}
// Output part-time instructors followed by the full-time instructors in the terminal
let employees = nashvilleSoftwareSchool["instructors"]
console.log(employees)

let fullTimeEmployees = employees["fullTime"]
console.log(fullTimeEmployees)

let partTimeEmployees = employees["partTime"]
console.log(partTimeEmployees)

// Output only Andy and Zoe in the terminal.

const fullTimeAndy = fullTimeEmployees[4]
const partTimeZoe = partTimeEmployees[0]
console.log(fullTimeEmployees[4])
console.log(partTimeEmployees[0])