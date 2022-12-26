/** ЗАДАЧА 23 - Массив объектов
 *
 * 1. Создайте массив с 3 объектами "cars"
 *
 * 2. Каждый объект должен иметь три свойства
 *  - carBrand (строка)
 *  - price (число)
 *  - isAvailableForSale (логическое значение)
 *
 * 3. Добавьте еще один объект в массив
 *
 * 4. Выведите результирующий массив в консоль
 */

 let cars = [
    {
      carBrand: 'Toyota',
      price: 30000,
      isAvailableForSale: true
    },
    {
      carBrand: 'Ford',
      price: 35000,
      isAvailableForSale: true
    },
    {
      carBrand: 'BMW',
      price: 40000,
      isAvailableForSale: false
    }
  ];
  
  cars.push({
    carBrand: 'Nissan',
    price: 25000,
    isAvailableForSale: true
  });
  
  console.log(cars);