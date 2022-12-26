/** ЗАДАЧА 25 - Конвертация JSON в JavaScript объекты
 *
 * 1. Конвертируйте массив JSON объектов в массив объектов JavaScript
 *
 * 2. Выведите в консоль результирующий массив
 *
 * 3. Выведите в консоль "postId" второго объекта
 *
 * 4. Выведите в консоль "commentsQuantity" последнего объекта
 */

const postsJSON = [
  '{"postId":1355,"commentsQuantity":5}',
  '{"postId":5131,"commentsQuantity":13}',
  '{"postId":6134,"commentsQuantity":2}',
  '{"postId":2351,"commentsQuantity":8}', 
]

let posts = [];

for (let i = 0; i < postsJSON.length; i++) {
  let post = JSON.parse(postsJSON[i]);
  posts.push(post);
}

console.log(posts);
console.log(posts[1].postId);
console.log(posts[3].commentsQuantity);