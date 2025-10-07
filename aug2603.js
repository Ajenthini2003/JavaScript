// Ask the user for the time (in 24-hour format)
let time = prompt(23);

// Convert the input to a number
time = Number(time);

// Check if the input is a valid hour
if (isNaN(time) || time < 0 || time > 23) {
    console.log("Invalid time. Please enter a number between 0 and 23.");
} else {
    // Determine and display the appropriate greeting
    if (time >= 5 && time < 12) {
        console.log("Good morning");
    } else if (time >= 12 && time < 17) {
        console.log("Good afternoon");
    } else if (time >= 17 && time < 21) {
        console.log("Good evening");
    } else {
        console.log("Good night");
    }
}

