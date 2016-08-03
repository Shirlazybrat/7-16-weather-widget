// function toRoman(n) {
//     var r = '',
//         decimals = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1],
//         roman = ['M', 'CM', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I'];
//     for (var i = 0; i < decimals.length; i++) {
//         while (n >= decimals[i]) {
//             r += roman[i];
//             n -= decimals[i];
//         }
//     }
//     return r;
// }


var decimals = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
var romans = ['M', 'CM', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I'];

// function makeRoman(num) {
//     var roman = '';
//     for (var i = 0; i < decimals.length; i++) {
//         while (num >= decimals[i]) {
//             roman += romans[i];
//             num -= decimals[i];
//         }
//     }
//     return roman;
// }


var decimals = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
var romans = ['M', 'CM', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I'];


function undoRoman(roman) {
    var num = 0;
    for (var i = 0; i < roman.length; i++) {
        for (var j = 0; j < romans.length; j++) {
            if (roman[i] == romans[j]) {
                num += decimals[j];
            }
        }
    }
    
}