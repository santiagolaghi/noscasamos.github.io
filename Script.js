// Define the target date
const targetDate = new Date("April 5, 2025 00:00:00").getTime();

// Update the countdown every 10 milliseconds
const countdownInterval = setInterval(function() {
  // Get the current date and time
  const now = new Date().getTime();

  // Calculate the remaining time
  const distance = targetDate - now;

  // Calculate years, months, weeks, days, hours, minutes, seconds, and milliseconds remaining
  const years = Math.floor(distance / (1000 * 60 * 60 * 24 * 365));
  const months = Math.floor((distance % (1000 * 60 * 60 * 24 * 365)) / (1000 * 60 * 60 * 24 * 30));
  const weeks = Math.floor((distance % (1000 * 60 * 60 * 24 * 30)) / (1000 * 60 * 60 * 24 * 7));
  const days = Math.floor((distance % (1000 * 60 * 60 * 24 * 7)) / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);
  const milliseconds = Math.floor((distance % 1000) / 10); // Reducing to two digits

  // Display the countdown
  document.getElementById("years").innerText = years;
  document.getElementById("months").innerText = months;
  document.getElementById("weeks").innerText = weeks;
  document.getElementById("days").innerText = days;
  document.getElementById("hours").innerText = hours;
  document.getElementById("minutes").innerText = minutes;
  document.getElementById("seconds").innerText = seconds;
  document.getElementById("milliseconds").innerText = milliseconds;

  // If the countdown is finished, display a message
  if (distance < 0) {
    clearInterval(countdownInterval);
    document.getElementById("timer").innerHTML = "<h2>¡Ha llegado el día!</h2>";
  }
}, 10);

