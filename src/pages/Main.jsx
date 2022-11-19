import React from "react";
import List from "../components/List/List";
import "../scss/Main.scss"

export default function Main() {
    return (
        <main className="main">
            <header className="main__header">header</header>
            <section className="main__content">
            <section className="main__sections12">
                <section className="main__section1">
                     <div className="main__div11">
                        <p className="main__p11">
                            Гений непредвзято понимает под собой конфликт. 
                            Закон внешнего мира, очевидно, реально подчеркивает 
                            аксиоматичный здравый смысл. 
                            Культ джайнизма включает 
                            в себя поклонение Махавире и другим тиртханкарам, 
                            поэтому закон исключённого третьего индуцирует 
                            изоморфный ротор.
                        </p>
                    </div>
                    <aside className="main__aside1">
                        <div className="main__div12">Чувство однократно</div>
                        <div className="main__div13">Морено</div>
                    </aside>
                </section>
                <section className="main__section2">
                    <article className="main__article2">
                        <div className="main__div21">Наши сотрудники</div>
                        <div className="main__div22">Просветляет понимающий тест</div>
                        <div className="main__div23">Конформизм</div>
                    </article>
                    <aside className="main__aside2">
                        <div className="main__div24">Интроекция</div>
                        <div className="main__div25">Наши сотрудники</div>
                    </aside>
                </section>
            </section>
            <section className="main__section3">
                <aside className="main__aside3">
                    <div className="main__div31">Понятие модернизации понимает механизм власти</div>
                    <div className="main__div32">Наши сотрудники</div>
                </aside>
                <div className="main__div33">
                    <List/>
                    </div>
            </section>
            <section className="main__section4">
                <aside className="main__aside4">
                    <div className="main__div41">Лидерство</div>
                    <div className="main__div42">Невероятный гений</div>
                </aside>
                <article className="main__article4">
                    <div className="main__div43">Однако</div>
                    <div className="main__div44">Точка перегиба</div>
                    <div className="main__div45">Длина вектора</div>
                </article>
            </section>
            </section>
            <footer className="main__footer">footer</footer>
        </main>
    )
}