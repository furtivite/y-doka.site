---
title: text-decoration
name: text-decoration
author: ABatickaya
co-authors:
  - furtivite
designers:
contributors:
summary:
  - text-decoration
---

## Кратко

Свойство `text-decoration` позволяет добавить декоративные линии тексту. Текст можно подчеркнуть, перечеркнуть или добавить линию над текстом. Больше ни на что это свойство не способно.

`text-decoration: underline` часто встречается при работе со ссылками.

## Пример

Создадим четыре абзаца текста. По одному для каждого из доступных значений свойства `text-decoration`.

HTML

```html
<div class="parent">
  <p class="none">Lorem ...</p>
  <p class="underline">Lorem ...</p>
  <p class="line-through">Lorem ...</p>
  <p class="overline">Lorem, ...</p>
</div>
```

CSS

```css
.none {
  text-decoration: none; /* Значение по умолчанию, ничего не меняется */
}

.underline {
  text-decoration: underline; /* Нижнее подчёркивание */
}

.line-through {
  text-decoration: line-through; /* Перечёркнутый текст */
}

.overline {
  text-decoration: overline; /* Линия над текстом */
}
```

<p class="codepen" data-height="265" data-theme-id="light" data-default-tab="html,result" data-user="solarrust" data-slug-hash="drjJYx" style="height: 265px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;" data-pen-title="drjJYx">
  <span>See the Pen <a href="https://codepen.io/solarrust/pen/drjJYx">
  drjJYx</a> by Alena (<a href="https://codepen.io/solarrust">@solarrust</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>

# Как это понять

С английского языка слово **decoration** переводится как украшение или декор. Дословно можно перевести свойство как текст-украшение. Говоря человеческим языком, украшение текста.

# Как пишется

Пишем свойство `text-decoration` и после двоеточия указываем одно из доступных значений:

- `underline` — подчёркнутый текст.
- `line-through` — перечёркнутый текст.
- `overline` — надчёркнутый текст, линия находится над словами.
- `none` — отменяет все эффекты.

Выше указаны стандартные значения, с которыми ты будешь сталкиваться чаще всего.

Не многие знают, что после ключевого слова, означающего положение линии, можно указать ещё и стиль этой линии и её цвет.

Для управление стилем линии используются следующие ключевые слова:

- `solid` — сплошная линия. Значение по умолчанию.
- `double` — двойная линия.
- `dotted` — точечная линия.
- `dashed` — пунктирная линия.
- `wavy` — волнистая линия.

Управлять стилем подчёркивания обычно не требуется, но об этой возможности знать нужно.

Как будет выглядеть двойное перечёркивание:

```css
selector {
  text-decoration: line-through double;
}
```

Стиль линии можно указать отдельно при помощи свойства `text-decoration-style`. [Пример](https://codepen.io/solarrust/pen/ywqvgd?editors=1100)

Цвет линии по умолчанию совпадает с цветом текста, для которого задаётся свойство `text-decoration`.

Мы можем изменить это значение, указав после ключевых слов типа и стиля линии код цвета в любом доступном в вебе формате.

Например, сделаем двойное подчёркивание красного цвета:

```css
selector {
  text-decoration: underline double #ff0000;
}
```

Цветом линии можно управлять отдельно при помощи свойства `text-decoration-color`. [Пример](#example)

## Подсказки

💡Свойство не наследуется.

💡Значение по умолчанию для обычного текста — `none`. Но для ссылок ([<a>](/posts/html/doka/a/)) значение по умолчанию — `underline`.

💡Свойство `text-decoration` целиком нельзя анимировать при помощи свойства `transition` 😒

Но можно анимировать цвет линии!

Пусть по умолчанию цвет линий будет совпадать с цветом текста, а по наведению курсора цвет будет меняться на другой за 0.3 секунды.

CSS

```css
p {
  transition: text-decoration-color 0.3s;
}

.blue:hover {
  text-decoration-color: blue;
}
```

<a name="example"></a>

<p class="codepen" data-height="265" data-theme-id="light" data-default-tab="html,result" data-user="solarrust" data-slug-hash="vPaddd" style="height: 265px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;" data-pen-title="vPaddd">
  <span>See the Pen <a href="https://codepen.io/solarrust/pen/vPaddd">
  vPaddd</a> by Alena (<a href="https://codepen.io/solarrust">@solarrust</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>

💡Нельзя управлять толщиной и положением линии, заданной при помощи `text-decoration`.

💡Если по дизайну требуется задать тексту или ссылке подчёркивание, отличающееся от стандартного по толщине или положению, а также если нужно анимировать появление / пропадание линии, то используй псевдоэлементы `:before` или `:after`.

## В работе

{% include "authors/ABatickaya/in-work.njk" %}

🛠 У ссылок по умолчанию задано подчёркивание. Если по дизайну оно не требуется, то нужно будет его _сбросить_ — задать свойство `text-decoration: none`. Это самый частый случай применения этого свойства. Перечёркивание или надчёркивание почти не встречаются в работе.

🛠 Отдельные свойства — `text-decoration-line`, `text-decoration-style` и `text-decoration-color` — редко встречаются в вёрстке, но знать о них нужно, чтобы при необходимости не переписывать свойство целиком только для изменения стиля или цвета линии.

{% include "authors/furtivite/in-work.njk" %}

Иногда вам может потребоваться управлять расстоянием между текстом и линией ниже. Обычно это делается, через свойство `line-height`. Чем больше высота строки, тем ниже будет полоса подчеркивания.

К сожалению, этот способ подходит не всегда. Например, когда дизайнер задумал элемент несколько иначе. На примере ниже отказываемся от `text-decoration` и используем `border-bottom`.

HTML

```html
<header>
  <div class="container">
    <nav>
      <ul class="navigation">
        <li class="navigation__item">
          <a href="#" class="navigation__link">О магазине</a>
        </li>
        <li class="navigation__item">
          <a href="#" class="navigation__link">Новости</a>
        </li>
        <li class="navigation__item">
          <a href="#" class="navigation__link">Акции</a>
        </li>
        <li class="navigation__item">
          <a href="#" class="navigation__link">Личный кабинет</a>
        </li>
      </ul>
    </nav>
  </div>
</header>
```

CSS

```css
body {
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
}

header {
  padding: 10px 0 0;
  background: blue;
  color: yellow;
}

.container {
  width: 60%;
  max-width: 1230px;
  margin: 0 auto;
}

.navigation {
  display: flex;
  justify-content: space-between;
  list-style-type: none;
  padding-inline-start: 0;
  font-weight: bold;
  margin: 0;
}

.navigation__link,
.navigation__link:visited {
  display: inline-block; /* делаем элементы строчно-блочными */
  color: inherit;
  text-decoration: none; /* убираем подчеркивание */
  padding-bottom: 10px;
}

.navigation__link:hover {
  color: white;
  padding-bottom: 8px; /* нивелируем размеры рамки */
  border-bottom: 2px solid white; /* добавляем рамку снизу */
}
```

<p class="codepen" data-height="265" data-theme-id="light" data-default-tab="css,result" data-user="furtivite" data-slug-hash="QWNpgQa" style="height: 265px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;" data-pen-title="border-bottom vs. text-decoration">
  <span>See the Pen <a href="https://codepen.io/furtivite/pen/QWNpgQa">
  border-bottom vs. text-decoration</a> by Egor (<a href="https://codepen.io/furtivite">@furtivite</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async src="https://static.codepen.io/assets/embed/ei.js"></script>

{% include "authors/ABatickaya/author.njk" %}
