const fs = require("fs");

const entries = fs.readFileSync("./document.txt", "utf-8").split("\n");

let sum = 0;

for (const entry of entries) {
	const numbers = entry.replace(/[^\d]/g, "");
	sum += parseInt(numbers[0] + numbers[numbers.length - 1]);
}

console.log(sum);
