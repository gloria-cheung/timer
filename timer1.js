const arg = process.argv.slice(2);

const timer = function(arg) {
  // filter out non numbers and negative numbers
  // change delay from seconds to milliseconds
  arg = arg.filter((x) => x >= 0).map((x) => x * 1000);
  //sort so that numbers are in ascending order
  arg.sort((a, b) => a - b);
  
  for (let num of arg) {
    setTimeout(() => {
      process.stdout.write('\x07');
    }, num);
  }
};

timer(arg);