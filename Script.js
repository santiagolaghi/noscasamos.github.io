// Define the target date
const targetDate = new Date("April 5, 2025 00:00:00").getTime();

// Update the countdown every second
const countdownInterval = setInterval(function() {
  // Get the current date and time
  const now = new Date().getTime();

  // Calculate the remaining time
  const distance = targetDate - now;

  // Calculate days, hours, minutes and seconds remaining
  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Display the countdown
  document.getElementById("days").innerText = days;
  document.getElementById("hours").innerText = hours;
  document.getElementById("minutes").innerText = minutes;
  document.getElementById("seconds").innerText = seconds;

  // If the countdown is finished, display a message
  if (distance < 0) {
    clearInterval(countdownInterval);
    document.getElementById("timer").innerHTML = "<h2>¡Ha llegado el día!</h2>";
  }
}, 1000);
