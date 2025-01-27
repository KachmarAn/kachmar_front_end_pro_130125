'use strict'

// 1. Дано два різні числа. Визначити, яке з них більше, а яке менше.
let a = 10;
let b = 20;

if (a > b) {
  console.log(`${a} більше за ${b}`);
} else if (a < b) {
  console.log(`${a} менше за ${b}`);
} else {
  console.log(`${a} дорівнює ${b}`);
}

// 2. Відомі дві відстані. Одна у кілометрах, інша – у футах. Яка відстань менша?
let distanceKm = 5; // Відстань у кілометрах
let distanceFt = 10000; // Відстань у футах

// Переведення кілометрів у фути
let distanceKmInFt = distanceKm * 3280.84;

if (distanceKmInFt < distanceFt) {
  console.log("Відстань у кілометрах менша.");
} else {
  console.log("Відстань у футах менша.");
}

// 3. Чи є число `a` дільником числа `b`? І навпаки.
let a = 4;
let b = 16;

// Чи є `a` дільником `b`?
if (b % a === 0) {
  console.log(`${a} є дільником ${b}`);
} else {
  console.log(`${a} не є дільником ${b}`);
}

// Чи є `b` дільником `a`?
if (a % b === 0) {
  console.log(`${b} є дільником ${a}`);
} else {
  console.log(`${b} не є дільником ${a}`);
}

// 4. Визначити, чи закінчується число парною чи непарною цифрою. Вивести останню цифру.
let number = 123456;
// Визначаємо останню цифру
let lastDigit = number % 10;

// Перевіряємо парність
if (lastDigit % 2 === 0) {
  console.log(`Остання цифра: ${lastDigit}. Це парна цифра.`);
} else {
  console.log(`Остання цифра: ${lastDigit}. Це непарна цифра.`);
}

// 5. Дано двозначне число. Яка з його цифр більша?
let number = 47; // Двозначне число

// Виділяємо десятки та одиниці
let tens = (number / 10) | 0;
let ones = number % 10;

// Порівнюємо
if (tens > ones) {
  console.log(`Цифра ${tens} більша за ${ones}.`);
} else if (tens < ones) {
  console.log(`Цифра ${ones} більша за ${tens}.`);
} else {
  console.log(`Цифри рівні: ${tens} = ${ones}.`);
}

// 6. Сума цифр тризначного числа парна?
let number = 151; // Тризначне число

// Виділяємо сотні, десятки та одиниці
let hundreds = (number / 100) | 0;     // Цілочисельне ділення
let tens = ((number % 100) / 10) | 0;  // Цілочисельне ділення для десятків
let ones = number % 10;                // Одиниці залишаються незмінними

// Обчислюємо суму цифр
let sum = hundreds + tens + ones;

// Перевіряємо парність
if (sum % 2 === 0) {
  console.log(`Сума цифр ${sum} є парною.`);
} else {
  console.log(`Сума цифр ${sum} є непарною.`);
}

// 7. Чи кратна сума цифр п'яти?
let number = 12345; // Число
let sum = 0;

// Беремо абсолютне значення для роботи з від'ємними числами
number = Math.abs(number);

// Виділяємо цифри числа
while (number > 0) {
  sum += number % 10; // Додаємо останню цифру до суми
  number = (number - (number % 10)) / 10; // Відкидаємо останню цифру
}

// Перевіряємо кратність 5
if (sum % 5 === 0) {
  console.log(`Сума цифр ${sum} кратна 5.`);
} else {
  console.log(`Сума цифр ${sum} не кратна 5.`);
}

// 8. Чи більше добуток цифр тризначного числа за 100?
let number = 234; // Тризначне число

// Виділяємо цифри
let hundreds = (number / 100) | 0;     // Перша цифра (сотні) за допомогою побітового оператора
let tens = ((number % 100) / 10) | 0;  // Друга цифра (десятки)
let ones = number % 10;                // Одиниці (остання цифра)

// Обчислюємо добуток цифр
let product = hundreds * tens * ones;

// Перевіряємо, чи більше за 100
if (product > 100) {
  console.log(`Добуток цифр числа ${number} більший за 100.`);
} else {
  console.log(`Добуток цифр числа ${number} не більший за 100.`);
}

// 9. Чи всі цифри тризначного числа однакові?
let number = 111; // Тризначне число

// Виділяємо цифри
let hundreds = (number / 100) | 0;     // Сотні
let tens = ((number % 100) / 10) | 0;  // Десятки
let ones = number % 10;                // Одиниці

// Перевіряємо, чи всі цифри однакові
if (hundreds === tens && tens === ones) {
  console.log("Усі цифри числа однакові.");
} else {
  console.log("Цифри числа різні.");
}

// 10. Чи є серед цифр однакові?
let number = 123; // Тризначне число

// Виділяємо цифри
let hundreds = (number / 100) | 0;  // Сотні
let tens = ((number % 100) / 10) | 0; // Десятки
let ones = number % 10;             // Одиниці

// Перевірка: чи є однакові цифри
if (hundreds === tens || tens === ones || hundreds === ones) {
  console.log("Серед цифр є однакові.");
} else {
  console.log("Усі цифри різні.");
}

// 11. Чи є шестизначне число дзеркальним?
let number = 123321; // Шестизначне число

let original = number;
let reverse = 0;

// Формуємо зворотне число
while (original > 0) {
  reverse = reverse * 10 + (original % 10);
  original = Math.floor(original / 10);
}

// Перевірка: чи є число дзеркальним
if (number === reverse) {
  console.log("Число дзеркальне.");
} else {
  console.log("Число не дзеркальне.");
}
