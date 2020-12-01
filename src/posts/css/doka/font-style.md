---
title: font-style
name: font-style
article: post
author: grachev
co-authors:
designers:
contributors:
summary:
  - font-style
---

## Кратко

Определяет начертание шрифта: обычное, _курсивное_ или _наклонное_.

## Пример

Попробуем выделить курсивом текст всего абзаца:

CSS

```css
h1 {
  font-family: Verdana, Arial, Helvetica, sans-serif; /* Рубленый шрифт заголовка */
}
p {
  font-family: "Times New Roman", Times, serif; /* Шрифт с засечками */
  font-style: italic; /* Курсивное начертание */
}
```

HTML

```html
<body>
  <h1>Текст ниже мы написали курсивом</h1>
  <p>
    Этот текст написан курсивом. А мог быть написан наклонным шрифтом, но вы всё
    равно бы это не отличили.
  </p>
</body>
```

<p class="codepen" data-height="265" data-theme-id="light" data-default-tab="html,result" data-user="max-grachev" data-slug-hash="BbvJMy" style="height: 265px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;" data-pen-title="font-style">
  <span>See the Pen <a href="https://codepen.io/max-grachev/pen/BbvJMy">
  font-style</a> by Max Grachev (<a href="https://codepen.io/max-grachev">@max-grachev</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async src="https://static.codepen.io/assets/embed/ei.js"></script>

## Как это понять

У большинства шрифтов есть несколько вариантов написания: стандартный, _курсивный_ или **жирный**. Чтобы задать курсивное написание, используй `font-style: italic`.

Ещё есть наклонный шрифт, который задаётся через `font-style: oblique`. Он очень похож на курсив, но по сути, это его имитация, которую используют, если у выбранного шрифта нет курсивного написания. Нужно помнить, что `**oblique**` может выглядеть хуже по качеству, чем курсивный шрифт. Это особенно заметно при печати страницы.

## Как пишется

Для `font-style` можно выбрать одно из четырёх значений:

- `normal` — обычное начертание текста. Значение по умолчанию.
- `italic` — курсивное начертание.
- `oblique` — наклонное начертание, которое можно использовать, если у шрифта нет курсивного варианта начертания.
- `inherit` — наследует начертание шрифта, которое задано в родительском элементе.

```css
.normal {
  font-style: normal;
}

.italic {
  font-style: italic;
}

.oblique {
  font-style: oblique;
}
```

## В работе

🛠 Не стоит писать большие части текста курсивом — это сильно усложняет чтение.

🛠 Браузер Internet Explorer до версии 7.0 включительно не поддерживает значение `inherit`.

{% include "authors/grachev/author.njk" %}
