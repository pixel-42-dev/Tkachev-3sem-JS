/** ЗАДАЧА 34 - Перебор элементов массива
 *
 * 1. Создайте функцию "cityInfo" с двумя параметрами,
 * которая возвращает строку
 * "London is at the index 0 in the myCities array"
 *
 * 2. Переберите все элементы массива "myCities",
 * для каждого элемента вызовите функцию "cityInfo"
 * и выведите в консоль результат вызова функции
 */

cityInfo = (el, index) => `${el} is at the index ${index} in the myCities array`

const myCities = ['London', 'New York', 'Singapore']
for(i = 0; i < myCities.length; i++){
    console.log(cityInfo(myCities[i], i))
}