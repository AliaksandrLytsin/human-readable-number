module.exports = function toReadable (number) {
  this.oneDigitNumbers = {
      0: 'zero',
      1: 'one',
      2: 'two',
      3: 'three',
      4: 'four',
      5: 'five',
      6: 'six',
      7: 'seven',
      8: 'eight',
      9: 'nine',
  }
  this.twoDigitNumbers = {
    10: 'ten',
    11: 'eleven',
    12: 'twelve',
    13: 'thirteen',
    14: 'fourteen',
    15: 'fifteen',
    16: 'sixteen',
    17: 'seventeen',
    18: 'eighteen',
    19: 'nineteen',
    20: 'twenty',
    30: 'thirty',
    40: 'forty',
    50: 'fifty',
    60: 'sixty',
    70: 'seventy',
    80: 'eighty',
    90: 'ninety',
  }
  number = number.toString();
  let oneDigit = new Map(Object.entries(this.oneDigitNumbers));
  let twoDigit = new Map(Object.entries(this.twoDigitNumbers));  

  if (oneDigit.has(number)) return oneDigit.get(number);
    else if (twoDigit.has(number)) 
        return twoDigit.get(number);
    else if (number.length === 2) 
        return `${twoDigit.get(number[0] + '0')} ${oneDigit.get(number[1])}`;
    else if (number[1] === '0' && number[2] === '0') 
        return `${oneDigit.get(number[0])} hundred`;
    else if (number[1] === '0') 
        return `${oneDigit.get(number[0])} hundred ${oneDigit.get(number[2])}`
    else if (twoDigit.has(number[1] + number[2])) 
        return `${oneDigit.get(number[0])} hundred ${twoDigit.get(number[1] + number[2])}`;
    else return `${oneDigit.get(number[0])} hundred ${twoDigit.get(number[1] + '0')} ${oneDigit.get(number[2])}`;
}
