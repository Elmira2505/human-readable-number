module.exports = function toReadable (number) {
   let str = "";
    const numbers = {
        0: "zero",
        1: "one",
        2: "two",
        3: "three",
        4: "four",
        5: "five",
        6: "six",
        7: "seven",
        8: "eight",
        9: "nine",
        10: "ten",
        11: "eleven",
        12: "twelve",
        13: "thirteen",
        14: "fourteen",
        15: "fifteen",
        16: "sixteen",
        17: "seventeen",
        18: "eighteen",
        19: "nineteen",
        20: "twenty",
        30: "thirty",
        40: "forty",
        50: "fifty",
        60: "sixty",
        70: "seventy",
        80: "eighty",
        90: "ninety",
        100: "hundred"
    };
    if (number == 0) {
        console.log(numbers[0]);
        return numbers[0];
    }

    while (number > 0) {
        if (number.toString().length == 3) {
            n1 = number - number % 100;
            number = number - n1;
            str = str + `${numbers[n1/100]} ${numbers[100]}`;
        }
        if (number.toString().length == 2) {
            if (number < 20 || number % 10 == 0) {
                return (str + ` ${numbers[number]}`).trim();
            } else {
                n1 = number - number % 10;
                number = number - n1;
                str = str + ` ${numbers[n1]}`;
            }
        }
        if (number.toString().length == 1 && number > 0) {
            str = str + ` ${numbers[number]}`;
            number = number - number;

        }

    }
    console.log(str);
    return str.trim();
}
