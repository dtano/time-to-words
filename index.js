// expecting time to be a string in the format like '8:15' or '12:30'
function convertTimeToWords(time) {
  // TODO: real code goes here!
  if (time === '0:00') {
    return 'midnight';
  }else if(time === '12:00'){
    return 'midday';
  }

  // Find a way to identify whether we have 30 after the colon
  let splitTime = time.split(':');
  // ['8', '30']
  let hour = parseInt(splitTime[0]);
  let minutes = parseInt(splitTime[splitTime.length - 1]);

  if(minutes === 0){
    return `${convertNumberToWord(hour)} o'clock`;
  }

  if(minutes > 30){
    // Refers to the next hour
    let nextHour = hour + 1;
    let diffToNextHour = 60 - minutes;

    return `${convertNumberToWord(diffToNextHour)} to ${convertNumberToWord(nextHour)}`;
  }else{  
    // Refers to the current hour
    let diffFromCurrentHour = minutes;
    return `${convertNumberToWord(minutes)} past ${convertNumberToWord(hour)}`;
  }

  return 'half past eight';
}

function convertNumberToWord(hour) {
  switch(hour){
    case 0:
      return 'twelve';
    case 1:
      return 'one';
    case 2:
      return 'two';
    case 3:
      return 'three';
    case 4:
      return 'four';
    case 5:
      return 'five';
    case 6:
      return 'six';
    case 7:
      return 'seven';
    case 8:
      return 'eight';
    case 9:
      return 'nine';
    case 10:
      return 'ten';
    case 11:
      return 'eleven';
    case 12:
      return 'twelve';
    case 13:
      return 'thirteen';
    case 14:
      return 'fourteen';
    case 16:
      return 'sixteen';
    case 17:
      return 'seventeen';
    case 18:
      return 'eighteen';
    case 19:
      return 'nineteen';
    case 20:
      return 'twenty';
    case 21:
      return 'twenty one';
    case 22:
      return 'twenty two';
    case 23:
      return 'twenty three';
    case 15:
    case 45:
      return 'quarter';
    case 30:
      return 'half';
  }

  return null;
}

module.exports = { convertTimeToWords };