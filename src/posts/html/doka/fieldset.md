---
title: "<fieldset>"
name: fieldset
author: Roman_Ganin
co-authors:
designers:
contributors:
summary:
  - fieldset
  - <fieldset>
  - тэг
  - тег
  - форма
---

## Кратко

Тег `<fieldset>` группирует элементы формы (поля ввода `<input>` / `<textarea>`, выпадающие списки `<select>` и другие) в блок с характерным выделением границ. Опционально с помощью тега `<legend>` внутри `<fieldset>` можно задать заголовок для создаваемой группы (он может быть только один и обязательно должен идти первым вложенным элементом).

## Пример

```html
<form>
  <fieldset>
    <legend>Прозвище Дракса из «Стражей Галактики»?</legend>
    <label>
      <input type="radio" name="answer" value="Exterminator">
      Уничтожитель
    </label>
    <label>
      <input type="radio" name="answer" value="Destroyer">
      Разрушитель
    </label>
    <label>
      <input type="radio" name="answer" value="Accuser">
      Обвинитель
    </label>
    <label>
      <input type="radio" name="answer" value="Sweet-tooth">
      Сладкоежка
    </label>
  </fieldset>
</form>
```

## Как это понять

В сложный формах количество контролов может устрашающе перегружать интерфейс и правильным решением в этом случае будет группировка смысловых элементов.

## Как пишется

```html
<fieldset>…</fieldset>
```

Для добавления подписи внутри `<fieldset>` следует использовать `<legend>`:

```html
<fieldset>
  <legend>Заголовок для группы</legend>
  …
</fieldset>
```

## Атрибуты

- `disabled` — блокирует все контролы __внутри__ тега (как будто каждому из них указали этот атрибут — очень удобно);
- `form` — связывает контролы __внутри__ тега с формой (будто они располагаются внутри) — для этого в значение атрибута следует указать `id` формы;
- также для `<fieldset>` доступны все «Глобальные атрибуты».

## Подсказки

💡 Самое удобное в использовании `<fieldset>` — возможность заблокировать __все__ вложенные контролы внутри тега одним атрибутом `disabled`:

<p class="codepen" data-height="347" data-theme-id="light" data-default-tab="result" data-user="Realetive" data-slug-hash="RwGNEmp" data-preview="true" style="height: 347px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;" data-pen-title="fieldset demo">
  <span>See the Pen <a href="https://codepen.io/Realetive/pen/RwGNEmp">
  fieldset demo</a> by Roman Ganin (<a href="https://codepen.io/Realetive">@Realetive</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async src="https://static.codepen.io/assets/embed/ei.js"></script>

## В работе

Чтобы убрать (или стилизовать рамку), используется «CSS-семейство свойств» border: `border`, `border-radius` и других:

<p class="codepen" data-height="573" data-theme-id="light" data-default-tab="result" data-user="Realetive" data-slug-hash="eYdmXwV" data-preview="true" style="height: 573px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;" data-pen-title="&amp;lt;legend&amp;gt;">
  <span>See the Pen <a href="https://codepen.io/Realetive/pen/eYdmXwV">
  &lt;legend&gt;</a> by Roman Ganin (<a href="https://codepen.io/Realetive">@Realetive</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async src="https://static.codepen.io/assets/embed/ei.js"></script>
