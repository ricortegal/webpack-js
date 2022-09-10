console.log("esto se imprime desde print.js");
var i = 0;

function printMe() {
    console.log('I get called from print.js! i' + i);
    i++;
  }

export { printMe }
