---
title: "return"
name: return
author: vindi-r
co-authors:
designers:
contributors:
summary:
---

## Кратко

Функция возвращает результат, который будет передан в вызвавший её код. Для этого и используется ключевое слово `return`

## Пример

Примеры использования return. Функция проверки возраста на совершеннолетие и функция создания строки заданной длины со случайным содержимым — введи произвольные числа и попробуй 😎

<p class="codepen" data-height="265" data-theme-id="light" data-default-tab="js,result" data-user="vindi-r" data-slug-hash="eXLXBz" style="height: 265px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;" data-pen-title="return() Кратко">
  <span>See the Pen <a href="https://codepen.io/vindi-r/pen/eXLXBz">
  return() Кратко</a> by vindi-r (<a href="https://codepen.io/vindi-r">@vindi-r</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>

## Как пишется

`return` используется только в функциях:

```js
// Этот код приведет к ошибке, так как не является функцией
var result = 42
if (result > 10) {
  return true
}
return false
```

```js
//А этот код верный
function isAdult(age) {
  return age > 18
}
```

## Как это понять

Определенный код «сгруппирован» и объединен в функцию, например проверка — целое число или нет:

### Код функции:

```js
function isInteger(value) {
  if (undefined === value || null === value) {
    return false
  }
  return value % 2 == 0
}
```

### Пример:

<p class="codepen" data-height="265" data-theme-id="light" data-default-tab="js,result" data-user="vindi-r" data-slug-hash="jJdQqz" style="height: 265px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;" data-pen-title="return() как это понять">
  <span>See the Pen <a href="https://codepen.io/vindi-r/pen/jJdQqz">
  return() как это понять</a> by vindi-r (<a href="https://codepen.io/vindi-r">@vindi-r</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>

**Для возврата значения используется директива `return`**

Она может находиться в любом месте функции. Как только до неё доходит управление — функция завершается и значение передается обратно.

Писать `return` в функции не обязательно. Рассмотрим пример:

```js
function notify(msg, type) {
  if (type === "error") {
    alert("ОШИБКА:" + msg)
  }
  alert(msg)
}
```

Такой функции нечего возвращать, она служит только для группировки набора команд.

Несмотря на отсутствие return, такая функция будет возвращать `undefined`, будто бы в ней последней строчкой написано `return undefined;`

Ниже пример, который показывает что это действительно так:

```js
function notify(msg, type) {
  if (type === "error") {
    alert("ОШИБКА:" + msg)
  }
  alert(msg)
}
function notifyFull(msg, type) {
  if (type === "error") {
    alert("ОШИБКА:" + msg)
  }
  alert(msg)
  return undefined
}
var a = notify("Сообщение")
var b = notifyFull("Сообщение")
alert(a === b)
```

## В работе

{% include "authors/vindi-r/in-work.njk" %}

🛠Благодаря return можно использовать результат работы функции где угодно, например в условиях или формировании новых значений. Пример ниже использует функцию с return для проверки условия — действительно ли счет игрока больше 100:

```js
function checkScore(score) {
  return score > 100
}
var s1 = 10
var s2 = 15
var s3 = 20
if (checkScore(s1)) alert("игрок 1 проходит")
if (checkScore(s2)) alert("игрок 2 проходит")
if (checkScore(s3)) alert("игрок 3 проходит")
```

Чем вот такой вариант:

```js
var s1 = 10
var s2 = 15
var s3 = 20
if (s1 > 100) alert("игрок 1 проходит")
if (s2 > 100) alert("игрок 2 проходит")
if (s3 > 100) alert("игрок 3 проходит")
```

**Почему эффективнее?**

- если условие проверки очков изменится — его придется писать в нескольких местах
- если условие будет состоять более чем из одной проверки? Тогда if усложнится и его будет сложнее понимать. Функцию, дающую ответ true или false легче читать в условном операторе.

Необходимо помнить, если выполнение функции завершилось не через return, то возвращаемое значение будет `undefined`;

Самый простой способ этого избежать — **всегда** добавлять return с каким-либо значением перед концом функции.

<p class="codepen" data-height="265" data-theme-id="light" data-default-tab="html,result" data-user="vindi-r" data-slug-hash="oVPReL" style="height: 265px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;" data-pen-title="return() в работе, неявный return undefined">
  <span>See the Pen <a href="https://codepen.io/vindi-r/pen/oVPReL">
  return() в работе, неявный return undefined</a> by vindi-r (<a href="https://codepen.io/vindi-r">@vindi-r</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>

- Еще `return` останавливает выполнение функции. Обычно это ожидаемое поведение, но если про это забыть — возможны баги.

<p class="codepen" data-height="265" data-theme-id="light" data-default-tab="js,result" data-user="vindi-r" data-slug-hash="aMagpW" style="height: 265px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;" data-pen-title="return() в работе, остановка при return">
  <span>See the Pen <a href="https://codepen.io/vindi-r/pen/aMagpW">
  return() в работе, остановка при return</a> by vindi-r (<a href="https://codepen.io/vindi-r">@vindi-r</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async src="https://static.codepen.io/assets/embed/ei.js"></script>

{% include "authors/vindi-r/author.njk" %}
