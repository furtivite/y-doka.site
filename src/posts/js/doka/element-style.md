---
title: "Element.style"
name: element-style
author: bespoyasov
co-authors:
designers:
contributors:
summary:
---

## Кратко

[`HTMLElement.style`](http://htmlelement.style) получает и устанавливает инлайновые стили элемента, то есть те, что записываются через атрибут `style`.

С помощью него можно управлять стилем элемента. [Специфичность](https://developer.mozilla.org/ru/docs/Web/CSS/Specificity) этого свойства такая же, как у атрибута `style`.

## Как пишется

Чтобы получить значения инлайновых стилей с помощью свойства `style`, мы можем записать:

```js
const element = document.getElementById("someElement")
const inlineStyles = element.style
```

В этом случае в значение `inlineStyles` запишется объект [`CSSStyleDeclaration`](https://developer.mozilla.org/ru/docs/Web/API/CSSStyleDeclaration), который будет в себе содержать все инлайновые стили, которые содержит элемент `element`.

Чтобы задать стили для элемента, мы можем использовать несколько способов. Либо через `cssText`, чтобы указать несколько свойств разом. (Тем же эффектом обладает установка стиля через `setAttribute()`.) Либо через отдельные свойства в `style.[propertyName]`.

```js
// Следующие две записи работают одинаково
// и устанавливают несколько стилей в одном выражении:
element.style.cssText = "color: blue; border: 1px solid black"
element.setAttribute("style", "color:red; border: 1px solid blue;")

// Следующая — устанавливает значение определенного свойства,
// оставляя другие значения стиля нетронутыми:
element.style.color = "blue"
```

## Как понять

[`HTMLElement.style`](http://htmlelement.style) — это механизм для работы со стилями на элементе. С его помощью можно управлять отображением элементов в «рантайме», то есть во время выполнения скрипта.

Этот механизм позволяет «перетирать» стили, описанные в CSS-таблицах, так как специфичность стилей в атрибуте `style` выше (за иcключением стилей с `!important`).

Чтобы указать значение конкретного CSS-свойства, мы можем использовать одноимённое отображение в `style`:

```js
// Если мы хотим указать color:
element.style.color = "red" // или 'rgb(255,0,0)', или '#f00'

// Если хотим указать font-family:
element.style.fontFamily = "Arial"
```

Обратите внимание, что имена свойств в `style.[propertyName]` записываются в camelCase, в отличие от CSS-свойств, которые записываются через дефис.

Таким образом `font-family` превращается в `fontFamily`, а, например, `background-color` — в `backgroundColor`.

При сомнениях в том, как правильно называется то или иное свойство, воспользуйтесь списком соответствий:

<details class="article__table article__table_all-half">
  <summary>CSS-свойства в JS-нотации</summary>

| CSS | JavaScript |
| --- | --- |
| [background]() | background |
| [background-attachment]() | backgroundAttachment |
| [background-color](/css/doka/background-color/) | backgroundColor |
| [background-image](/css/doka/background-image/) | backgroundImage |
| [background-position](/css/doka/background-position/) | backgroundPosition |
| [background-repeat](/css/doka/background-repeat/) | backgroundRepeat |
| [border](/css/doka/border/) | border |
| [border-bottom](/css/doka/border/#как-это-понять) | borderBottom |
| [border-bottom-color](/css/doka/border/#как-это-понять) | borderBottomColor |
| [border-bottom-style](/css/doka/border/#как-это-понять) | borderBottomStyle |
| [border-bottom-width](/css/doka/border/#как-это-понять) | borderBottomWidth |
| [border-color](/css/doka/border/#border-color) | borderColor |
| [border-left](/css/doka/border/#как-это-понять) | borderLeft |
| [border-left-color](/css/doka/border/#как-это-понять) | borderLeftColor |
| [border-left-style](/css/doka/border/#как-это-понять) | borderLeftStyle |
| [border-left-width](/css/doka/border/#как-это-понять) | borderLeftWidth |
| [border-right](/css/doka/border/#как-это-понять) | borderRight |
| [border-right-color](/css/doka/border/#как-это-понять) | borderRightColor |
| [border-right-style](/css/doka/border/#как-это-понять) | borderRightStyle |
| [border-right-width](/css/doka/border/#как-это-понять) | borderRightWidth |
| [border-style](/css/doka/border/#border-style) | borderStyle |
| [border-top](/css/doka/border/#как-это-понять) | borderTop |
| [border-top-color](/css/doka/border/#как-это-понять) | borderTopColor |
| [border-top-style](/css/doka/border/#как-это-понять) | borderTopStyle |
| [border-top-width](/css/doka/border/#как-это-понять) | borderTopWidth |
| [border-width](/css/doka/border/#border-width) | borderWidth |
| [clear]() | clear |
| [clip]() | clip |
| [color](/css/doka/color/) | color |
| [cursor](/css/doka/cursor/) | cursor |
| [display](/css/doka/display/) | display |
| [filter]() | filter |
| [float]() | cssFloat |
| [font]() | font |
| [font-family](/css/doka/font-family/) | fontFamily |
| [font-size](/css/doka/font-size/) | fontSize |
| [font-variant]() | fontVariant |
| [font-weight](/css/doka/font-weight/) | fontWeight |
| [height](/css/doka/height/) | height |
| [left]() | left |
| [letter-spacing](/css/doka/letter-spacing/) | letterSpacing |
| [line-height](/css/doka/line-height/) | lineHeight |
| [list-style]() | listStyle |
| [list-style-image](/css/doka/list-style-image/) | listStyleImage |
| [list-style-position](/css/doka/list-style-position/) | listStylePosition |
| [list-style-type](/css/doka/list-style-type/) | listStyleType |
| [margin](/css/doka/margin/) | margin |
| [margin-bottom](/css/doka/margin/#кратко) | marginBottom |
| [margin-left](/css/doka/margin/#кратко) | marginLeft |
| [margin-right](/css/doka/margin/#кратко) | marginRight |
| [margin-top](/css/doka/margin/#кратко) | marginTop |
| [overflow]() | overflow |
| [padding](/css/doka/padding/) | padding |
| [padding-bottom](/css/doka/padding/#кратко) | paddingBottom |
| [padding-left](/css/doka/padding/#кратко) | paddingLeft |
| [padding-right](/css/doka/padding/#кратко) | paddingRight |
| [padding-top](/css/doka/padding/#кратко) | paddingTop |
| [page-break-after]() | pageBreakAfter |
| [page-break-before]() | pageBreakBefore |
| [position]() | position |
| [stroke-dasharray]() | strokeDasharray |
| [stroke-dashoffset]() | strokeDashoffset |
| [stroke-width]() | strokeWidth |
| [text-align](/css/doka/text-align/) | textAlign |
| [text-decoration](/css/doka/text-decoration/) | textDecoration |
| [text-indent]() | textIndent |
| [text-transform](/css/doka/text-transform/) | textTransform |
| [top]() | top |
| [vertical-align](/css/doka/vertical-align/) | verticalAlign |
| [visibility](/css/doka/visibility/) | visibility |
| [width](/css/doka/width/) | width |

</details>

## В работе

В целом для управления стилями лучше использовать CSS. Можно использовать классы-модификаторы, чтобы придавать какие-то наборы стилей элементу.

Инлайновые стили имеют более высокую специфичность — их труднее переопределить, и это мешает нормальной работе со стилями элемента.

**Пример.** Мы пишем библиотеку, которая умеет красиво рисовать кнопки. Если мы установим цвет и размер кнопки с помощью инлайновых стилей, то пользователь библиотеки не сможет их легко поменять. Использовать такую библиотеку никто не захочет

Однако, есть некоторые случаи, когда манипуляция инлайн-стилями — это ок. Например, если мы хотим управлять отображением элемента точечно, и описывать это в CSS невозможно.

Представьте, что вы хотите сделать анимацию движения точки на экране так, чтобы движение было случайным. В CSS (пока что) этого сделать нельзя, только скриптами. И вот здесь изменение инлайновых стилей как раз кстати.

Для изменения таких стилей используется `HTMLElement.style`.

Используйте [`HTMLElement.style`](http://htmlelement.style), чтобы изменить или получить инлайновые стили элемента.

🛠 Чтобы переписать стиль элемента полностью, можно использовать `cssText` или `setAttribute`.

```js
element.style.cssText = "color: blue; border: 1px solid black"
element.setAttribute("style", "color:red; border: 1px solid blue;")
```

🛠 Чтобы обновить значение конкретного свойства, а остальные оставить нетронутыми, используйте `style.[propertyName]`:

```js
element.style.color = "red"
element.style.fontFamily = "Arial"
```

🛠 Чтобы сбросить значение, присвойте ему `null`.

```js
// Если у элемента прописано style="background-color: red; color: black;",
// то такая запись:
element.style.backgroundColor = null

// ...оставит только style="color: black;".
```

🛠 Численным свойствам, таким как `margin`, `padding`, `border-width` и другим, [следует](https://developer.mozilla.org/ru/docs/Web/API/HTMLElement/style#Получение_стиль-информации) указывать не только значение, но и единицу измерения:

```js
element.style.marginTop = "50px"
```

{% include "authors/bespoyasov/author.njk" %}
