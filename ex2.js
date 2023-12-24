// Задание 2

function getNum (x) {
    if (x <= 1) {
      return 'Введите другое число не больше 1000';
    }
  
    for (let i = 2; i <= Math.sqrt(x); i++) {
      if (x % i === 0) {
        return 'Число не простое';
      }
    }
    return 'Число простое';
  }
  
  const result = getNum(11);
  console.log(result);
