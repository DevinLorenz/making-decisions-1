/*
    In this file, we'll be using variables, conditionals,
    and loops to play out a fight between Jon Snow and
    Jamie Lannister.
*/ 
// Create a variable for Jon and Jamie's attack strengths.
let jonSnowAttack = 25;
let jamieLannisterAttack = 35


if (jonSnowAttack > jamieLannisterAttack){
    console.log('Jon has a better attack than Jamie')
} else if (jamieLannisterAttack > jonSnowAttack) {
    console.log('Jamie has a better attack than Jon')
} else {
    console.log('Jon and Jamie have the same attack')
}

// Create Health and Defense for Jon.
let jonSnowHealth = 100
let jonSnowDefense = 0

console.log(`Jon Snow's Health: ${jonSnowHealth}/100`)

//Jamie attacks first - use an if/else to determine if Jon can survive the attack. if he does not, 
//'Jon Snow hasbeen slain.' otherwise console.log Jon's Health.

if (jonSnowHealth <= jamieLannisterAttack) {
    console.log('Jon Snow has been slain!')
} else {
    jonSnowHealth -= jamieLannisterAttack
    console.log(`Jon Snow's Health after attack 1: ${jonSnowHealth}/100`)
}

//Jon Picks up a shield, increase defense by 25
jonSnowDefense += 25
console.log('Jon picks up a shield!')
//Jamie attacks again. Does Jon survive? Take account to Jon's Defense
if (jonSnowHealth <= jamieLannisterAttack - jonSnowDefense){
    console.log('Jon has been slain!')
} else {
    jonSnowHealth -= (jamieLannisterAttack - jonSnowDefense)
    console.log(`Jon Snow's Health after attack 2: ${jonSnowHealth}/100`)
}

// Someone throws Jon a health potion, Jon's health maxes at 100.
if((jonSnowHealth + 50) >= 100) {
    jonSnowHealth = 100
} else {
    jonSnowHealth += 50
}
console.log('Jon drank a Health Potion!')
console.log(`Jon Snow's Health: ${jonSnowHealth}/100`)

//Jamie, realizing this might take a while to beat Jon, decides to flip a coin, 
//and if the coin lands on heads, he will aim to take Jon's head. If it lands on tails, 
//Jamie will allow Jon to run away. Create a variable called coinLandsHeads and set it equal to false. Then, 
//using an if-else statement and the equality operator, handle the value of the flipped coin 
//(handle for both true and false).
console.log(`Jamie flips a coin to see if Jon gets to live or die!`)

let coinLandsHeads = false

if (coinLandsHeads === true) {
    console.log(`The fight continues!`)
} else {
    console.log(`Jon is allowed to run away!`)
}

for-loops
create a look that shows Jamie attacking Jon 5 times. console.log jons health after each attack

for (let i = 0 ; i < 10 ; i++) {
    jonSnowHealth -= jamieLannisterAttack - jonSnowDefense
    if (jonSnowHealth <= 0) {
        console.log('Jon Snow has been slain!')
        return
    } else {     
        console.log(`Jon Snow's Health is down to ${jonSnowHealth} after Jamie attacked!`)
    }
}


// while (jonSnowHealth > 0){
//      jonSnowHealth -= (jamieLannisterAttack - jonSnowDefense)
//         console.log(`Jon Snow's Health is now at: ${jonSnowHealth}`)
//     if (jonSnowHealth <= 0){
//         console.log('Jon has been slain!')
//     }

// }
