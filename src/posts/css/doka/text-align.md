---
title: text-align
name: text-align
author: ABatickaya
co-authors:
designers:
contributors: skorobaeus
summary:
  - text-align
---

## Кратко

`text-align` выравнивает текст по горизонтали внутри блока.

Если это свойство не задано, то текст выравнивается по левому краю.

## Примеры

```css
/* Ключевые значения */
text-align: left; /* Значение по умолчанию */
text-align: start;
text-align: right;
text-align: end;
text-align: center;
text-align: justify;
text-align: justify-all;
text-align: start;
text-align: end;
text-align: match-parent;

/* Специальные значения для столбца в таблице */
text-align: ".";
text-align: "." center;

/* Выравнивание блока (нестандартный синтаксис) */
text-align: -moz-center;
text-align: -webkit-center;

/* Общие значения */
text-align: inherit;
text-align: initial;
text-align: unset;
```

## Как пишется

У `text-align` есть четыре варианта значений:

- `center` — выравнивание по центру. Подходит для заголовков.
- `justify` — выравнивание по ширине. Текст растягивается от левого до правого края, между словами появляются большие пробелы.
- `left` — выравнивание по левому краю. Чаще используют именно его, потому что так удобнее читать текст. Также это значение является значением по умолчанию.
- `right` — выравнивание по правому краю.

Не так давно появилось ещё два крайне удобных значения:

- `start` — текст выровнен по тому краю, по которому принято в текущем языке.
- `end` — текст выровнен по противоположному краю для текущего языка.

Формулировки сложные, но на самом деле всё просто. Если в русском мы читаем слева направо, то значение `start` будет выравнивать текст по левому краю, а `end` — по правому. Но в некоторых языках текст читается наоборот, справа налево. В этому случае `start` выровняет текст по правому краю, а `end` по левому. При этому вам ничего не нужно будет изменять. Значения сами подстроятся под текст. Достаточно изменить значение атрибута `lang` у тега `html`. Эти значения очень удобны, если вы разрабатывает мультиязычные сайты или приложения.

## Подсказки

💡 Хочешь отцентровать блок, не меняя выравнивание внутри него? Добавь в левый и правый отступ `margin` значение `auto`: например, `margin: auto;`, `margin: 0 auto;`, `margin-left: auto;` `margin-right: auto;`.

💡 Значение свойства наследуется.

💡 Значение по умолчанию — `left`.

💡 Выравнивание текста нельзя анимировать при помощи `transition` ☹️

## Ещё пример

Вот сразу три варианта выравнивания текста внутри контейнера `<div>`. В этом примере мы задаём выравнивание в CSS-стилях, привязывая их к классам `.left`, `.right`, `.center`, так что в HTML остаётся только добавить элементу атрибут класса с нужным именем, вроде `class="left"`:

CSS

```css
div {
  border: 1px solid black; /* Параметры рамки */
  padding: 5px; /* Поля вокруг текста */
  margin-bottom: 5px; /* Отступ снизу */
}

.left {
  text-align: left;
}

.right {
  text-align: right;
}

.center {
  text-align: center;
}

.content {
  width: 75%; /* Ширина слоя */
  background: #fc0; /* Цвет фона */
}
```

HTML

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8" />
    <title>text-align</title>
  </head>
  <body>
    <div class="left">
      <div class="content">Выравнивание по левому краю</div>
    </div>
    <div class="center"><div class="content">Выравнивание по центру</div></div>
    <div class="right">
      <div class="content">Выравнивание по правому краю</div>
    </div>
  </body>
</html>
```

<p class="codepen" data-height="265" data-theme-id="light" data-default-tab="html,result" data-user="max-grachev" data-slug-hash="NJOaXM" style="height: 265px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;" data-pen-title="align">
  <span>See the Pen <a href="https://codepen.io/max-grachev/pen/NJOaXM">
  align</a> by Max Grachev (<a href="https://codepen.io/max-grachev">@max-grachev</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>

## В работе

{% include "authors/ABatickaya/in-work.njk" %}

🛠Свойство `text-align` можно использовать не только для выравнивания текста в строчных элементах, но и для выравнивания строчно-блочных (`inline-block`) элементов внутри родителя.

_С появлением флексбоксов такое решение теряет свою популярность, но знать о нём стоит._

Простая разметка из родительского блока и трёх строчно-блочных вложенных элементов:

HTML

```html
<div class="parent">
  <div class="child">1</div>
  <div class="child">2</div>
  <div class="child">3</div>
</div>
```

CSS

```css
.parent {
  box-sizing: border-box;
  width: 80%;
  margin: 0 auto;
  padding: 25px;
}

.child {
  box-sizing: border-box;
  display: inline-block; /* Меняем отображение на строчно-блочное */
  width: 100px;
  height: 100px;
  padding: 40px;
  text-align: center; /* Выравниваем текст внутри блоков */
  border: 1px solid black;
}
```

<p class="codepen" data-height="265" data-theme-id="light" data-default-tab="css,result" data-user="solarrust" data-slug-hash="wZNLYL" style="height: 265px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;" data-pen-title="wZNLYL">
  <span>See the Pen <a href="https://codepen.io/solarrust/pen/wZNLYL">
  wZNLYL</a> by Alena (<a href="https://codepen.io/solarrust">@solarrust</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>

Добавим элементу `.parent` свойство `text-align: center` и элементы `.child` выровняются по центру родителя:

<p class="codepen" data-height="265" data-theme-id="light" data-default-tab="css,result" data-user="solarrust" data-slug-hash="PgVrxg" style="height: 265px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;" data-pen-title="PgVrxg">
  <span>See the Pen <a href="https://codepen.io/solarrust/pen/PgVrxg">
  PgVrxg</a> by Alena (<a href="https://codepen.io/solarrust">@solarrust</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>

А если попробовать распределить вложенные элементы равномерно по ширине родителя, задав `text-align: justify`?

<p class="codepen" data-height="265" data-theme-id="light" data-default-tab="css,result" data-user="solarrust" data-slug-hash="ExPPwxR" style="height: 265px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;" data-pen-title="ExPPwxR">
  <span>See the Pen <a href="https://codepen.io/solarrust/pen/ExPPwxR">
  ExPPwxR</a> by Alena (<a href="https://codepen.io/solarrust">@solarrust</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>

Ожидаемого поведения не получилось, и вот почему 👇

🛠 У значения `justify` хитрая логика. Чтобы можно было равномерно распределить элементы внутри родителя нужно задать этому самому родителю пустой строчно-блочный псевдоэлемент с шириной 100%.

CSS

```css
.parent:after {
  content: "";
  display: inline-block;
  width: 100%;
}
```

<p class="codepen" data-height="265" data-theme-id="light" data-default-tab="css,result" data-user="solarrust" data-slug-hash="YMBoBO" style="height: 265px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;" data-pen-title="YMBoBO">
  <span>See the Pen <a href="https://codepen.io/solarrust/pen/YMBoBO">
  YMBoBO</a> by Alena (<a href="https://codepen.io/solarrust">@solarrust</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async src="https://static.codepen.io/assets/embed/ei.js"></script>

{% include "authors/ABatickaya/author.njk" %}
