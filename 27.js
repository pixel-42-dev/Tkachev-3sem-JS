/** ЗАДАЧА 27 - Интервалы и Таймауты
 *
 * Используйте следующие встроенные функции:
 * setTimeout
 * setInterval
 * clearInterval
 *
 * Нужно вывести в консоль ТОЛЬКО 5 сообщений с интервалом 2 секунды:
 * "Сообщение номер 1"
 * "Сообщение номер 2"
 * "Сообщение номер 3"
 * "Сообщение номер 4"
 * "Сообщение номер 5"
 */

 function print(from, to) {
    let timerId;
    timerId = setInterval(function go() {
        console.log(from);
        from++;
        if (from > to) {
            clearInterval(timerId)
        }
    }, 2000)
};
print(1, 5)