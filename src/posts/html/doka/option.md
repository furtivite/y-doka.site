---
title: "<option>"
name: option
author: ezhkov_d
co-authors:
designers:
contributors:
summary:
  - тэг
  - тег
  - пункт
  - опшен
  - <option>
  - выбор
---

## Кратко

Тег `<option>` используется в интерактивных элементах управления для вёрстки одиночного пункта списка.

## Пример

```html
<form>
  <label for="city-select">Ваш город</label>
  <select name="city" id="city-select">
    <option value="">-- Выберите город --</option>
    <option value="petersburg">Санкт-Петербург</option>
    <option value="moscow">Москва</option>
    <option value="kazan">Казань</option>
    <option value="samara">Самара</option>
    <option value="perm">Пермь</option>
    <option value="novosibirsk">Новосибирск</option>
  </select>
</form>
```

<p class="codepen" data-height="265" data-theme-id="dark" data-default-tab="html,result" data-user="ezhkov" data-slug-hash="dypzXYW" style="height: 265px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;" data-pen-title="&amp;lt;select&amp;gt;">
  <span>See the Pen <a href="https://codepen.io/ezhkov/pen/dypzXYW">
  &lt;select&gt;</a> by Denis Ezhkov (<a href="https://codepen.io/ezhkov">@ezhkov</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>

## Подробно

Тегом `<option>` размечается каждый элемент выпадающего списка [`<select>`](/html/doka/select/), группы опций [`<optgroup>`](/html/doka/optgroup/) или перечня [`<datalist>`](/html/doka/datalist/).

## Атрибуты

### `disabled`

Атрибут булевого типа. Если задан, то пункт списка нельзя выбрать. Часто браузеры выделяют такой элемент управления серым цветом, и на нём не срабатывают события клика или фокуса. Даже если атрибут не задан, элемент всё равно может быть отключён, если находится внутри тега [`<optgroup>`](/html/doka/optgroup/) с заданным атрибутом `disabled`.

### `label`

Значение этого атрибута задаёт текст пункта в списке. Если атрибут не задан, то в качестве значения берётся текстовое содержимое тега `<option>`.

```html
<select name="city" id="city-select">
  <option value="petersburg" selected label="Ленинград">Санкт-Петербург</option>
  <option value="samara" label="Куйбышев">Самара</option>
  <option value="volgograd" label="Сталинград">Волгоград</option>
  <option value="ekaterinburg" label="Свердловск">Екатеринбург</option>
</select>
```

В примере выше, несмотря на то, что задано текстовое содержимое тега `<option>`, в выпадающем списке отображаются значения из атрибутов `label`.

### `selected`

Атрибут булевого типа. Если он задан, это означает, что пункт списка будет выбран по умолчанию. Если у выпадающего списка [`<select>`](/html/doka/select/) не задан атрибут `multiple`, то атрибут `selected` может быть задан только одному тегу `<option>` в пределах этого списка. Если тегу [`<select>`](/html/doka/select/) задан атрибут `multiple`, то атрибут `selected` может быть задан любому количеству тегов `<option>` в пределах списка.

### `value`

Если выбран какой-то пункт списка, то при отправке формы на сервер будет передано значение атрибута `value` этого пункта. Если атрибут не задан, то при отправке будет использоваться текстовое содержимое тега `<option>`.

<p class="codepen" data-height="265" data-theme-id="dark" data-default-tab="html,result" data-user="ezhkov" data-slug-hash="RwGLYaB" style="height: 265px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;" data-pen-title="&amp;lt;option&amp;gt; attributes">
  <span>See the Pen <a href="https://codepen.io/ezhkov/pen/RwGLYaB">
  &lt;option&gt; attributes</a> by Denis Ezhkov (<a href="https://codepen.io/ezhkov">@ezhkov</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>

## В работе

К сожалению браузер не предоставляет никаких средств для нормальной стилизации элемента `<option>`, и это доставляет очень много головной боли фронтенд-разработчикам :( Стиль элементов `<option>` можно поменять, только если тегу [`<select>`](/html/doka/select/) задан атрибут `multiple`. Тогда список целиком становится частью потока страницы, и мы имеем возможность применять стили к его элементам:

<p class="codepen" data-height="265" data-theme-id="dark" data-default-tab="html,result" data-user="ezhkov" data-slug-hash="PoGOowj" style="height: 265px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;" data-pen-title="&amp;lt;select multiple&amp;gt; styling">
  <span>See the Pen <a href="https://codepen.io/ezhkov/pen/PoGOowj">
  &lt;select multiple&gt; styling</a> by Denis Ezhkov (<a href="https://codepen.io/ezhkov">@ezhkov</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async src="https://cpwebassets.codepen.io/assets/embed/ei.js"></script>
