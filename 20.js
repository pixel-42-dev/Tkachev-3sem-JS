/** ЗАДАЧА 20 - Что будет выведено в консоли
 *
 * Что будет выведено в консоли?
 * Ответьте на вопрос без запуска кода
 */

function fn() {
  console.log('Привет из функции fn')

  return function (a) {
    console.log(a)
  }
}

fn()(true)

// При запуске функции fn сработает метод console.log, и выведется сообщение "Привет из функции fn"
// Затем сработает возврат из функции fn, который пример аргумент true, и выведет его