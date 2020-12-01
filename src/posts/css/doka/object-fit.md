---
title: object-fit
name: object-fit
author: ABatickaya
co-authors:
designers:
contributors:
summary:
  - стили картинок
  - положение картинок
  - object
  - fit
  - img
---

## Кратко

Свойство, которое позволяет управлять тем, как картинка `<img>` или видео `<video>` будет подстраиваться под заданные размеры.

По своему поведению очень похоже на свойство [`background-size`](/posts/css/doka/background-size) для фоновых изображений.

## Пример

Представим, что у нас есть картинка размером 500 на 150 пикселей:

```html
<img
  class="image"
  src="https://picsum.photos/id/1044/500/150"
  alt="Картинка из примера про object-fit"
/>
```

По дизайну картинка должна занимать 250 на 250 пикселей. Если мы просто зададим эти размеры, то картинка сильно деформируется.

```css
.parent {
  width: 250px;
  height: 250px;
  border: 2px solid blue; /* Для наглядности */
}
```

<p class="codepen" data-height="265" data-theme-id="dark" data-default-tab="result" data-user="solarrust" data-slug-hash="xxOWxNW" style="height: 265px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;" data-pen-title="object-fit. ex1">
  <span>See the Pen <a href="https://codepen.io/solarrust/pen/xxOWxNW">
  object-fit. ex1</a> by Alena (<a href="https://codepen.io/solarrust">@solarrust</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>

Выглядит не очень. Но тут на помощь приходит свойство `object-fit`, которое позволит нам сохранить пропорции исходного изображения при _подстройке_ под нужные нам размеры.

```css
.image {
  /* ---//--- */
  object-fit: cover;
}
```

Картинка не деформировалась, подстроилась под нужные размеры. Другой вопрос, что на ней теперь почти ничего не видно 😅 , но это мелочи.

<p class="codepen" data-height="265" data-theme-id="dark" data-default-tab="result" data-user="solarrust" data-slug-hash="OJXvPPJ" style="height: 265px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;" data-pen-title="object-fit. ex2">
  <span>See the Pen <a href="https://codepen.io/solarrust/pen/OJXvPPJ">
  object-fit. ex2</a> by Alena (<a href="https://codepen.io/solarrust">@solarrust</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>

## Как пишется

Свойство задаётся для самого тега `<img>`, не для родителя. Пишем свойство, а в качестве значения задаём одно из ключевых слов. В отличие от [`background-size`](/posts/css/doka/background-size) мы не можем задать конкретные размеры в качестве значения. 🤔

Доступные значения:

- `fill` — картинка полностью вписывается в указанные размеры без соблюдения собственных пропорций. Часто это приводит к ощутимым деформациям.
- `contain` — картинка подстроится под заданные размеры так, чтобы поместится внутри целиком без нарушения пропорций.
- `cover` — картинка без нарушения пропорций заполнит всю доступную область, обрезая всё ненужное.
- `none` — значение по умолчанию, картинка отображается без изменения пропорций или размеров.
- `scale-down` — браузер сравнивает размеры картинки со значением `none` и со значением `contain` и выбирает одно из этих значений, деформируя картинку соответствующим образом. Сложно объяснить, посмотрите демку 🥴

<p class="codepen" data-height="265" data-theme-id="dark" data-default-tab="result" data-user="solarrust" data-slug-hash="zYBWxWJ" style="height: 265px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;" data-pen-title="object-fit. demo">
  <span>See the Pen <a href="https://codepen.io/solarrust/pen/zYBWxWJ">
  object-fit. demo</a> by Alena (<a href="https://codepen.io/solarrust">@solarrust</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async src="https://static.codepen.io/assets/embed/ei.js"></script>

Советую поизменять размер окна браузера чтобы наглядно увидеть как картинки подстраиваются (или нет) под заданные размеры.

## Как это понять

Дословно свойство переводится как «объект подходит», что вполне точно отражает принцип его работы. Свойство управляет тем, как подгружаемая картинка будет вписываться в рамки заданных размеров.

## Подсказки

💡Задавайте свойство самой картинке `<img>`, не родительскому контейнеру.

💡Работает только если картинке задан хотя бы один размер: ширина или высота. Иначе браузер не понимает в какую область нужно вписать картинку.

💡Свойство и его значение не наследуется. Хотя я бы посмотрела на то, как вы вложите что-нибудь внутрь картинки 0_о

💡Не анимируется 😒

💡Классно работает в сочетании со свойством [object-position](/posts/css/doka/object-position).

## В работе

🛠 Самое полезное из всех доступных значений, на мой взгляд, значение `cover`. Оно позволяет имитировать поведение фонового изображения для элементов `img` или `video`. В последнем случае это особенно актуально потому что нет других способов красиво адаптировать видос под любой размер экрана без нарушения пропорций по дороге.

{% include "authors/ABatickaya/author.njk" %}
