//Задание 3

function mathOp(x, y, op) {
  return op(x, y);
}

function add(x, y) {
  return x + y;
}

console.log(mathOp(2, 3, add));
