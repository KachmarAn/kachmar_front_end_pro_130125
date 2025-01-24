
// 1. Дано два різні числа. Визначити, яке з них більше, а яке менше.
function compareNumbers(a, b) {
    if (a > b) {
        console.log(`${a} більше, ${b} менше`);
    } else {
        console.log(`${b} більше, ${a} менше`);
    }
}

// 2. Відомі дві відстані. Одна у кілометрах, інша – у футах. Яка відстань менша?
function compareDistances(kilometers, feet) {
    const feetToKilometers = feet * 0.305 / 1000;
    if (kilometers < feetToKilometers) {
        console.log('Відстань у кілометрах менша');
    } else {
        console.log('Відстань у футах менша');
    }
}

// 3. Чи є число `a` дільником числа `b`? І навпаки.
function checkDivisors(a, b) {
    console.log(a % b === 0 ? `${a} є дільником ${b}` : `${a} не є дільником ${b}`);
    console.log(b % a === 0 ? `${b} є дільником ${a}` : `${b} не є дільником ${a}`);
}

// 4. Визначити, чи закінчується число парною чи непарною цифрою. Вивести останню цифру.
function checkLastDigit(number) {
    const lastDigit = number % 10;
    console.log(`Остання цифра: ${lastDigit}`);
    console.log(lastDigit % 2 === 0 ? 'Парна' : 'Непарна');
}

// 5. Дано двозначне число. Яка з його цифр більша?
function compareTwoDigitNumber(number) {
    const tens = Math.floor(number / 10);
    const ones = number % 10;
    console.log(tens > ones ? 'Перша цифра більша' : 'Друга цифра більша');
}

// 6. Сума цифр тризначного числа парна?
function isSumEven(number) {
    const digits = String(number).split('').map(Number);
    const sum = digits.reduce((a, b) => a + b, 0);
    console.log(sum % 2 === 0 ? 'Сума цифр парна' : 'Сума цифр непарна');
}

// 7. Чи кратна сума цифр п'яти?
function isSumDivisibleByFive(number) {
    const digits = String(number).split('').map(Number);
    const sum = digits.reduce((a, b) => a + b, 0);
    console.log(sum % 5 === 0 ? 'Сума цифр кратна п’яти' : 'Сума цифр не кратна п’яти');
}

// 8. Чи більше добуток цифр тризначного числа за 100?
function isProductGreaterThan100(number) {
    const digits = String(number).split('').map(Number);
    const product = digits.reduce((a, b) => a * b, 1);
    console.log(product > 100 ? 'Добуток більше 100' : 'Добуток не більше 100');
}

// 9. Чи всі цифри тризначного числа однакові?
function areAllDigitsSame(number) {
    const digits = String(number).split('');
    const allSame = digits.every(digit => digit === digits[0]);
    console.log(allSame ? 'Усі цифри однакові' : 'Цифри не однакові');
}

// 10. Чи є серед цифр однакові?
function hasSameDigits(number) {
    const digits = String(number).split('');
    const uniqueDigits = new Set(digits);
    console.log(uniqueDigits.size < digits.length ? 'Є однакові цифри' : 'Немає однакових цифр');
}

// 11. Чи є шестизначне число дзеркальним?
function isPalindrome(number) {
    const str = String(number);
    const reversedStr = str.split('').reverse().join('');
    console.log(str === reversedStr ? 'Число дзеркальне' : 'Число не дзеркальне');
}


//Тестуйте функції, передаючи їм відповідні числа. Наприклад:

compareNumbers(5, 10);
compareDistances(3, 10000);
checkDivisors(4, 16);
checkLastDigit(123);
compareTwoDigitNumber(45);
isSumEven(123);
isSumDivisibleByFive(145);
isProductGreaterThan100(234);
areAllDigitsSame(333);
hasSameDigits(112);
isPalindrome(123321);

