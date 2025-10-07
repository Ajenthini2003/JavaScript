// Get the current date and time
const date = new Date();

// Get the current hour (in 24-hour format)
const hour = date.getHours();

// Decide the greeting based on the hour
if (hour >= 5 && hour < 12) {
    console.log("Good morning");
} else if (hour >= 12 && hour < 17) {
    console.log("Good afternoon");
} else if (hour >= 17 && hour < 21) {
    console.log("Good evening");
} else {
    console.log("Good night");
}
