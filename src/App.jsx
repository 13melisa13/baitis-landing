import clsx from "clsx";
import "./app.scss";
import {useState} from "react";


const App = () => {
    const projectNames = [
        "image 3",
        "image 4",
        "image 5",
        "image 6",
        "image 7",
        "image 8",
        "image 9",
        "image 10",
        "image 11",
        "image 12",
        "image 13"
        ]
    const teamMembers = [
        {
            name: "Анна",
            surname: "Иванова",
            position: "Дизайнер",
            photo: "anna.png",
            achievement: "Победитель конкурса дизайнеров 2023 года"
        },
        {
            name: "Иван",
            surname: "Петров",
            position: "Программист",
            photo: "ivan.png",
            achievement: "Победитель хакатона 2024 года"
        },
        {
            name: "Ольга",
            surname: "Сидорова",
            position: "Тестировщик",
            photo: "olga.png",
            achievement: "Победитель конкурса тестировщиков 2025 года"
        },
        {
            name: "Алексей",
            surname: "Смирнов",
            position: "Программист",
            photo: "alexey.png",
            achievement: "Победитель хакатона 2024 года"
        },
        {
            name: "Мария",
            surname: "Кузнецова",
            position: "Дизайнер",
            photo: "maria.png",
            achievement: "Победитель конкурса дизайнеров 2023 года"
        },
        {
            name: "Александр",
            surname: "Козлов",
            position: "Программист",
            photo: "alexander.png",
            achievement: "Победитель хакатона 2024 года"
        },
        {
            name: "Елена",
            surname: "Попова",
            position: "Тестировщик",
            photo: "elena.png",
            achievement: "Победитель конкурса тестировщиков 2025 года"
        },
    ];

    const navigateTo = (id) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
        }
    }
    const [form, setForm] = useState({
        name: "",
        email: "",
        message: ""
    });
    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        });
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(form);
    }

    return (
        <div className={"layout"}>
            <header className={clsx("header")}>
                <img className={clsx("logo", "black")}
                        aria-label={"Baitis"}
                        alt={"Baitis"}
                        src={new URL("/src/assets/logo/logo_black.png", import.meta.url)}
                />
                <nav className={clsx("menu", "black", "header-menu")}>
                    <a className={clsx("text-medium-16", "link")}
                        href={"#about-us"}>О нас</a>
                    <a className={clsx("text-medium-16", "link")}
                        href={"#projects"}>Проекты</a>
                    <a className={clsx("text-medium-16", "link")}
                        href={"#team"}>Команда</a>
                    <a className={clsx("text-medium-16", "link")}
                        href={"#contact-us"}>Связаться</a>
                </nav>
                <label className={clsx("menu-button")} htmlFor={"menu-toggle"}>
                    <span></span>
                </label>
                <input id={"menu-toggle"} type={"checkbox"} />

            </header>
            <main className={clsx("main")}>
                <section id={"main"}
                         className={clsx("main-section", "section")}>
                    <div className={clsx("content")}>

                        <h1 className={clsx("title")}>

                            <span className={clsx("hero")}>Море</span>
                            <span className={clsx("hero")}>
                                приключений в каждой игре
                            </span>
                        </h1>
                        <p className={clsx("description", "subtitle-medium")}>
                            Проекты, которые зовут за горизонт и пробуждают дух исследователя
                        </p>
                    </div>
                    <button className={clsx("button", "primary", "text-semibold-16")}
                            onClick={() => {
                                navigateTo("contact-us");
                            }}
                            aria-label={"Заказать"}>
                        Заказать
                    </button>
                    <img className={clsx("image", "whales")} alt={""}
                        src={new URL("/src/assets/whales.png", import.meta.url)}
                    />
                </section>
                <section id={"about-us"}
                         className={clsx("about", "section")}>
                    <h2 className={clsx("heading-h1")}>О нас</h2>
                    <div className={clsx("text")}>
                        <span className={clsx("meaning", "text-semibold-28")}>Baitis</span>
                        <span className={clsx("text", "text-regular-28")}> — игровая студия, вдохновлённая
                        бескрайними просторами океана и духом приключений</span>
                    </div>
                    <div className={clsx("text", "text-regular-28")}>
                        Наши игры — это захватывающие путешествия, где каждый игрок становится
                        исследователем, капитаном или первооткрывателем новых миров
                    </div>
                    <div className={clsx("text", "highlight", "text-regular-28")}>
                        Мы создаём увлекательные истории, головоломки и необычные игровые механики
                    </div>
                    <img src={new URL("/src/assets/turtle1.png", import.meta.url)}
                        className={clsx("image", "turtle")} alt={""} />
                    <img src={new URL("/src/assets/turtle2.png", import.meta.url)}
                        className={clsx("image", "turtle")} alt={""} />
                    <img src={new URL("/src/assets/turtle3.png", import.meta.url)}
                        className={clsx("image", "turtle")} alt={""} />
                </section>
                <section id={"projects"}
                         className={clsx("projects", "section")}>
                    <h2 className={clsx("heading-h1")}>Проекты</h2>
                    <div className={clsx("grid-box")}>
                        {projectNames.map((name, index) => (
                            <div key={index}
                                 className={clsx("project")}>
                                <img src={new URL(`/src/assets/projects/${name}.png`, import.meta.url)}
                                     alt={name}/>
                            </div>
                        ))}
                        <button className={clsx("button", "primary", "text-semibold-16")}
                                onClick={() => {
                                    // navigateTo("contact-us");
                                }}
                                aria-label={"Показать все"}>
                            Показать все
                            <img src={new URL("/src/assets/arrows/arrow_long.svg", import.meta.url)}
                                className={clsx("arrow")}
                                alt="&#8595;" />

                        </button>

                    </div>
                </section>
                <section id={"team"}
                         className={clsx("team", "section")}>
                    <h2 className={clsx("heading-h1")}>Команда</h2>
                    <div className={clsx("slider-wrapper")}>
                        <div className={clsx("slider")}>
                            {teamMembers.map((member, index) => (
                                <div key={index}
                                    className={clsx("member")}>
                                    <img src={new URL(`/src/assets/team/${member.photo}`, import.meta.url)}
                                        alt={""}
                                         onError={(e) => {
                                            e.target.src = new URL("/src/assets/team/default.png", import.meta.url);
                                         }}
                                    />
                                    <div className={clsx("info")}>
                                        <h3 className={clsx("name")}>
                                            <span className={clsx("subtitle-medium")}>
                                                {member.name}
                                            </span>
                                            <span className={clsx("subtitle-medium")}>
                                                {member.surname}
                                            </span>
                                        </h3>
                                        <p className={clsx("position", "text-regular-16")}>
                                            {member.position}
                                        </p>
                                        <p className={clsx("achievement", "text-regular-14")}>
                                            {member.achievement}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div className={clsx("manage")}>
                            <button className={clsx("button", "secondary")}
                                    onClick={() => {
                                        const slider = document.querySelector(".slider");
                                        if (slider) {
                                            slider.scrollLeft -= 200;
                                        }
                                    }}
                                    >
                                <img src={new URL("/src/assets/arrows/arrow_long.svg", import.meta.url)}
                                    className={clsx("arrow")}
                                     alt="&#8592;"

                                />
                            </button>
                            <button className={clsx("button", "secondary")}
                                    onClick={() => {
                                        const slider = document.querySelector(".slider");
                                        if (slider) {
                                            slider.scrollLeft += 200;
                                        }
                                    }}>
                                <img src={new URL("/src/assets/arrows/arrow_long.svg", import.meta.url)}
                                        className={clsx("arrow", "right")}
                                        alt="&#8594;" />

                            </button>
                        </div>
                    </div>

                </section>
                <section id={"contact-us"}
                    className={clsx("contact", "section")}>
                    <h2 className={clsx("heading-h1")}>Связаться</h2>
                    <div className={clsx("content")}>
                        <div className={clsx("text", "text-regular-28")}>
                            Напишите нам — и вместе мы создадим
                            нечто по-настоящему увлекательное!
                        </div>
                        <address className={clsx("address-box")}>
                            <div className={clsx("address-list")}>
                                <div className={clsx("address-item")}>
                                    <img src={new URL("/src/assets/icons/phone.svg", import.meta.url)}
                                        alt={""} />
                                    <a className={clsx("subtitle-medium", "text")}
                                        href={"tel:+74951234567"}>+7 (495) 123-45-67</a>
                                </div>
                                <div className={clsx("address-item")}>
                                    <img src={new URL("/src/assets/icons/mail.svg", import.meta.url)}
                                        alt={""} />
                                    <a
                                        className={clsx("subtitle-medium", "text")}
                                        href={"mailto:mail@mail.ru"}>mail@mail.ru</a>
                                </div>
                                <div className={clsx("address-item")}>
                                    <img src={new URL("/src/assets/icons/location.svg", import.meta.url)}
                                        alt={""} />
                                    <span
                                        className={clsx("text", "subtitle-medium")}
                                    >Москва, ул. Пушкина, д. Колотушкина</span>
                                </div>
                            </div>
                            <div className={clsx("social")}>
                                <a href={"#"}
                                    className={clsx("social-link")}>
                                    <img src={new URL("/src/assets/social_icons/fb.svg", import.meta.url)}
                                        alt={"Facebook"} />
                                </a>
                                <a href={"#"}
                                    className={clsx("social-link")}>
                                    <img src={new URL("/src/assets/social_icons/vk.svg", import.meta.url)}
                                        alt={"VK"} />
                                </a>
                                <a href={"#"}
                                    className={clsx("social-link")}>
                                    <img src={new URL("./assets/social_icons/inst.svg", import.meta.url)}
                                        alt={"Instagram"} />
                                </a>
                                <a href={"#"}
                                    className={clsx("social-link")}>
                                    <img src={new URL("./assets/social_icons/tg.svg", import.meta.url)}
                                        alt={"Telegram"} />
                                </a>
                            </div>

                        </address>

                    </div>
                    <form onSubmit={handleSubmit} className={clsx("form")}>
                        <label className={clsx("label")}>
                            <span className={clsx("text", "text-regular-14")}>
                            Имя
                            </span>
                            <input type={"text"}
                                   className={clsx("input", "text-regular-14")}
                                   name={"name"}
                                   value={form.name}
                                   onChange={handleChange}
                                   required />
                        </label>
                        <label className={clsx("label")}>
                            <span className={clsx("text", "text-regular-14")}>
                            Email
                            </span>
                            <input type={"email"}
                                   className={clsx("input")}
                                   name={"email"}
                                   value={form.email}
                                   onChange={handleChange}
                                   required />
                        </label>
                        <label className={clsx("label")}>
                            <span className={clsx("text", "text-regular-14")}>
                            Сообщение
                            </span>
                            <textarea
                                className={clsx("textarea", "text-regular-14")}
                                name={"message"}
                                      value={form.message}
                                      onChange={handleChange}
                                      required />
                        </label>
                        <label className={clsx("label")}>
                            <input type={"checkbox"}
                                      required />
                            <span className={"checkbox"}></span>
                            <span className={clsx("checkbox-text", "text-regular-14")}>
                                Я принимаю
                            </span>
                            <a href={"#"}
                                 className={clsx("link", "text-regular-14")}>
                               согласие на обработку персональных данных</a>
                        </label>


                        <button className={clsx("button", "light", "text-semibold-16")}>
                            Отправить
                        </button>
                    </form>

                </section>
            </main>
            <footer className={clsx("footer")}>
                <img className={clsx("fish")}
                    src={new URL("./assets/fish.png", import.meta.url)}
                    alt={""} />
               <div className={clsx("content")}>
                   <img className={clsx("logo", "white")}
                        aria-label={"Baitis"}
                        alt={"Baitis"}
                       src={new URL("./assets/logo/logo_white.png", import.meta.url)}
                     />
                   <nav className={clsx("menu", "white")}>
                        <a className={clsx("text-medium-16", "link")}
                           href={"#about-us"}>О нас</a>
                        <a className={clsx("text-medium-16", "link")}
                           href={"#projects"}>Проекты</a>
                        <a className={clsx("text-medium-16", "link")}
                           href={"#team"}>Команда</a>
                        <a className={clsx("text-medium-16", "link")}
                           href={"#contact-us"}>Связаться</a>
                   </nav>
                   <p className={clsx("copy-right", "text-regular-14")}>
                       &#169; 2025 Baitis</p>
               </div>
            </footer>
        </div>
    );
}
export default App;