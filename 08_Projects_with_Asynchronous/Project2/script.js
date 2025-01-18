// Select the Start and Stop buttons using IDs from html document and assign them to the variables startButton and stopButton 
const startButton = document.getElementById('Start');
const stopButton = document.getElementById('Stop');

// Variable to store the interval ID
let intervalID;
// this will store the id of the interval timer .. this id is used to clear the interval later


// Function to start the JavaScript series
function startSeries() {
    intervalID = setInterval(function() {
        console.log('JavaScript series running at', Date.now());
        // Add your series code here
    }, 1000);
    console.log('Started');
}

// Function to stop the JavaScript series
function stopSeries() {
    clearInterval(intervalID);
    console.log('Stopped');
}

// Add event listeners to the buttons
startButton.addEventListener('click', startSeries);
stopButton.addEventListener('click', stopSeries);
