// ==========================
// Part 1: Date Display
// ==========================

// TODO:
// 1. Create a Date object
var today = new Date();


// 2. Get the current month, day, and year
var month = today.getMonth() + 1;   // 3. Adjust month if needed (JavaScript months are 0-based)
var day = today.getDate();
var year = today.getFullYear();

// 4. Add leading zeros to month/day if needed
var monthFormatted = month < 10 ? "0" + month : month;
var dayFormatted = day < 10 ? "0" + day : day;

// 5. Create a string in the format: "Today is MM/DD/YYYY"
var dateMessage = "Today is " + monthFormatted + "/" + dayFormatted + "/" + year;


// 6. Display the result in the element with id="dateOutput"
document.getElementById("dateOutput").textContent = dateMessage;


// ==========================
// Part 2: Number Conversion
// ==========================

// TODO:
// 1. Create at least 4 separate variables:
var value1 = "9"; // at least 2 numeric strings (example: "42")
var value4 = "16";
var value2 = "07.27"; // at least 1 decimal string (example: "19.75")
var value3 = "hello"; // at least 1 non-numeric string (example: "hello")

// TODO:
// 2. For EACH variable:

var converted1 = Number(value1); // a. Convert the value using Number()
var converted2 = Number(value2);
var converted3 = Number(value3);
var converted4 = Number(value4);

var isNaN1 = Number.isNaN(converted1); // b. Check if it is NaN using Number.isNaN()
var isNaN2 = Number.isNaN(converted2);
var isNaN3 = Number.isNaN(converted3);
var isNaN4 = Number.isNaN(converted4);

var isInt1 = Number.isInteger(converted1); // c. Check if it is an integer using Number.isInteger()
var isInt2 = Number.isInteger(converted2);
var isInt3 = Number.isInteger(converted3);
var isInt4 = Number.isInteger(converted4);


// TODO:
// 3. For EACH value, create a sentence showing:
// original value, converted value,  whether it is NaN,  whether it is an integer

var result1 = "Original: '" + value1 + "' → Converted: " + converted1 + " → isNaN: " + isNaN1 + " → isInteger: " + isInt1;
var result2 = "Original: '" + value2 + "' → Converted: " + converted2 + " → isNaN: " + isNaN2 + " → isInteger: " + isInt2;
var result3 = "Original: '" + value3 + "' → Converted: " + converted3 + " → isNaN: " + isNaN3 + " → isInteger: " + isInt3;
var result4 = "Original: '" + value4 + "' → Converted: " + converted4 + " → isNaN: " + isNaN4 + " → isInteger: " + isInt4;


// TODO:
// 4. Combine all your results into ONE string,you can use + to join multiple strings)
var allResults = result1 + "<br>" + result2 + "<br>" + result3 + "<br>" + result4;

// TODO:
// 5. Display the final result inside the element: id="numberConversionOutput"
document.getElementById("numberConversionOutput").innerHTML = allResults;


// ==========================
// Part 3: Math & Formatting
// ==========================

// TODO:
// 1. Create at least 2-3 numeric variables
var playerKills = 24;
var playerDeaths = 6;
var playerAssists = 10;
//
// 2. Perform calculations:
var totalScore = playerKills + playerAssists; // at least one addition
var kdRatio = playerKills / playerDeaths; // at least one other operation (subtract multiply, or divide)

// 3. Use at least ONE of the following:
var kdFormatted = kdRatio.toFixed(2); // toFixed()


// 4. Build a string showing your results
var mathResults = "Kills: " + playerKills +
                  "<br>Deaths: " + playerDeaths +
                  "<br>Assists: " + playerAssists +
                  "<br>Total Score (Kills + Assists): " + totalScore +
                  "<br>K/D Ratio: " + kdFormatted;

// 5. Display the results inside the element with id="mathOutput"
document.getElementById("mathOutput").innerHTML = mathResults;


// ==========================
// Part 4: Conditionals
// ==========================

// TODO:
// 1. Write at least TWO if/else statements

// check if a value is NaN
if (Number.isNaN(converted3)) {
    var nanMessage = "'" + value3 + "' is not a valid number.";
} else {
    var nanMessage = "'" + value3 + "' is a valid number.";
}

// check if ratio is good or needs improvement
if (kdRatio >= 1) {
    var kdMessage = "K/D Ratio of " + kdFormatted + " — GG :)";
} else {
    var kdMessage = "K/D Ratio of " + kdFormatted + " — FF now :(";
}


// 2. Display a message on the page based on the condition (append it to an existing section or create a new message)
document.getElementById("mathOutput").innerHTML += "<br>" + nanMessage;
document.getElementById("mathOutput").innerHTML += "<br>" + kdMessage;