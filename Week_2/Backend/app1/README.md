# App1: Simple Interest Calculator

## Overview

A command-line utility that calculates simple interest based on principal amount, rate of interest (in fraction), and time period in months. This is a beginner-friendly Node.js application demonstrating interactive CLI input using ES Modules and basic financial calculations.

## Purpose

Learn and practice:

* ES Module syntax in Node.js
* Readline (Promises API) for user input
* Async/Await usage
* Basic financial calculations
* Number formatting

---

## Features

✓ Interactive command-line interface
✓ Uses modern ES Modules (`type: "module"`)
✓ Async/Await based input handling
✓ Accurate simple interest calculation
✓ Output formatted to 2 decimal places
✓ No external dependencies

---

## Technology Stack

| Component     | Technology                           |
| ------------- | ------------------------------------ |
| Runtime       | Node.js                              |
| Module System | ES Modules (`type: "module"`)        |
| Built-in APIs | node:readline/promises, node:process |

---

## Installation

```bash
cd app1
# No dependencies required (uses built-in Node.js modules)
```

---

## Usage

### Run the Program

```bash
node app.js
```

---

### Interactive Input

The program will prompt you to enter:

1. Principal Amount

```
Enter the Principal amount: 300000
```

2. Rate of Interest (in fraction form)

For example:

* 7% → enter 0.07
* 5% → enter 0.05

```
Enter the rate of interest (in fraction): 0.07
```

3. Time in Months

```
Enter the Time in Months: 36
```

---

### Sample Output

```
Simple interest for 300000 at 0.07 for the duration 36 months is 63000.00
```

---

## Mathematical Formula Used

Since time is entered in months and rate is entered in fractional form:

```
SI = (P × R × T) / 12
```

Where:

* P = Principal amount
* R = Rate of interest (fraction form, e.g., 0.07 for 7%)
* T = Time in months

Division by 12 converts months to years.

---

## Code Explanation

### Imports

```javascript
import * as readline from "node:readline/promises";
import { stdin as input, stdout as output } from "node:process";
```

* Uses the Promise-based readline API
* Uses ES Module syntax
* Imports standard input and output streams

---

### Creating the Interface

```javascript
const rl = readline.createInterface({ input, output });
```

Creates a CLI interface for interactive input.

---

### Getting User Input

```javascript
const principal = await rl.question("Enter the Principal amount: ");
const rateOfInterest = await rl.question("Enter the rate of interest (in fraction): ");
const timeInMonths = await rl.question("Enter the Time in Months: ");
rl.close();
```

* Uses async/await for non-blocking input
* Closes the interface after input collection

---

### Calculation Logic

```javascript
let simpleInterest = (principal * rateOfInterest * timeInMonths) / 12;
```

* Uses the standard simple interest formula
* Converts months to years by dividing by 12

---

### Output Formatting

```javascript
simpleInterest.toFixed(2)
```

Ensures output is displayed with two decimal places.

---

## Example Scenarios

### Scenario 1: Standard Investment

Principal: 300000
Rate: 0.07
Time: 36 months

Result: 63000.00

---

### Scenario 2: One Year Savings

Principal: 100000
Rate: 0.05
Time: 12 months

Result: 5000.00

---

### Scenario 3: Medium Term Loan

Principal: 250000
Rate: 0.065
Time: 18 months

Result: 24375.00

---

## File Structure

```
app1/
├── app.js
├── package.json
└── README.md
```

---

## package.json Details

```json
{
  "name": "app1",
  "version": "0.1.0",
  "type": "module",
  "main": "app.js",
  "author": "Mayukh Haldar",
  "license": "GPL-3.0-or-later"
}
```

### Important Fields

* type: "module" → Enables ES Module syntax
* main → Entry point file
* No dependencies → Uses only built-in Node APIs

---

## Key Learning Points

1. ES Modules in Node.js
2. Using Promise-based readline API
3. Async/Await pattern
4. Template literals
5. CLI-based applications
6. Numeric formatting using toFixed()

---

## Future Enhancements

* Add input validation for numeric values
* Convert percentage automatically to fraction
* Add compound interest calculation
* Add menu-based interaction
* Add calculation history
* Add error handling for invalid inputs

---

## Troubleshooting

| Issue                               | Solution                                             |
| ----------------------------------- | ---------------------------------------------------- |
| "Cannot use import statement" error | Ensure `"type": "module"` is present in package.json |
| Non-numeric result                  | Enter numeric values only                            |
| Node command not found              | Install Node.js properly                             |

---

## Manual Test Cases

```bash
# Test 1
Input:
300000
0.07
36
Expected Output:
63000.00

# Test 2
Input:
100000
0.05
12
Expected Output:
5000.00

# Test 3
Input:
250000
0.065
18
Expected Output:
24375.00
```

---

## Performance Notes

* Lightweight CLI application
* No external packages
* Instant execution
* Suitable for educational purposes

---

## Author

Mayukh Haldar

---

## License

GPL-3.0-or-later

---

## References

* Node.js Readline Documentation
* ES Modules in Node.js
* Simple Interest Formula Documentation