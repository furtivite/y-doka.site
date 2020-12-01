---
title: Number.isNaN()
name: number-is-nan
author: vindi-r
co-authors:
designers:
contributors:
summary:
---

## Кратко

Существуют ситуации, когда результат математической обработки не может быть получен.

Например `Math.sqrt(-9)` или `parseInt('text')` и результатом будет `NaN`

По спецификации JavaScript результат сравнения NaN с чем угодно (даже с самим собой) будет false. Поэтому был создан специальный метод для проверки `isNaN` 😎, а потом и `Number.isNaN`

## Как пишется

```jsx
let result = Math.sqrt(-9) // NaN
console.log(result === NaN) // false
console.log(Number.isNaN(result)) // true
```

## Как это понять

NaN расшифровывается как Not a Number. Он относится к числовому типу, если сделать `typeof NaN` , то вернется строка `number`. Его нельзя ни с чем сравнить, и поэтому проверять нужно отдельным способом.

Для проверки рекомендуется применять `Number.isNaN`. Есть похожий второй метод `isNaN`, но он работает не всегда так, как ожидается и возвращает true и при значениях, отличных от NaN. Например:

```jsx
isNaN(undefined) // напечатает true
Number.isNaN(undefined) //напечатает false
```

## В работе

{% include "authors/vindi-r/in-work.njk" %}

🛠При анализе ввода пользователя всегда нужно проверять результаты вычислений, иначе пользователь вместо расчета — например «Итого» в корзине увидит непонятные для себя символы. Вот, к примеру, очень приятная цена ✈️

![/assets/images/posts/number-is-nan/Number.isNaN().png](</assets/images/posts/number-is-nan/Number.isNaN().png>)

Попробуй имитировать ошибку и ввести в поле что-то помимо числа скидки, без проверки тоже получится NaN:

<p class="codepen" data-height="265" data-theme-id="light" data-default-tab="js,result" data-user="vindi-r" data-slug-hash="XQPBGG" style="height: 265px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;" data-pen-title="isNaN - в работе">
  <span>See the Pen <a href="https://codepen.io/vindi-r/pen/XQPBGG">
  isNaN - в работе</a> by vindi-r (<a href="https://codepen.io/vindi-r">@vindi-r</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async src="https://static.codepen.io/assets/embed/ei.js"></script>

{% include "authors/vindi-r/author.njk" %}
