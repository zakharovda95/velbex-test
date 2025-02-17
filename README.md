# Тестовое задание для программиста Vue.js

====
## Проект запускается из корня командой "npm run go" (фронт и бэк)
## Необходимо установить зависимости из корня, папки frontend и backend (или только frontend и backend, но придется запускать каждый проект из своего package.json)

====

### Описание

- Бэк - Express.js
- Фронт - Vue.js 3 + TypeScript (Composition API)
- БД - PostgreSQL (log: postgres, pas: 123, port 5432, db: velbex_test_table)

### Библиотеки

- Pinia - стейт менеджмент
- Lodash - работа с коллекциями данных
- Moment - форматирование даты и времени
- Axios - библиотека для XMLHR запросов

### Итоги

- Тестовое выполнил в соответствии с ТЗ:
  - Перпеиспользуемая таблица (папка components/sections/table-page/ файл TheTable.vue) из 4 колонок
  - Сортировка выполняется по всем полям кроме даты, сортировку выполняется только по текущей странице, выполняется на клиентской части приложения
  - Пагинация (папка components/UI/ файл UIPagination.vue) выполняется на клиентской части приложения
  - Фильтрация (папка components/sections/table-page/ файл FilterPanel.vue) состоит из 2 выпадающих списков и поля ввода.
  - Условия фильтрации для полей выполнены в соответствии с ТЗ
  - Приложение работает реактивно
  - Добавлены кнопки "Сброс" и "Рандом" для удобного тестирования
- При выполнении тестового задания я:
  - Старался проводить адекватный и логичный нейминг компонентов, переменных, классов, типов методов и функций
  - Старался сделать грамотную архитектуру приложения. Логику выносить в модули стора и классы, сохраняя внутри компонента только логику, необходимую для работы внутри самого компонента. Проводить адекватную декомпозицию и разбивку на модули.
  - Старался сделать приложение адаптивным
