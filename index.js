let hours = prompt("Введіть кількість годин:");

if (!isNaN(hours) && hours > 0) {
 
    let seconds = hours * 3600;
  
    alert(`У ${hours} годинах міститься ${seconds} секунд.`);
} else {
  alert("Будь ласка, введіть коректне число годин.");
}
