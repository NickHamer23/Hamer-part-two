let petEnergy = 0;
let petHappiness = 0;

let petName = prompt("What is your Pet's name?");

for (let i = 0; i < 6; i++) {
   let action = prompt("Which would you like to do?: Feed, Walk, or Pet").toLowerCase();
   if (action === "feed") {
       petEnergy += 2;  
   }
    else if (action === "walk") {
        if (petEnergy === 0){
            alert("Not enough energy to enjoy a walk");
        }
        else{
            petHappiness += 2;
            petEnergy -= 1;
        }
    }
    else if (action === "pet") {
        petHappiness += 1;
    }
    else {
        alert("Invalid action!");
        i -= 1
    }      
}
console.log(petName + " has " + petHappiness + " happiness and " + petEnergy + " energy");