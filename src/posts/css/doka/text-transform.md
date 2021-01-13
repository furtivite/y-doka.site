---
title: "text-transform"
name: text-transform
author: ABatickaya
co-authors:
designers:
contributors:
summary:
  - text-transform
---

## Кратко

Свойство `text-transform` позволяет трансформировать буквы в тексте. С помощью этого свойства можно сделать текст из одних заглавных или наоборот, из одних маленьких букв вне зависимости от формата исходного текста.

Это свойство важно. Вместо того, чтобы набирать текст одними заглавными буквами, лучше применить его. Поскольку в процессе жизни сайта тексты могут меняться, но их формат должен оставаться одинаковым. Нельзя гарантировать что контент-менеджер вставит текст, написанный заглавными, в нужное место.

## Пример

HTML

```html
<div class="parent">
  <h1 class="title">main title</h1>
  <p class="paragraph">Lorem ipsum ...</p>
</div>
```

Текст в заголовке написан маленькими буквами, но по дизайну, как это часто случается, требуется, чтобы заголовок отображался заглавными буквами. Используем свойство `text-transform`. Заодно зададим это же свойство для параграфа, но со значением `capitalize`, которое преобразует текст так, чтобы каждое новое слово начиналось с заглавной буквы.

CSS

```css
.title {
  text-transform: uppercase;
}

.paragraph {
  text-transform: capitalize;
}
```

<p class="codepen" data-height="265" data-theme-id="light" data-default-tab="html,result" data-user="solarrust" data-slug-hash="JzBZpE" style="height: 265px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;" data-pen-title="JzBZpE">
  <span>See the Pen <a href="https://codepen.io/solarrust/pen/JzBZpE">
  JzBZpE</a> by Alena (<a href="https://codepen.io/solarrust">@solarrust</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>

## Как это понять

Слово **transform** с английского языка переводится как трансформация — преобразование чего-то в нечто другое. Дословно можно перевести всё свойство как текст-трансформация. Или, говоря человеческим языком, трансформация текста.

## Как пишется

Пишем свойство `text-transform` и после двоеточия указываем одно из доступных значений. Значения обозначаются ключевыми словами:

- `uppercase` — все буквы в тексте, к которому применяется это значение, будут трансформированы в заглавные.
- `lowercase` — все буквы будут преобразованы в строчные, маленькие.
- `capitalize` — каждое слово начинается с прописной, заглавной буквы. Это часто необходимо при работе с текстами на английском языке.
- `full-width` — латинские буквы и иероглифы восточно-азиатских языков вписываются в квадрат.
- `full-size-kana` — латинские буквы и иероглифы восточно-азиатских языков вписываются в квадрат, но используются в рамках `<ruby>` элементов (например, когда вам нужно обозначить новый иероглиф, и сверху правила его чтения)
- `none` — значение по умолчанию, отменяет все трансформации.

## Подсказки

💡 Свойство трансформации нельзя анимировать при помощи свойства `transition` 😒

💡 Значение по умолчанию — `none`.

💡 При применении свойства `text-transform` меняется регистр текста. Это означает, что при копировании текст будет именно таким, как отображается на экране.

HTML

```html
<p class="text">мама мыла раму</p>
```

CSS

```css
.text {
  text-transform: uppercase;
}
```

<p class="codepen" data-height="265" data-theme-id="light" data-default-tab="css,result" data-user="solarrust" data-slug-hash="rRoexv" style="height: 265px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;" data-pen-title="rRoexv">
  <span>See the Pen <a href="https://codepen.io/solarrust/pen/rRoexv">
  rRoexv</a> by Alena (<a href="https://codepen.io/solarrust">@solarrust</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>

Если скопировать текст и вставить куда-нибудь в текстовое поле, то можно заметить, что ве буквы заглавные. А значит регистр исходного текста был изменён. А не просто поменялось внешнее отображение текста.

## В работе

{% include "authors/ABatickaya/in-work.njk" %}

🛠Довольно часто в макетах встречаются пункты меню, написанные заглавными буквами. Не нужно в разметке набирать текст заглавными. Скопируй текст из макета и примени свойство `text-transform`.

HTML

```html
<div class="element">
  <a href="#" class="logo">
    <img src="logo.png" alt="Company logo" />
  </a>
  <nav class="menu">
    <ul class="menu-list">
      <li class="menu-list__item">
        <a href="#" class="menu-list__link">Главная</a>
      </li>
      <li class="menu-list__item">
        <a href="#" class="menu-list__link">О компании</a>
      </li>
      <li class="menu-list__item">
        <a href="#" class="menu-list__link">Проекты</a>
      </li>
      <li class="menu-list__item">
        <a href="#" class="menu-list__link">Контакты</a>
      </li>
    </ul>
  </nav>
</div>
```

CSS

```css
...

.menu-list {
  text-transform: uppercase;
}

...
```

<p class="codepen" data-height="265" data-theme-id="light" data-default-tab="html,result" data-user="solarrust" data-slug-hash="RdEajr" style="height: 265px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;" data-pen-title="RdEajr">
  <span>See the Pen <a href="https://codepen.io/solarrust/pen/RdEajr">
  RdEajr</a> by Alena (<a href="https://codepen.io/solarrust">@solarrust</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async src="https://static.codepen.io/assets/embed/ei.js"></script>

Теперь если даже в меню добавится ещё пара пунктов, то они также будут отображаться заглавными буквами.

{% include "authors/ABatickaya/author.njk" %}
