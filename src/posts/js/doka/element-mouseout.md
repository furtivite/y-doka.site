---
title: "Element.mouseout"
name: element-mouseout
author: N_Lopin
co-authors:
designers:
contributors:
summary:
---

## Кратко

[Событие](/js/doka/events/) на HTML элементе. Происходит, когда пользователь передвигает курсор, который находится на элементе, за пределы элемента.

Событие является противоположным событию [`mouseover`](/js/doka/element-mouseover/). Эти события часто используются в паре.

## Как пишется

```js
let divEl = document.getElementsByTagName("div")[0]
divEl.addEventListener("mouseout", function () {
  alert("курсор вышел за границы элемента!")
})
```

## Как понять

Подробнее о механизме событий читай в статье [«События»](/js/doka/events/).

Событие проще всего понять на демо. При событии `mouseout` мы меняем цвет квадрата на случайный. Чтобы событие произошло, нужно навести курсор на квадрат, а затем убрать его:

<p class="codepen" data-height="265" data-theme-id="light" data-default-tab="js,result" data-user="Lopinopulos" data-slug-hash="Mdxyqe" style="height: 265px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;" data-pen-title="Событие mouseout">
  <span>See the Pen <a href="https://codepen.io/Lopinopulos/pen/Mdxyqe">
  Событие mouseout</a> by Nikolai Lopin (<a href="https://codepen.io/Lopinopulos">@Lopinopulos</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async src="https://static.codepen.io/assets/embed/ei.js"></script>

## В работе

{% include "authors/n_lopin/in-work.njk" %}

🛠 С помощью этого события можно делать выпадающие списки и меню.

🛠 Есть очень похожее событие `mouseleave`, но оно не [всплывает](/js/doka/events/#86ade4b3d7f6466caeb13f842bf8829e). Вместо этого для каждого элемента в цепочке вложенности (с самого вложенного элемента, на котором произошло событие до `body`) создается собственное событие. Если у тебя глубокое DOM-дерево, то таких событий может быть много. Это может привести к проблемам с производительностью.

{% include "authors/n_lopin/author.njk" %}
