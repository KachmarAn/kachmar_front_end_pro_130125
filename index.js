// Запитати ім'я
const userName = prompt("What is your name?");
alert(`Hello, ${userName}! How are you?`);


// Запитуємо у користувача два числа
const num1 = parseFloat(prompt("Enter the first number:"));
const num2 = parseFloat(prompt("Enter the second number:"));


// Виконуємо арифметичні операції
const addition = num1 + num2;
const subtraction = num1 - num2;
const multiplication = num1 * num2;
const division = num2 !== 0 ? num1 / num2 : "Cannot divide by zero";
alert(`Results:
1. Addition: ${addition}
2. Subtraction: ${subtraction}
3. Multiplication: ${multiplication}
4. Division: ${division}`);


// Запитуємо у користувача два значення
const num3 = prompt("Enter the first value:");
const num4 = prompt("Enter the second value:");
const isEqual = num3 === num4;
alert(`${isEqual}`);


// Обчислюємо середнє арифметичне
const num5 = parseFloat(prompt("Enter the first number:"));
const num6 = parseFloat(prompt("Enter the second number:"));
const num7 = parseFloat(prompt("Enter the third number:"));
const average = (num5 + num6 + num7) / 3;
alert(`The average of the three numbers is: ${average}`);


// Запитуємо у користувача п'ятизначне число
const number = parseInt(prompt("Enter a five-digit number:"));
// Перевіряємо, чи введене число дійсно п'ятизначне
if (number >= 10000 && number <= 99999) {
    const digit1 = Math.floor(number / 10000);          // Перша цифра
    const digit2 = Math.floor((number % 10000) / 1000); // Друга цифра
    const digit3 = Math.floor((number % 1000) / 100);   // Третя цифра
    const digit4 = Math.floor((number % 100) / 10);     // Четверта цифра
    const digit5 = number % 10;                        // П'ята цифра
    alert(`Digits: ${digit1} ${digit2} ${digit3} ${digit4} ${digit5}`);
} 