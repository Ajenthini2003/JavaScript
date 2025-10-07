//write a program that ask the time
//if time is between 5-12 "good morning"
//if time i s between 12-17 "good afternoon"
//if time i s between 17-21 "good evening"
//otherwise print"good night"






// Ask the user for the current hour
let timeInput = prompt("23");
let hour = parseInt(timeInput);

// Validate input
if (isNaN(hour) || hour < 0 || hour > 23) {
  alert("Invalid input. Please enter a number between 0 and 23.");
} else {
  // Use switch with true to simulate range conditions
  switch (true) {
    case (hour >= 5 && hour < 12):
      return("Good morning");
      break;
    case (hour >= 17 && hour < 21):
      return("Good evening");
      break;
    default:
      return("Good night");
  }
}
