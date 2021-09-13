# vue-popup-components

Popup components for vue.js

### Описание проекта

Данный проект нацелен на создание модальных окон для vue.js.
Компоненты модальных окон представлены ввиеде отдельных js файлов в папке "vue-popup-components"
Каждый компонент представляет собой готовое модальное окно и готов для использования в в экземпляре vue.
Предпологается гибкая настройкеа компонентов путем передачи объекта конфигурации 'config' в props _(смотреть инструкцию по использованию)_

### Инструкция по использованию

1. Первое что надо сделать это [подключить vue.js](https://ru.vuejs.org/v2/guide/installation.html) _(в проекте используется vue 2)_
2. Дальше надо подключить или импортировать js файл с необходимым компонентом _(из папки "vue-popup-components")_
3. Перед [инициализацией экземпляра vue](https://ru.vuejs.org/v2/guide/instance.html) необходимо зарегистрировать указаный компонент _([ссылка на документацию vue.js](https://ru.vuejs.org/v2/guide/components-registration.html))_

`Vue.component('alias', componentName)`

Здесь componentName будет сответсвовать названию подключаемого js файла
'alias' — вы можете передать любое название пример:

```
<div id="app">
  <simple-pop-up :config="popupConfig" :showpopup="showpopup" :key="showpopup"></simple-pop-up>
</div>
```

```
  Vue.component('simple-pop-up', simplePopUp)
  const app = new Vue({...})
```

_(С полным примером можно ознакомится в файле **index(for example).html**)_

4. Как можно заметить из примера выше, компонент принимает ряд обязательных параметров **props**:
   *config
   *showpopup
   _(количиство и типы парамтров могут отличатся в зависимости от компонента, с добавлением новых компонентов документация по каждому компаненту будет представлена в README в папке **"vue-popup-components"**. Но пердпологается что **config** и **showpopup** должны будут передаватя в каждый компонент)_
   4.1 **config** — объект с настройками для модального окна _(текст, стили, и т.д.)_
   Описание свойств:
   - title
   - text
   - closeOnClickBg
   - header
   - bodyTextCenter
   - styles
