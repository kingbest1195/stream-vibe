В файле TabsNavigation.scss в рамках селектора .tabs-navigation::before {} в значении свойства border-radius нужно использовать переменную --border-radius-m.
В файле Accordion.jsx в разметке для div с классом accordion\_\_content в значении атрибута role допущена опечатка, нужно указать definition.
Для корректной обработки изображений, видео и фавионок, путь к которым мы в формате строки указывали у элементов <img /> и <video /> в src, а так же у элементов <link /> в href, стоит поменять схему работы:
В папке src/assets/ создаём новую папку favicons.
В эту новую папку из папки public/ переносим следующие файлы: apple-touch-icon.png, favicon-16x16.png, favicon-32x32.png и site.webmanifest.
Из папки public/ папки devices, rating, video-posters, а так же файлы logo.svg и play.svg переносим в папку src/assets/images/.
Из папки public/ папку videos переносим в папку src/assets/.
В файле global.jsx к текущим импортам в конце добавляем:
import appleTouchIcon from '@/assets/favicons/apple-touch-icon.png'
import favicon32 from '@/assets/favicons/favicon-32x32.png'
import favicon16 from '@/assets/favicons/favicon-16x16.png'
import manifest from '@/assets/favicons/site.webmanifest'

В разметке у следующих элементов:

<link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
<link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
<link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
<link rel="manifest" href="/site.webmanifest" />

Заменяем значения href на соответствующие новым импортированным сущностям:

<link rel="apple-touch-icon" sizes="180x180" href={appleTouchIcon} />
<link rel="icon" type="image/png" sizes="32x32" href={favicon32} />
<link rel="icon" type="image/png" sizes="16x16" href={favicon16} />
<link rel="manifest" href={manifest} />

В файле Devices.jsx к текущим импортам в конце добавляем:
import deviceImgSrc_1 from '@/assets/images/devices/1.svg'
import deviceImgSrc_2 from '@/assets/images/devices/2.svg'
import deviceImgSrc_3 from '@/assets/images/devices/3.svg'
import deviceImgSrc_4 from '@/assets/images/devices/4.svg'
import deviceImgSrc_5 from '@/assets/images/devices/5.svg'
import deviceImgSrc_6 from '@/assets/images/devices/6.svg'

В рамках переменной deviceItems для каждого imgSrc заменяем значение на соответствующее одному из новых импортов:

{
title: '...',
description: '...',
imgSrc: deviceImgSrc_1,
},
{
title: '...',
description: '...',
imgSrc: deviceImgSrc_2,
},

И так далее.

В файле Hero.jsx к текущим импортам в конце добавляем import playImgSrc from '@/assets/images/play.svg', затем в разметке для img с классом hero\_\_play-button-image в значении src указываем playImgSrc.

В файле Logo.jsx к текущим импортам в конце добавляем import logoImgSrc from '@/assets/images/logo.svg', затем в разметке для img с классом logo\_\_image в значении src указываем logoImgSrc.

В файле RatingView.jsx к текущим импортам в конце добавляем:

import starsUnfilledImgSrc from '@/assets/images/rating/stars_unfilled.svg'
import starsFilledImgSrc from '@/assets/images/rating/stars_filled.svg'

Затем в разметке для элементов img с классами rating-view**stars-unfilled и rating-view**stars-filled в значениях src указываем starsUnfilledImgSrc и starsFilledImgSrc в соответствии с именем класса.

В файле src/components/Seasons/seasonItems.js в начале добавляем:

import videoExampleSrc from '@/assets/videos/example.mp4'
import videoPosterSrc from '@/assets/images/video-posters/1.jpg'

Затем в рамках переменной seasonItems через массовую замену обновляем значения свойств src и poster у поля video, чтобы получилось так:

episodes: [
{
number: '...',
title: '...',
description: '...',
duration: '...',
video: {
src: videoExampleSrc,
poster: videoPosterSrc,
},
},

В файле Section.jsx для корневого элемента разметки нужно поменять атрибут aria-label на aria-labelledby.
В файле Header.scss для более точного позиционирования меню навигации нужно:
Для header**inner правила display: flex и justify-content: space-between обернуть в миксин медиавыражения tablet.
Для header**inner (вне тела миксина медиавыражения, выше предыдущей правки) добавить правила display: grid и grid-template-columns: 1fr auto 1fr.
Для header**actions добавить миксин медиавыражения tablet-above с правилом justify-content: end внутри.
В файле Accordion.scss для псевдоэлементов ::before и ::after к accordion**title и для accordion**arrow стоит поменять значение свойства transition-duration с var(--transition-duration) на var(--transition-duration-longer), чтобы "синхронизировать" изменение состояния с элементом accordion**content.
В файле MovieCard.scss для movie-card**body стоит убрать свойство align-items, а значение свойства column-gap поменять с 8px на 3px, чтобы внутренним элементам хватало пространства на определённых диапазонах и чтобы их высота была одинаковой.
В файле Support.scss в селекторе .support {} нужно поменять миксин медиа выражения mobile-above на tablet-above, а в селекторе .support**form {} поменять mobile-s-above на mobile-above. А в файле Select.scss в комбинированном селекторе .select**original-control, .select**button {} значение свойства min-width нужно поменять на 75px. Таким образом селект в форме не будет срезан при адаптиве.
Добавляем альтернативное поведение шапки страницы при скролле для старых браузеров, не поддерживающих CSS-свойство animation-timeline. В файле Header.scss набор свойств внутри @keyframes scrolling-header { to { ... } } стоит вынести в миксин scrolling-header-styles, локально объявленный до строки с @keyframes. Затем нужно использовать этот миксин внутри @keyframes scrolling-header { to { ... } } вместо имеющегося набора свойств. Наконец ниже @keyframes добавляем директиву @supports со следующим кодом:
.header {
position: sticky;
z-index: 100;
top: 0;
width: 100%;
padding-block: fluid(22, 14);
border-bottom: var(--border-width-s) solid transparent;
animation-name: scrolling-header;
animation-fill-mode: both;
animation-timeline: scroll();
animation-range: 0 100px;

@mixin scrolling-header-styles {
padding-block: 10px;
background-color: var(--color-black-08);
border-color: var(--color-black-15);
}

@keyframes scrolling-header {
to {
@include scrolling-header-styles;
}
}

@supports(not (animation-timeline: scroll())) {
@include scrolling-header-styles;

    position: sticky !important;

}

&.is-fixed {
position: fixed;
}

// ...
}

В файле Hero.scss для .hero**pano {} можно убрать лишние переменные параметров фона и по итогу упростить код до следующего:
&**pano {
--heroGradientColorStart: var(--color-black-08);
--heroGradientColorEnd: transparent 67.5%;

    @include flex-center;

    flex-grow: 1;
    padding-top: fluid(195, 150);
    padding-bottom: fluid(131, 50);
    background:
      linear-gradient(
        to bottom,
        var(--heroGradientColorStart),
        var(--heroGradientColorEnd)
      ),
      linear-gradient(
        to top,
        var(--heroGradientColorStart),
        var(--heroGradientColorEnd)
      ),
      url('@/assets/images/hero/bg.png') 50%/cover;

}

В файле PlansComparison.jsx для заголовочной ячейки таблицы с текстом Standard и Popular (обёрнутый в <Badge>) стоит добавить после Standard два символа неразрывного пробела (&nbsp;), чтобы получилось так: <>Standard&nbsp;&nbsp;<Badge mode="accent">Popular</Badge></>. Таким образом промежуток по горизонтали будет соответствовать макету.
В файле Icon.scss стоит добавить svg { width: 100%; height: 100% }, чтобы иконки корректно рендерились в Safari.
В файле Select.jsx для обеспечения лучшего accessibility:
Выражение:
const selectedOption = options.find(({ isSelected }) => isSelected) ?? options[0]

Нужно заменить на:

const selectedOptionIndex = options.findIndex(({ isSelected }) => isSelected) ?? options[0]
const selectedOption = options[selectedOptionIndex]

const getOptionId = (index) => {
return `${id}-option-${index}`
}

Для <select> с классом select**original-control добавить проп aria-hidden={true}.
Для <div> с классом select**button добавить проп aria-activedescendant={getOptionId(selectedOptionIndex)}.
Для <div> с классом select\_\_option заменить id={`${id}-option-${index}`} на id={getOptionId(index)}.
В файле SelectCollection.js для обеспечения лучшего accessibility:
Между полями stateClasses и initialState добавляем поле a11yAttributes = { activeDescendant: 'aria-activedescendant' }.
В методе updateButton выражение:
this.buttonElement.ariaActiveDescendant = this.optionElements[currentOptionIndex].id

Нужно заменить на:

this.buttonElement.setAttribute(
this.a11yAttributes.activeDescendant,
this.optionElements[currentOptionIndex].id
)

Метод updateTabIndexes нужно переименовать в toggleA11yVisibility (в т. ч. в местах вызова метода).
В методе toggleA11yVisibility добавляем 2 новые инструкции:
this.originalControlElement.ariaHidden = !isMobileDevice
this.buttonElement.ariaHidden = isMobileDevice

В файле Table.scss для table {} стоит добавить width: 100%, чтобы при недостаточном количестве контента таблица стремилась занять всё доступное ей пространство.
В файле Table.scss вместо одной локально объявленной переменной --tableBorder: var(--border); стоит объявить несколько:
--tableBorderWidth: var(--border-width-s);
--tableBorderColor: var(--color-black-15);
--tableBorder: var(--tableBorderWidth) solid var(--tableBorderColor);

Правило border-collapse: separate; удаляем и добавляем:

box-shadow: 0 0 0 var(--tableBorderWidth) var(--tableBorderColor);
overflow: hidden;

Так мы получим сплошные границы между ячейками без лишних однопиксельных промежутков.
