// Function to display the time in 12-hour format with AM/PM
function updateClock() {
    const clockElement = document.getElementById('clock');
    const now = new Date();

    let hours = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();
    let ampm = hours >= 12 ? 'PM' : 'AM';

    // Convert to 12-hour format
    hours = hours % 12;
    hours = hours ? hours : 12; // the hour '0' should be '12'
    minutes = minutes < 10 ? '0' + minutes : minutes;
    seconds = seconds < 10 ? '0' + seconds : seconds;

    const timeString = hours + ':' + minutes + ':' + seconds + ' ' + ampm;
    clockElement.textContent = timeString;
}

// Update clock every second
setInterval(updateClock, 1000);

// Initialize the clock
updateClock();