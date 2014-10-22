var a = 1;
var b = 2;
var num = 0;
var sum = 2;

while (num < 4000000) {
  num = a + b;
  if (num % 2 === 0) {
    sum += num;
  }

  a = b;
  b = num
}

console.log(sum);