---
title: "<nav>"
name: nav
author: vladimir
co-authors:
  - grachev
designers:
contributors: skorobaeus
summary:
  - тэг
  - тег
  - nav
  - <nav>
  - навигация
---

## Кратко

В контейнере `<nav>` можно собрать ссылки для навигации по сайту.

## Пример

Вот так выглядит простой блок `<nav>` со ссылками на разные разделы сайта. Мы использовали его с тегом `<ul>` для создания ненумерованного списка:

```html
<nav class="menu">
  <ul>
    <li><a href="#">Главная</a></li>
    <li><a href="#">О нас</a></li>
    <li><a href="#">Контакты</a></li>
  </ul>
</nav>
```

## Как это понять

В контейнер `<nav>` помещаются основные ссылки, по которым пользователь сможет быстро перейти на нужный раздел сайта.

## Как пишется

Тег `<nav>...</nav>` всегда закрывается.

На странице можно использовать несколько `<nav>`.

## Атрибуты

Здесь применяются универсальные атрибуты.

## Подсказки

💡 Программы для чтения с экрана игнорируют блок `<nav>`.

💡 Нельзя помещать `<nav>` в контейнер `<address>`.

## Ещё пример

Попробуем разместить ссылки на верхние разделы сайта. Они будут идти в порядке от ссылки на главную страницу к ссылке на текущую:

HTML

```html
<nav class="crumbs">
  <ol>
    <li class="crumb"><a href="bikes">Велосипеды</a></li>
    <li class="crumb"><a href="bikes/bmx">BMX</a></li>
    <li class="crumb">Jump Bike 3000</li>
  </ol>
</nav>

<h1>Jump Bike 3000</h1>
<p>Отличный вариант для профессионалов. С ним вы научитесь круто прыгать.</p>
```

CSS

```css
nav {
  border-bottom: 1px solid black;
}

.crumbs ol {
  list-style-type: none;
  padding-left: 0;
}

.crumb {
  display: inline-block;
}

.crumb a::after {
  display: inline-block;
  color: #000;
  content: ">";
  font-size: 80%;
  font-weight: bold;
  padding: 0 3px;
}
```

{% demo "/nav/", "Хлебные крошки", 270 %}

## В работе

{% include "authors/vladimir/in-work.njk" %}

🛠 `<nav>` — это набор функционально важных ссылок по разделам сайта. Важно выделить `<nav>`, чтобы поисковик понял, что находится в этом блоке.

{% include "authors/vladimir/author.njk" %}
