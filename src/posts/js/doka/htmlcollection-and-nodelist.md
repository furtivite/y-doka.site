---
title: "HTMLCollection и NodeList"
name: htmlcollection-and-nodelist
author: N_Lopin
co-authors:
designers:
contributors:
summary:
---

## Кратко

`HTMLCollection` и `NodeList` — это очень похожие на массив коллекции. Они хранят элементы веб-страницы. К элементам коллекций можно обращаться по индексу, но у них нет привычных [методов массива](/js/doka/arrays/).

`HTMLCollection` возвращают методы [`getElementsByTagName`](/js/doka/getelementsbytagname/) и [`getElementsByClassName`](/js/doka/getelementsbyclassname/).

`NodeList` возвращает метод `querySelectorAll`.

## Как понять

`HTMLCollection` возвращают методы, которые работают с DOM — представлением HTML-кода страницы в JavaScript.

Полученная один раз коллекция всегда остается актуальной — JavaScript будет обновлять ее в случае, если на странице появляется подходящий элемент. Поэтому `HTMLCollection` называют «живой» коллекцией.

Например, единожды получив коллекцию мы можем не заботиться о ее поддержке:

<p class="codepen" data-height="265" data-theme-id="light" data-default-tab="js,result" data-user="Lopinopulos" data-slug-hash="xNOBow" style="height: 265px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;" data-pen-title="xNOBow">
  <span>See the Pen <a href="https://codepen.io/Lopinopulos/pen/xNOBow">
  xNOBow</a> by Nikolai Lopin (<a href="https://codepen.io/Lopinopulos">@Lopinopulos</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async src="https://static.codepen.io/assets/embed/ei.js"></script>

`NodeList` работает так же, как и `HTMLCollection`. Разница только в том, что `NodeList` не живая коллекция — она не обновляется при появлении на странице новых элементов.

## В работе

{% include "authors/n_lopin/in-work.njk" %}

🛠 Используй индексы для получения отдельных элементов коллекции:

```js
let paragraphs = document.getElementsByTagName("p")
console.log(paragraphs[0])
```

🛠 Если нужно обойти все элементы в цикле, то можно написать классический цикл `for`:

```js
let paragraphs = document.getElementsByTagName("p")
for (let i = 0; i < paragraphs.length; ++i) {
  console.log(paragraphs[i].id) // печатаем значение атрибута id элемента
}
```

Другой вариант — воспользоваться синтаксисом `for..of`:

```js
let paragraphs = document.getElementsByTagName("p")
for (let item of paragraphs) {
  console.log(item.id)
}
```

🛠 Когда пишешь цикл с `HTMLCollection` убедись, что подходящие элементы не добавляются или удаляются со страницы в момент работы цикла. Так как коллекция живая, ее обновление во время цикла может создать бесконечный цикл.

🛠 Если очень нужны методы массива, то преобразуй `HTMLCollection` или `NodeList` в массив с помощью `Array.from`.

```js
let paragraphs = document.getElementsByTagName("p")
let array = Array.from(paragraphs)

console.log(array.pop())
```

Такое преобразование обычно не требуется. Подумай, точно ли оно подходит под твою задачу.

{% include "authors/n_lopin/author.njk" %}
