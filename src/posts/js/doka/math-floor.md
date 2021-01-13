---
title: "Math.floor()"
name: math-floor
author: N_Lopin
co-authors:
designers:
contributors:
summary:
---

## Кратко

Объект `Math` содержит набор методов, который используется для округления чисел:

- `round` — округление по обычным правилам;
- `floor` — округление вниз;
- `ceil` — округление вверх;

## Как пишется

```js
let num = 15.52
// Обычное округление
console.log(Math.round(num)) // 16
// Округление до ближайшего целого в большую сторону
console.log(Math.ceil(num)) // 16
// Округление до ближайшего целого в меньшую сторону
console.log(Math.floor(num)) // 15
```

<p class="codepen" data-height="265" data-theme-id="light" data-default-tab="js,result" data-user="Lopinopulos" data-slug-hash="RzNGZQ" style="height: 265px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;" data-pen-title="Округление">
  <span>See the Pen <a href="https://codepen.io/Lopinopulos/pen/RzNGZQ">
  Округление</a> by Nikolai Lopin (<a href="https://codepen.io/Lopinopulos">@Lopinopulos</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async src="https://static.codepen.io/assets/embed/ei.js"></script>

## В работе

{% include "authors/n_lopin/in-work.njk" %}

🛠 Разные виды округления нужны в разных ситуациях:

- когда разбиваешь данные на страницы и считаешь общее количество страниц, используй округление вверх: `let totalPages = Math.ceil(totalItems / itemsPerPage);`
- когда выбираешь случайный элемент массива, используй округление вниз: `Math.floor(Math.random()*array.length);`
