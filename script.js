// function reverseString(str){
//     let splitString = str.split("");
//     let reverseArray = splitString.reverse();
//     let joinArray = reverseArray.join("");
//     return joinArray;
// };

// console.log(reverseString('Hello'));

// function isPalindrome(str){
//     const perfString = str.toLowerCase().replaceAll(/ /g, '');
//     return perfString === perfString.split('').reverse().join('');
// }
// const inputString = 'І розморозь зором зорі ';
// const result = isPalindrome(inputString);

// if (result){
//     console.log(`Рядок ${inputString} є паліндромом`);
// }else{
//     console.log(`Рядок ${inputString} не є паліндромом`);
// };

// function findGCD(a, b) {
//     while (b !== 0) {
//         const temp = b;
//         b = a % b;
//         a = temp;
//     }
//     return Math.abs(a); 
// }


// const num1 = 48;
// const num2 = 18;
// const gcd = findGCD(num1, num2);

// console.log(`НСД(${num1}, ${num2}) = ${gcd}`);
