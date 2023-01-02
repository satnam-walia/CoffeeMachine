// Use "input()" to input a line from the user
// Use "input(str)" to print some text before requesting input
// You will need this in the following stages
const input = require('sync-input')

let coffeeMachine = {
	water: 400,
	milk:540,
	beans:120,
	money:550,
	cups:9,
	choice:String
}
let coffeeIngredients = [{'water': 250, 'milk': 0, 'beans': 16, 'cost': 4},
	{'water': 350, 'milk': 75, 'beans': 20, 'cost': 7},
	{'water': 200, 'milk': 100, 'beans': 12, 'cost': 6}];

function coffeeMachineStatus() {
	console.log("The coffee machine has:")
	console.log(`${coffeeMachine.water} ml of water`);
	console.log(`${coffeeMachine.milk} ml of milk`);
	console.log(`${coffeeMachine.beans} g of coffee beans`);
	console.log(`${coffeeMachine.cups} disposable cups`);
	console.log(`$${coffeeMachine.money} of money`)
}
function makeCoffee(){
	console.log("Starting to make a coffee");
	console.log("Grinding coffee beans");
	console.log("Boiling water");
	console.log("Mixing boiled water with crushed coffee beans");
	console.log("Pouring coffee into the cup");
	console.log("Pouring some milk into the cup");
	console.log("Coffee is ready!");
}

function buy(){
	let option = input("\nWhat do you want to buy? 1 - espresso, 2 - latte, 3 - cappuccino, back - to main menu:");
	if (option != "back") {
		option -= 1;
		if (coffeeMachine.water < coffeeIngredients[option].water) {
			console.log("Sorry, not enough water!");
		} else if (coffeeMachine.milk < coffeeIngredients[option].milk) {
			console.log("Sorry, not enough milk!");
		} else if (coffeeMachine.beans < coffeeIngredients[option].beans) {
			console.log("Sorry, not enough coffee beans!");
		} else if (coffeeMachine.cups < coffeeIngredients[option].cups) {
			console.log("Sorry, not enough cups!");
		} else {
			coffeeMachine.water -= coffeeIngredients[option].water;
			coffeeMachine.milk -= coffeeIngredients[option].milk;
			coffeeMachine.beans -= coffeeIngredients[option].beans;
			coffeeMachine.money += coffeeIngredients[option].cost;
			coffeeMachine.cups -= 1;
		}
	}
}

function fill() {
	coffeeMachine.water += parseInt(input("Write how many ml of water you want to add:\n"));
	coffeeMachine.milk += parseInt(input("Write how many ml of milk you want to add:\n"));
	coffeeMachine.beans += parseInt(input("Write how many grams of coffee beans you want to add:\n"));
	coffeeMachine.cups += parseInt(input("Write how many disposable coffee cups you want to add:\n"));
}

function take() {
	console.log(`I gave you ${coffeeMachine.money}\n`);
	coffeeMachine.money = 0;
}

for(;;){
	let order = input(`\nWrite action (buy, fill, take, remaining, exit):`);
	if(order === "exit") break;
	switch(order){
		case "buy":
			buy();
			makeCoffee();
			break;
		case "fill":
			fill();
			break;
		case "take":
			take();
			break;
		case "remaining":
			coffeeMachineStatus();
			break;
	}
};
