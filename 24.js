/** ЗАДАЧА 24 - Перебор элементов массива
 *
 * 1. Создайте функцию "cityInfo" с двумя параметрами,
 * которая возвращает строку
 * "London is at the index 0 in the myCities array"
 *
 * 2. Переберите все элементы массива "myCities",
 * для каждого элемента вызовите функцию "cityInfo"
 * и выведите в консоль результат вызова функции
 */

const myCities = ['London', 'New York', 'Singapore'];

function cityInfo(city, arr) {
    // i = 0;
    // isFind = false;
    // while(!isFind) {
    //     if (arr[i] == city) {
    //         console.log(city + " is at the index " + i + " in the myCities array");
    //         isFind = true;
    //     }
    // }
    for (i = 0; i < 3; i++) {
        if (city == arr[i]) {
            console.log(city + " is at the index " + i + " in the myCities array");
        }
    }
}

myCities.forEach(element => cityInfo(element, myCities));