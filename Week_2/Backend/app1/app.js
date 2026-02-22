// Simple Interest Calculator

// principal=3_00_000;
// timeInMonths=36;
// rateOfInterest=0.07;
// simpleInterest=(principal*rateOfInterest*timeInMonths) / 12;

// console.log(`Simple Interest for ${principal} at ${rateOfInterest*100} for the duration of ${timeInMonths} month is ${simpleInterest}`);

import * as readline from "node:readline/promises";
import { stdin as input, stdout as output } from "node:process";

const rl = readline.createInterface({ input, output });

const principal = await rl.question("Enter the Principal amount: ");
const rateOfInterest = await rl.question("Enter the rate of interest (in fraction): ");
const timeInMonths = await rl.question("Enter the Time in Months: ");
rl.close();

let simpleInterest = (principal * rateOfInterest * timeInMonths) / 12;

console.log(
  `Simple interest for ${principal} at ${rateOfInterest} for the duration ${timeInMonths} months is ${simpleInterest.toFixed(2)}`,
);