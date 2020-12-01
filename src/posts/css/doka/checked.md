---
title: :checked
name: checked
author: ABatickaya
co-authors:
designers:
contributors:
summary:
  - псевдокласс
  - :checked
---

## Кратко

Псевдокласс, который активизируется когда пользователь отмечает чекбокс или выбирает одну из радио-кнопок.

С его помощью удобно стилизовать эти элементы в их активном состоянии.

## Пример

Будем менять обводку и цвет текста у чекбокса когда он отмечен:

```html
<label>
  <input type="checkbox" />
  <span class="input-text"> Чекбокс (нажми!) </span>
</label>
```

```css
/* розовая обводка в дефолтном состоянии */
input[type="checkbox"] {
  outline: 2px solid pink;
}

/* обводка становится зелёной когда четбокс кликнули */
input[type="checkbox"]:checked {
  outline: 2px solid green;
}

/* цвет текста меняется на красны */
input[type="checkbox"]:checked ~ .input-text {
  color: red;
}
```

<p class="codepen" data-height="265" data-theme-id="light" data-default-tab="html,result" data-user="solarrust" data-slug-hash="xxVEqWj" style="height: 265px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;" data-pen-title=":checked">
  <span>See the Pen <a href="https://codepen.io/solarrust/pen/xxVEqWj">
  :checked</a> by Alena (<a href="https://codepen.io/solarrust">@solarrust</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>

## Как пишется

После селектора, который выбирает элемент чекбокса или радио-кнопки ставим двоеточие и пишем ключевое слово `checked`.

На Windows можно менять также внешний вид выбранного пункта (`option`) выпадающего списка (`select`) с помощью `:checked`, но работает это только в Chrome. Так что ждём и надеемся, но особо не используем.

## Как это понять

Браузер присваивает чекбоксу или радио-кнопке псевдокласс `:checked` когда они отмечены. Мы можем это использовать для стилизации элемента на свой вкус.

## Подсказки

💡 Этот псевдокласс есть только у тех элементов, которые можно _отметить_: `input type=[checkbox]`, `input type="radio"]`.

💡 По задумке должен работать и с `option`, но поскольку выпадающий список сильно отличается от системы к системе и от браузера к браузеру, то пока работает толь в Chrome на Windows.

## В работе

🛠 Очень часто этот класс пригождается, когда вы делаете какой-то нестандартный элемент управления на основе чекбокса / радиокнопок. В этом случае стандартные элементы скрываются, но их поведение, в частности псевдокласс `:checked` позволяет что-то переключать вообще без JavaScript.

Например, вот это выпадающее меню реализовано на чистом HTML с использованием трюка в чекбоксом.

<p class="codepen" data-height="265" data-theme-id="light" data-default-tab="css,result" data-user="solarrust" data-slug-hash="WNwGpPG" style="height: 265px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;" data-pen-title="Dropdown menu with checkbox">
  <span>See the Pen <a href="https://codepen.io/solarrust/pen/WNwGpPG">
  Dropdown menu with checkbox</a> by Alena (<a href="https://codepen.io/solarrust">@solarrust</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async src="https://static.codepen.io/assets/embed/ei.js"></script>

{% include "authors/ABatickaya/author.njk" %}
