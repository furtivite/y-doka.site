---
title: "visibility"
name: visibility
author: ABatickaya
co-authors:
designers:
contributors:
summary:
  - visibility
---

## Кратко

Свойство `visibility` прячет элемент от глаз пользователя. Практически так же, как это делает [opacity](/css/doka/opacity/). И в том, и в другом случае элемент не виден, но механизм работы этих свойств разный.

Если при помощи `opacity` можно гибко изменять прозрачность элемента и делать его, например, видимым на 33%, то свойство `visibility` имеет только два состояния: видимый и невидимый.

## Пример

```html
<p class="visible">Я первый параграф</p>
<p class="hidden">Я второй параграф</p>
<p class="visible">Я третий параграф</p>

<style>
  .hidden {
    visibility: hidden;
  }
</style>
```

<p class="codepen" data-height="265" data-theme-id="light" data-default-tab="html,result" data-user="solarrust" data-slug-hash="bGERVxP" style="height: 265px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;" data-pen-title="visibility v1">
  <span>See the Pen <a href="https://codepen.io/solarrust/pen/bGERVxP">
  visibility v1</a> by Alena (<a href="https://codepen.io/solarrust">@solarrust</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async src="https://static.codepen.io/assets/embed/ei.js"></script>

Обратите внимание, что скрытый параграф всё равно влияет на поток документа и занимает отведённое ему место.

## Как пишется

У свойства `visibility` всего два используемых значения:

- `visible` — значение по умолчанию, элемент видим.
- `hidden` — элемент не виден на странице, но занимает отведённое ему место, влияет на поток документа.

Важный момент: при значении `hidden` элемент становится невидимым для программ чтения с экрана (скринридеров), а также на него нельзя будет попасть при навигации с помощью клавиатуры. Стоит помнить об этом при разработке, если вам важна доступность сайта.

Ещё есть устаревшее значение `collapce`, которое нужно только при работе с таблицами. Современными браузерами оно не поддерживается и обрабатывается как `hidden`.

Так же можно применять в качестве значения стандартные ключевые слова: `inherit`, `initial` и `unset`.

## Подсказки

💡 Свойство нельзя анимировать при помощи `transform` 😒

💡 Спрятанный элемент скрывается из так называемого **accessability tree** — становится недоступен для скринридеров и не может получить фокус при перемещении с помощью клавиатуры.

## В работе

🛠 Обычно, когда я хочу точно-точно спрятать элемент, чтобы он не получал фокус ни при каких обстоятельствах и не был виден даже скринридерам, но при этом хочу плавно показать его по какому-то триггеру, то указываю одновременно несколько _скрывающих_ свойств и использую трюк с `transition`:

CSS

```css
.parent {
  padding: 15px;
  border: 1px dashed red;
}

.block {
  visibility: hidden;
  opacity: 0;
  transition: visibility 0s linear 300ms, opacity 300ms;
}

.parent:hover .block {
  visibility: visible;
  opacity: 1;
  transition: visibility 0s linear 0s, opacity 300ms;
}
```

HTML

```html
<div class="parent">
  <div class="block">Я простой текст. Наводишь кнопку и я показываюсь</div>
</div>
```

{% include "authors/ABatickaya/author.njk" %}
