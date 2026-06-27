Поиск шрифтов: [webfonts.pro](https://webfonts.pro/)

Owlcarousel: [owlcarousel2.github.io/OwlCarousel2](https://owlcarousel2.github.io/OwlCarousel2/)

CDN JS (подключение карусели и jQuery): [cdnjs.com](https://cdnjs.com/)

Трактор: ctrl + shift + Q

Пипетка: i

Размеры элемента: alt + ctrl

Дублировать слой: ctrl + D


Owlcarousel:

Подключаем карусель, плагин, тему


1. Смотрим, есть ли сетка в макете, чтобы придерживаться её:

   * Выделяем Desktop, переходим в Layout guide, просматриваем сетку

   ![1782358635992](image/doc/1782358635992.png)

   * Выбираем блок (header), прописываем отступы

   ![1782359470815](image/doc/1782359470815.png)

   * Определяем ограничение контейнера по ширине (max-width 1720)

   ![1782360263851](image/doc/1782360263851.png)

   * Добавляем отступы слева и справа (15px), прибавляем к ширине

   ```CSS

   .container {
   	max-width: 1750px;
     	margin: 0 auto; /* Центрируем контейнер */
   	padding: 0 15px;
   }
   ```

Далее даём блоку фон и прописываем минимальную высоту. Фон "дружелюбный", определяем пипеткой в Figma (клавиша i).

Или приём hio-header, когда шапка равна высоте экрана (чтобы не было скролла). Если контента будет больше - она будет больше по высоте, если меньше - меньше по высоте.

```CSS
.header {
	height: 100vh;
  	/* min-height: 1080px; */
  	background-color: #E0EDF1;
}
```

2. Раскидываем элементы шапки по краям (flex)

Задаём ограничение для текста по контентной части

![1782369202418](image/doc/1782369202418.png)

```CSS
.header__content {
  max-width: 1060px;
}
```

Работаем над отступами между абзацами текста, если их будет много

```CSS
.header__text {
    margin-bottom: 72px;

    font-size: 34px;

    color: var(--dark-grey);
}

.header__text p + p {
    margin-top: 1em;
}
```

Позиционирование псевдоэлемента (стрелки) у кнопки

```CSS
.btn::after {
    content: '';
    position: absolute;
    width: 32px;
    height: 32px;

    right: 24;
    top: 50%;
    transform: translateY(-50%);
}
```




# Создание блока

1. Создаём разметку элементов
2. Ограничиваем блоки (title, text и тд) по ширине
3. Описываем отступы сверху-снизу
