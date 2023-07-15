var x = [10, 20, 30];

//using reduce
function func(total, number) {
  return total + number;
}
var result = x.reduce(func, 0);

console.log(result);
