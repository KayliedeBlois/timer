let timeArray = process.argv.slice(2); 
//console.log(process.argv.slice(2));
let sortedTimeArray = timeArray.sort(function(a,b){return a-b});
//console.log(sortedTimeArray);
let time = 0;
for (let i = 0; i < sortedTimeArray.length; i++){
  if (sortedTimeArray[i] > 0) {
    time = 1000 * sortedTimeArray[i];
    setTimeout(() => {
    process.stdout.write('\x07');
  }, time);
  }
};