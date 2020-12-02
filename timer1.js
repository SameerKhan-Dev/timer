
/*
  Implement an alarm clock / timer which will beep after a specified amount of time has passed.
  The user can specify an unlimited number of alarms using command line arguments
*/

// assign to arrayTimes the arguments found in process.argv array which are the arguments from the command line terminal provided by user.
const arrayTimes = process.argv;


if (arrayTimes.length !== 0) {

  // use for-loop to iterate through arguments inside arrayTimes
  for (let x = 0; x < arrayTimes.length; x++) {
    
    let number = Number(arrayTimes[x]);
    // check to make sure number is legit and positive number i.e greater or equal to zero
    if (number !== NaN && number >= 0) {
      // convert seconds to milliseconds
      let timerTime = number * 1000;
      setTimeout(() => {
        process.stdout.write('\x07');
      }, timerTime);
        
    }
  
  }

}
