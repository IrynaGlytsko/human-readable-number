let units = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
let tens = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
let specialTen = ['ten','eleven','twelve','thirteen','fourteen','fifteen','sixteen','seventeen','eighteen','nineteen'];

module.exports = function toReadable (number) {

  let humanReadableNumber;
  let digits = number.toString().split( '' );

  switch ( digits.length ) {

    case 1:
      if ( +digits[ 0 ] == 0 ) {
        humanReadableNumber = 'zero';
        return humanReadableNumber;
      }
      humanReadableNumber = units[ +digits[ 0 ] ];
      return humanReadableNumber;

    case 2:
      if ( +digits[ 0 ] == 1 ) {
        humanReadableNumber = specialTen[ +digits[ 1 ] ];
        return humanReadableNumber.trim();
      }
      humanReadableNumber = tens[ +digits[ 0 ] ] + ' ' + units[ +digits[ 1 ] ];
      return humanReadableNumber.trim();

    case 3:
      if ( digits[ 1 ] == 0 ) {
        humanReadableNumber = units[ +digits[ 0 ] ] + ' hundred ' + units[ +digits[ 2 ] ];
        return humanReadableNumber.trim();
      } 
      if ( digits[ 1 ] == 1 ) {
        humanReadableNumber = units[ +digits[ 0 ] ] + ' hundred ' + specialTen[ +digits[ 2 ] ];
        return humanReadableNumber.trim();
      }
      humanReadableNumber = units[ +digits[ 0 ] ] + ' hundred ' + tens[ +digits[ 1 ] ] + ' ' + units[ +digits[ 2 ] ];
      return humanReadableNumber.trim();

    }
}
