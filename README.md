# vue-popup-components

Popup components for vue.js

### Описание проекта

Данный проект нацелен на создание модальных окон для vue.js.
Компоненты модальных окон представлены ввиеде отдельных js файлов в папке "vue-popups-components"
Каждый компонент представляет собой готовое модальное окно и готов для использования в в экземпляре vue.
Предпологается гибкая настройкеа компонентов путем передачи объекта конфигурации 'config' в props _(смотреть инструкцию по использованию)_

### Инструкция по использованию

1. Первое что надо сделать это [подключить vue.js](https://ru.vuejs.org/v2/guide/installation.html) _(в проекте используется vue 2)_
2. Дальше надо подключить или импортировать js файл с необходимым компонентом _(из папки "vue-popups-components")_
3. Перед [инициализацией экземпляра vue](https://ru.vuejs.org/v2/guide/instance.html) необходимо зарегистрировать указаный компонент _([ссылка на документацию vue.js](https://ru.vuejs.org/v2/guide/components-registration.html))_

`Vue.component('alias', componentName)`

Здесь componentName будет сответсвовать названию подключаемого js файла
'alias' — вы можете передать любое название пример:
`<simple-pop-up :config="popupConfig" :showpopup="showpopup" :key="showpopup"></simple-pop-up>`

```
  Vue.component('simple-pop-up', simplePopUp)
  const app = new Vue({...})
```

_(С полным примером можно ознакомится в файле index(for example).html)_
