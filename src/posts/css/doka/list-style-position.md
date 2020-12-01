---
title: list-style-position
name: list-style-position
author: ezhkov_d
co-authors:
designers:
contributors:
summary:
  - list-style-position
---

## Кратко

Свойство `list-style-position` задает положение маркера списка относительно элемента списка

## Пример

```css
.inside {
  list-style-position: inside;
  list-style-type: square;
}
```

## Как пишется

```css
/* Ключевые слова */
list-style-position: inside;
list-style-position: outside;

/* Глобальные значения */
list-style-position: inherit;
list-style-position: initial;
list-style-position: unset;
```

## Как это понять

Свойство указывает, будет ли маркер являться частью содержимого в элементе списка (`inside`), либо будет находиться вне элемента (`outside`)

<p class="codepen" data-height="265" data-theme-id="light" data-default-tab="html,result" data-user="ezhkov" data-slug-hash="gOrzNEm" style="height: 265px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;" data-pen-title="list-style-position">
  <span>See the Pen <a href="https://codepen.io/ezhkov/pen/gOrzNEm">
  list-style-position</a> by Denis Ezhkov (<a href="https://codepen.io/ezhkov">@ezhkov</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async src="https://static.codepen.io/assets/embed/ei.js"></script>

## Подсказки

💡По умолчанию свойство имеет значение `outside`

💡Это свойство применяется к элементам, у которых свойство `display` имеет значение `list-item`. Как правило, это элементы списка `<li>`. Но так как это свойство наследуется, то обычно его задают самому списку `<ul>`, чтобы оно применилось ко всем элементам списка сразу.

## В работе

🛠 В реальных проектах свойство используется очень редко, потому что работает только с "родными" маркерами списков. Дизайнеры в макетах повсеместно рисуют стилизованные маркеры, которые сверстать можно только с использованием псевдоэлементов [::before]().

{% include "authors/ezhkov_d/author.njk" %}
