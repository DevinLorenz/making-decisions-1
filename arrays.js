/*
    In this file, we'll be continuing our story
    with Jon being allowed to flee his fight with Jamie.
*/

// Jon, embarrassed, intends to head back to Winterfell asap. First, let's create a backpack for him so he can begin to pack his bags. Create a variable called backpack, that is equal to an empty array.

let backPack = [];

// Now, let's add some of his stuff to that backpack. Add 3 strings to the array, "sword", "shield", and "food".

backPack.push("Sword","Shield","Food");
console.log(`~Backpack Inventory: ${backPack}`)
console.log()
// Realizing that his backpack is going to be too full to add other essentials, Jon decides to take his sword out and place it on his belt. Remove this sword from the backpack.

let belt = backPack.splice(0,1,"Health-Potion")
console.log(`Jon switched his sword, Longclaw, with a Health-Potion from his belt to his backpack!`)
console.log()
console.log(`~Backpack Inventory: ${backPack}`)
console.log(`~Belt Inventory: ${belt}`)

// Now Jon decides he wants to add his fur coat to his backpack. Create a variable called furCoat and give it a string value of "fur coat". Then add that variable to the backpack.

let furCloak = 'Fur-Cloak'

backPack.unshift(furCloak)
console.log()
console.log('Jon Takes off his Fur-Cloak and places it in his backpack')
console.log()

console.log(`~Backpack Inventory: ${backPack}`)
console.log(`~Belt Inventory: ${belt}`)
console.log()


let itemCount = backPack.length-4
console.log(`-Inventory Space: ${itemCount}/10`)
// Realizing it is freezing outside, Jon decides to take the fur coat back out and put it on. Without using splice, remove the fur coat from the array.

backPack.shift()

console.log()
console.log(`~Backpack Inventory: ${backPack}`)
console.log(`~Belt Inventory: ${belt}`)
console.log()

itemCount = backPack.length
console.log(`-Inventory Space: ${itemCount - 4}/10`)

// There is currently no where near enough supplies to make the journey to Winterfell. Let's add some other essentials. Add the strings: flint, blanket, knife, and toothbrush.

backPack.push("flint","Blanket","Knife","Toothbrush")

console.log()
console.log(`~Backpack Inventory: ${backPack}`)
console.log(`~Belt Inventory: ${belt}`)
console.log()

itemCount = backPack.length
console.log(`-Inventory Space: ${itemCount - 4}/10`)
console.log()
// Realizing his bag is overflowing, Jon decides to split up his content into two bags. Create a backpack2 variable that will hold some items. Use the splice method to move the flint, blanket, and knife from backpack to backpack2

let backPack2 = backPack.splice(2,4) 
console.log(`Satchel Inventory: ${backPack2}`)   
console.log()
let itemCount2 = backPack2.length
console.log(`-Inventory Space: ${itemCount2}/10`)
//console.log(backPack2[0])
console.log()

//LOOPS

for(let i = 0 ; i < backPack.length ; i++){
    console.log(`~Backpack: ${backPack[i]}`)
}
console.log()
console.log(`-Inventory Space: ${itemCount}/10`)
console.log()
for(let p = 0 ; p < backPack2.length ; p++){
    console.log(`~Satchel: ${backPack2[p]}`)
}
console.log()
console.log(`-Inventory Space: ${itemCount2}/10`)
console.log()