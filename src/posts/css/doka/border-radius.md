---
title: "border-radius"
name: border-radius
author: ABatickaya
co-authors:
designers:
contributors:
tags:
  - sprint-4
summary:
  - border-radius
---

## Кратко

Свойство `border-radius` закругляет углы почти у любого элемента. И даже если у блока не задана явная рамка.

🔮Волшебное свойство! Часто нужно в работе, поскольку дизайнеры не любят острые углы.

## Пример

Самая простая штука — кнопка с закруглёнными краями:

HTML

```html
<button class="btn">Купить</button>
```

CSS

```css
.btn {
  border: none;
  border-radius: 5px;
}
```

<p class="codepen" data-height="265" data-theme-id="light" data-default-tab="css,result" data-user="solarrust" data-slug-hash="oNbbaEK" style="height: 265px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;" data-pen-title="oNbbaEK">
  <span>See the Pen <a href="https://codepen.io/solarrust/pen/oNbbaEK">
  oNbbaEK</a> by Alena (<a href="https://codepen.io/solarrust">@solarrust</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>

Обрати внимание, что мы _сбросили_ стандартную рамку кнопки, но углы тем не менее слегка закруглились.

Если добавить кнопке тень и интересную реакцию на наведение курсора и нажатие, то получится привлекательно и современно 😉

<p class="codepen" data-height="265" data-theme-id="light" data-default-tab="css,result" data-user="solarrust" data-slug-hash="ROZeQE" style="height: 265px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;" data-pen-title="ROZeQE">
  <span>See the Pen <a href="https://codepen.io/solarrust/pen/ROZeQE">
  ROZeQE</a> by Alena (<a href="https://codepen.io/solarrust">@solarrust</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>

## Как это понять

Слово **border** переводится с английского как рамка. А со словом **radius** каждый знаком ещё со школьной скамьи 😏

Свойство `border-radius` задаёт радиус закругления каждого из углов элемента.

## Как пишется

Пройдемся по синтаксису:

```css
selector {
  border-radius: 5px; /* радиус в пикселях */
  border-radius: 50%; /* радиус в процентах */
  border-radius: 5px 0 0 50%; /* разные радиусы для каждого из четырёх углов элемента */
}
```

Можно управлять степенью закругления каждого из углов в отдельности или задать одно значение для всех углов сразу.

## Подсказки

💡 Значение по умолчанию: `0`

💡 `border-radius` сработает даже если не будет задана видимая рамка.

💡 Чтобы увидеть результат работы свойства, надо задать фоновую заливку или картинку блоку, к которому применяется закругление углов. Или рамку, или фон для родительского элемента. Что-то, что отделит белое от белого 🤗

💡 Можно управлять радиусом закругления каждого угла в отдельности при помощи свойств:

- `border-top-left-radius` — радиус закругления для левого верхнего угла.
- `border-top-right-radius` — радиус закругления для правого верхнего угла.
- `border-bottom-right-radius` — радиус закругления для правого нижнего угла.
- `border-bottom-left-radius` — радиус закругления для левого нижнего угла.

## В работе

{% include "authors/ABatickaya/in-work.njk" %}

🛠Самый крутой лайфхак — это круглые элементы при помощи `border-radius`. Они часто нужны для всяких лейблов на странице.

HTML

```html
<div class="text" data-msg="3">Сообщения</div>
```

CSS

```css
.text:after {
  content: attr(data-msg);
  width: 20px; /* равные ширина */
  height: 20px; /* и высота */
  border-radius: 50%; /* закругляем углы на 50% */
  background-color: red;
}
```

<p class="codepen" data-height="265" data-theme-id="light" data-default-tab="css,result" data-user="solarrust" data-slug-hash="bJrQrq" style="height: 265px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;" data-pen-title="bJrQrq">
  <span>See the Pen <a href="https://codepen.io/solarrust/pen/bJrQrq">
  bJrQrq</a> by Alena (<a href="https://codepen.io/solarrust">@solarrust</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async src="https://static.codepen.io/assets/embed/ei.js"></script>

{% include "authors/ABatickaya/author.njk" %}
