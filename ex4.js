// Задание 4

const countDown = function(a, b) {
  const intervalId = setInterval(function() {
    console.log(a);
    if (a === b) {
      clearInterval(intervalId)
    }
    a++;
  }, 1000);
}
