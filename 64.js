/** ЗАДАЧА 64 - Деструктуризация объектов
 *
 * Создайте функцию "shortPerson", которая деструктуризирует объект
 * и возвращает его короткую версию
 *
 * Пример результата:
 * { n: "Mike", c: "Spain", a: 23, p: 100 }
 *
 * Если входной объект не имеет поля postsQuantity,
 * он должен получить значение по умолчанию 0
 */

const person1 = {
  name: 'Mike',
  info: {
    country: 'Spain',
    age: 23,
  },
  postsQuantity: 100,
}

const person2 = {
  name: 'Alice',
  info: {
    country: 'Italy',
    age: 25,
  },
}

// Напишите функцию "shortPerson" здесь
shortPerson = ({name, info, postsQuantity=0})=>{
  return {
    n: name,
    c: info.country,
    a: info.age,
    p:postsQuantity
  }
}

console.log(shortPerson(person1))
// { n: "Mike", c: "Spain", a: 23, p: 100 }

console.log(shortPerson(person2))
// { n: "Alice", c: "Italy", a: 25, p: 0 }
