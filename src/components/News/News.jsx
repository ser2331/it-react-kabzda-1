import React from "react";
import s from "./News.module.css";

const News = () => {
    return <div className={s.news}>
        <h1>News</h1>
        <h2>Свойство padding позволяет задать величину поля сразу для всех сторон элемента
            или определить ее только для указанных сторон.</h2>
        <h1>Редактор</h1>
        <h2>Dukov</h2>
        <hr/>
        <hr/>
        <h1>News</h1>
        <h2>Стандартизированный язык разметки веб-страниц во Всемирной паутине. Код HTML интерпретируется браузерами;
            полученная в результате интерпретации страница отображается на экране монитора
            компьютера или мобильного устройства.</h2>
        <h1>Редактор</h1>
        <h2>Dukov</h2>
    </div>
}

export default News;