---
title: "Element.scroll/scrollIntoView"
name: element-scroll-scrollintoview
author: vindi-r
co-authors:
designers:
contributors:
summary:
---

## Кратко

Функция `scrollIntoView()` позволяет программно прокрутить окно до определённого элемента вне зависимости от положения элемента в окне.

## Как пишется

Относительный скролл всего окна:

```js
let element = document.querySelector("#about") // в element Должен быть любой DOM элемент на странице
element.scrollIntoView()
```

🤖У scrollIntoView может быть аргумент типа boolean:

- Если указать true, то скролл будет перемещен чтобы верхняя граница элемента совпала с верхней границе окна.
- Если указать false, то скролл остановится так, чтобы нижняя граница элемента была вровень с нижней границей окна.

## Как это понять

Использовать scrollIntoView наиболее полезно в случаях длинных веб-страниц, где нужен скролл к определенным частям, а использования ссылок с якорями (например, `<a href="#about">О нас</a>`) недостаточно.

## В работе

{% include "authors/vindi-r/in-work.njk" %}

🛠Ниже вариант использования прокрутки к элементу с различными опциями

<p class="codepen" data-height="265" data-theme-id="light" data-default-tab="html,result" data-user="vindi-r" data-slug-hash="OGqgxa" style="height: 265px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;" data-pen-title="scrollIntoView - в работе">
  <span>See the Pen <a href="https://codepen.io/vindi-r/pen/OGqgxa">
  scrollIntoView - в работе</a> by vindi-r (<a href="https://codepen.io/vindi-r">@vindi-r</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async src="https://static.codepen.io/assets/embed/ei.js"></script>

{% include "authors/vindi-r/author.njk" %}
