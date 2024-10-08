# Проект: Место

## Часть третья - продолжение JavaScript

*Функциональность проекта:*
* редактирование профиля
* создание новой карточки
* удаление карточек
* просмотр увеличенного изображения при нажатии на картинку карточки


*Особенности проекта:*
* файловая структура выполнена по методологии БЭМ
* вёрстка адптивная, минимальное разрешение 320px, максимальное - 1280px
* карточки создаются при загрузке страницы при помощи скрипта
* для плавного открытия/закрытия модальных окон свойство display: none не подходит. Пользуемся свойством visiblity.

*Выводы по результатам ревью:*
* для текстовых и контентных блоков нежелательно задавать высоту - пользуемся технологии выравнивания (отступы, высота строки) и построения сетки (флекс/грид)
* для секций и кнопок без названия используем aria-label
* закрытие модалок не по evt.target.closest('.popup'), но с помощью передачи его функции, удаляющей класс. Для чего нужно пройтись по коллекции кнопок закрытия модалок на странице и для каждой найти ближайшее окно (popup), после чего каждой кнопке назначить слушатель клика и обработчик () => closePopup(popupName). Так как закрытие может быть инициировано клавиатурой и тогда closest не будет.
* оказывается, для <img> можно задать background - иногда это актуально для читаемости alt-текста, и, в данном случае, чтобы иконка удаления карточки не терялась.


Посмотреть работу: https://razumtsev.github.io/mesto-bms/
