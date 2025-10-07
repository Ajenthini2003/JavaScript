function greetByTime(time) {
    // Ask the user for the time
    

    // Use switch-case with true to evaluate ranges
    switch (time) {
        case (time >= 5 && time < 12):
            console.log("Good morning");
            break;
        case (time >= 12 && time < 17):
            console.log("Good afternoon");
            break;
        case (time >= 17 && time < 21):
            console.log("Good evening");
            break;
        default:
            console.log("Good night");
    }
}

// Call the function
greetByTime(19);
