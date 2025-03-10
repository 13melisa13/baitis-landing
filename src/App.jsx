import clsx from "clsx";
import style from "./app.module.scss";
import {useEffect, useState} from "react";
import PersonCard from "./cards/PersonCard.jsx";
import ProjectCard from "./cards/ProjectCard.jsx";

const api = import.meta.env.VITE_API_URL + '/post';
const App = () => {
    const [isHidden, setIsHidden] = useState(true);
    const [isDisabled, setIsDisabled] = useState(true);
    const [statusSend, setStatusSend] = useState('not-send');
    useEffect(() => {
        const slider = document.querySelector(".slider");
        if (slider) {
            const listener = slider.addEventListener("scroll", () => {
                if (slider.scrollLeft === 0) {
                    console.log("left end");
                    setIsScrollableLeft(false);

                } else {
                    setIsScrollableLeft(true);
                }
                if (slider.scrollLeft + slider.clientWidth > slider.scrollWidth) {
                    console.log("right end");
                    setIsScrollableRight(false);
                } else {
                    setIsScrollableRight(true);
                }
            });

            return () => {
                slider.removeEventListener("scroll", listener);
            }
        }

    }, []);
    // no, sending, error, success
    const [messageFromServer, setMessageFromServer] = useState([]);
    const [isScrollableLeft, setIsScrollableLeft] = useState(false);
    const [isScrollableRight, setIsScrollableRight] = useState(true);
    const teamMembers = [
        {
            name: "Анна",
            surname: "Иванова",
            position: "Дизайнер",
            photo: "anna.jpg",
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
        if (!element) return;
        console.log(element.getBoundingClientRect().top + window.scrollY);
        const offset = element.getBoundingClientRect().top + window.scrollY - 200;
        window.scrollTo({ top: offset, behavior: "smooth" });
    }
    const [form, setForm] = useState({
        name: "",
        email: "",
        message: "",
        isAgree: false
    });
    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        });
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        // console.log(form);
        setStatusSend('sending');
        setMessageFromServer([]);

        fetch(api, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(form)
        })
            .then(response => response.json())
            .then((data) => {
                console.log(data);
                setForm({
                    name: "",
                    email: "",
                    message: "",
                    isAgree: false
                });
                setStatusSend('success');
                setMessageFromServer(prevState => {
                    return [...prevState, 'Данные успешно отправлены'];
                })
        })
            .catch(() => {
                setStatusSend('error');
                setMessageFromServer(prevState =>
                    [...prevState, 'Ошибка при отправке данных']
                );
            });
    }
    useEffect(() => {
        const isFormValid = () => {
            return form.name.length > 0
                && form.email.length > 0
                && form.email.includes('@')
                && form.message.length > 0
                && form.isAgree;
        }
        if (statusSend === 'error' || statusSend === 'success') {
            setTimeout(() => {
                setStatusSend('not-send');
                setMessageFromServer(
                    []
                )
            }, 3000);

        }
        setIsDisabled(!isFormValid());
    }, [form, statusSend]);


    return (
        <div className={clsx(style.layout)}>
            <header className={clsx(style.header)}>
                <input id={"menuToggle"}
                       className={clsx(style.menuToggle)}
                       type={"checkbox"}/>
                <div className={clsx(style.mobile)}>

                    <a href={"#main"}><img className={clsx(style.logo)}
                                       aria-label={"Baitis"}
                                       alt={"Baitis"}
                                       src={new URL("/src/assets/logo/logo_black.png", import.meta.url)}
                    /></a>
                    <label className={clsx(style.menuButton)}
                           htmlFor={"menuToggle"}>
                        <span></span>
                    </label>
                </div>


                <nav className={clsx(style.menu)}>
                    <a className={clsx("text-medium-16", style.link)}
                       href={"#about-us"}>О нас</a>
                    <a className={clsx("text-medium-16", style.link)}
                       href={"#projects"}>Проекты</a>
                    <a className={clsx("text-medium-16", style.link)}
                       href={"#team"}>Команда</a>
                    <a className={clsx("text-medium-16", style.link)}
                       href={"#contact-us"}>Связаться</a>
                </nav>


            </header>
            <main className={clsx(style.main)}>
                <section id={"main"}
                         className={clsx(style.sectionMain, style.section)}>
                    <div className={clsx(style.content)}>

                        <h1 className={clsx(style.title)}>

                            <span className={clsx("hero", style.meaning)}>Море</span>
                            <span className={clsx("hero")}>
                                приключений в каждой игре
                            </span>
                        </h1>
                        <p className={clsx(style.description, "subtitle-medium")}>
                            Проекты, которые зовут за горизонт и пробуждают дух исследователя
                        </p>
                        <div className={style.whales}/>

                    </div>
                    <button className={clsx(style.button, "primary",
                        "text-semibold-16")}
                            onClick={() => {
                                navigateTo("contact-us");
                            }}
                            aria-label={"Заказать проект"}>
                        Заказать проект
                    </button>
                </section>
                <section id={"about-us"}
                         className={clsx(style.sectionAbout, style.section)}>
                    <h2 className={clsx("heading-h1")}>О нас</h2>
                    <div className={style.content}>
                        <div className={clsx(style.text)}>
                            <span className={clsx(style.meaning, "text-semibold-28")}>Baitis</span>
                            <span className={clsx(style.text, "text-regular-28")}> — игровая студия, вдохновлённая
                        бескрайними просторами океана и духом приключений</span>
                        </div>
                        <div className={clsx(style.text, "text-regular-28")}>
                            Наши игры — это захватывающие путешествия, где каждый игрок становится
                            исследователем, капитаном или первооткрывателем новых миров
                        </div>
                        <div className={clsx(style.text, style.highlight, "text-regular-28")}>
                            Мы создаём увлекательные истории, головоломки и необычные игровые механики
                        </div>
                        <div className={clsx(style.turtle, style.turtle1)}/>
                        <div className={clsx(style.turtle, style.turtle2)}/>
                        <div className={clsx(style.turtle, style.turtle3)}/>
                    </div>


                </section>
                <section id={"projects"}
                         className={clsx(style.sectionProjects, style.section)}>
                    <h2 className={clsx("heading-h1")}>Проекты</h2>
                    <div className={clsx(style.gridBox)}>
                            <ProjectCard
                                urlToProject={"#main"}
                                nameFile={"1.png"}
                                alternativeName={"Проект 1"}
                            />
                            <ProjectCard
                                id={"project2"}
                                urlToProject={"#main"}
                                nameFile={"2.png"}
                                alternativeName={"Проект 2"}
                            />
                            <ProjectCard
                                urlToProject={"#main"}
                                nameFile={"3.png"}
                                alternativeName={"Проект 3"}
                            />

                        {(!isHidden || document.documentElement.clientWidth > 685)
                            &&
                            <>
                            <ProjectCard
                                urlToProject={"#main"}
                                nameFile={"4.png"}
                                alternativeName={"Проект 4"}
                            />
                            <ProjectCard
                                urlToProject={"#main"}
                                nameFile={"5.png"}
                                alternativeName={"Проект 5"}
                            />
                            <ProjectCard
                                urlToProject={"#main"}
                                nameFile={"6.png"}
                                alternativeName={"Проект 6"}
                            />
                            <ProjectCard
                                urlToProject={"#main"}
                                nameFile={"7.png"}
                                alternativeName={"Проект 7"}
                            />
                            <ProjectCard
                                urlToProject={"#main"}
                                nameFile={"8.png"}
                                alternativeName={"Проект 8"}
                            />
                            <ProjectCard
                                urlToProject={"#main"}
                                nameFile={"9.png"}
                                alternativeName={"Проект 9"}
                            />
                            <ProjectCard
                                urlToProject={"#main"}
                                nameFile={"10.png"}
                                alternativeName={"Проект 10"}
                                noStretch={true}
                            />
                            <ProjectCard
                                urlToProject={"#main"}
                                nameFile={"11.png"}
                                alternativeName={"Проект 11"}
                                noStretch={true}
                            />

                            </>
                    }


                        </div>
                        {document.documentElement.clientWidth <= 685 &&

                            <button className={clsx(style.button,
                                isHidden ? style.hidden : style.show,
                                "text-semibold-16")}
                            onClick={() => {
                                // if (isHidden) {
                                    navigateTo("project2");

                                // }
                                setIsHidden(!isHidden);
                            }}
                            aria-label={isHidden ? "Показать все" : "Скрыть"}>
                        {isHidden ? "Показать все" : "Скрыть"}
                    </button>
                    }

                </section>
                <section id={"team"}
                         className={clsx(style.sectionTeam, style.section)}>
                    <h2 className={clsx("heading-h1")}>Команда</h2>
                    <div className={clsx(style.sliderWrapper)}>
                        <div className={clsx(style.slider, "slider")}>
                            {teamMembers.map((member, index) => (
                                <PersonCard key={index}
                                    {...member}
                                />
                            ))}
                        </div>
                        <div className={clsx(style.buttons)}>
                            <button className={clsx(style.button,
                                !isScrollableLeft && style.disabled)}

                                    onClick={() => {
                                        const slider = document.querySelector(".slider");
                                        if (slider) {
                                            slider.scrollLeft -= 314;

                                        }
                                    }}/>

                            <button className={clsx(style.button, style.right,
                                !isScrollableRight && style.disabled)}
                                    onClick={() => {
                                        const slider = document.querySelector(".slider");
                                        if (slider) {
                                            slider.scrollLeft += 314;
                                        }
                                    }} />


                        </div>
                    </div>

                </section>
                <section id={"contact-us"}
                    className={clsx(style.sectionContact, style.section)}>
                    <h2 className={clsx("heading-h1")}>Связаться</h2>
                    <div className={clsx(style.content)}>
                    <div className={clsx(style.description)}>
                        <div className={clsx(style.text, "text-regular-28")}>
                            Напишите нам — и вместе мы создадим
                            нечто по-настоящему увлекательное!
                        </div>
                        <address className={clsx(style.addressBox)}>
                            <div className={clsx(style.addressList)}>

                                <div className={clsx(style.addressItem)}>
                                    <img
                                        className={clsx("icon")}
                                        src={new URL("/src/assets/icons/mail.svg", import.meta.url)}
                                        alt={""}/>
                                    <a
                                        className={clsx("subtitle-medium", style.text)}
                                        href={"mailto:baitis@mail.ru"}>baitis@mail.ru</a>
                                </div>
                                <div className={clsx(style.addressItem)}>
                                    <img
                                        className={clsx("icon")}

                                        src={new URL("/src/assets/icons/phone.svg", import.meta.url)}
                                        alt={""}/>
                                    <a className={clsx("subtitle-medium", style.text)}
                                       href={"tel:+74951234567"}>+7 (495) 123-45-67</a>
                                </div>
                                <div className={clsx(style.addressItem)}>
                                    <img
                                        className={clsx("icon")}
                                        src={new URL("/src/assets/icons/location.svg", import.meta.url)}
                                        alt={""}/>
                                    <span
                                        className={clsx(style.text,
                                            "subtitle-medium")}
                                    >Москва, ул. Пушкина, д. 4</span>
                                </div>
                            </div>
                            <div className={clsx(style.social)}>
                                <a href={"#"}
                                   className={clsx("social-link")}>
                                    <img src={new URL("/src/assets/social_icons/fb.svg", import.meta.url)}
                                         alt={"Facebook"}
                                         className={clsx("social-icon")}
                                    />
                                </a>
                                <a href={"#"}
                                    className={clsx("social-link")}>
                                    <img src={new URL("/src/assets/social_icons/vk.svg", import.meta.url)}
                                        alt={"VK"}
                                         className={clsx("social-icon")}

                                    />
                                </a>
                                <a href={"#"}
                                    className={clsx("social-link")}>
                                    <img src={new URL("./assets/social_icons/inst.svg", import.meta.url)}
                                        alt={"Instagram"}
                                         className={clsx("social-icon")}

                                    />
                                </a>
                                <a href={"#"}
                                    className={clsx("social-link")}>
                                    <img src={new URL("./assets/social_icons/tg.svg", import.meta.url)}
                                        alt={"Telegram"}
                                         className={clsx("social-icon")}

                                    />
                                </a>
                            </div>

                        </address>

                    </div>
                    <form onSubmit={handleSubmit}

                          className={clsx(style.form)}>
                        <label className={clsx(style.label)}>
                            <span className={clsx(style.text, "text-regular-14")}>
                            Имя
                            </span>
                            <input
                                disabled={statusSend === 'sending'}
                                type={"text"}
                                   placeholder={"Как к вам обращаться?"}

                                   className={clsx("input", "text-regular-14"
                                        , messageFromServer.find((message) => message === "Имя обязательно для заполнения") && style.error)}

                                   name={"name"}
                                   value={form.name}
                                   onChange={handleChange}
                                   onInvalid={() => {
                                   setMessageFromServer(prev => [...prev, "Имя обязательно для заполнения"]);
                                   }}
                                      onInput={() => {
                                        setMessageFromServer(prev => prev.filter((message) => message !== "Имя обязательно для заполнения"));
                                      }}
                                   required />
                        </label>
                        <label className={clsx(style.label)}>
                            <span className={clsx(style.text, "text-regular-14")}>
                            Email
                            </span>
                            <input type={"email"}
                                   disabled={statusSend === 'sending'}

                                   placeholder={"Куда прислать ответ?"}
                                   className={clsx("input", "text-regular-14",
                                       messageFromServer.find((message) => message === "Некорректный email") && style.error)}
                                   name={"email"}
                                   onInvalid={() => {
                                        setMessageFromServer(prevState => [...prevState, "Некорректный email"]);
                                   }}
                                   onInput={() => {
                                       setMessageFromServer(prevState => prevState.filter((message) => message !== "Некорректный email"));
                                   }}
                                   value={form.email}
                                   onChange={handleChange}
                                   maxLength={50}
                                   required />
                        </label>
                        <label className={clsx(style.label)}>
                            <span className={clsx(style.text, "text-regular-14")}>
                            Сообщение
                            </span>
                            <textarea
                                disabled={statusSend === 'sending'}

                                placeholder={"Опишите вашу идею или задайте вопрос"}
                                className={clsx("textarea", "text-regular-14",
                                    messageFromServer.find((message) => message === "Сообщение обязательно для заполнения") && style.error)}
                                name={"message"}
                                onInvalid={() => {
                                    setMessageFromServer(prevState => [...prevState, "Сообщение обязательно для заполнения"]);
                                }}
                                onInput={() => {
                                    setMessageFromServer(prevState => prevState.filter((message) => message !== "Сообщение обязательно для заполнения"));
                                }}
                                      value={form.message}
                                      onChange={handleChange}
                                        maxLength={500}
                                      required />
                        </label>
                        <label className={clsx( style.checkbox)}>
                            <input type={"checkbox"} required
                                   disabled={statusSend === 'sending'}

                                   onInvalid={() => {
                                       setMessageFromServer(prevState => [...prevState, "Вы должны принять соглашение"]);
                                   }}
                                      onInput={() => {
                                          setMessageFromServer(prevState => prevState.filter((message) => message !== "Вы должны принять соглашение"));
                                      }
                                      }
                                      className={clsx(style.checkbox)}
                                      name={"isAgree"}
                                      checked={form.isAgree}
                                      onChange={(e) => {
                                        setForm({
                                             ...form,
                                             isAgree: e.target.checked
                                        });
                                      }}
                            />
                            <span className={clsx(style.checkboxBox, form.isAgree && style.checked)}/>
                            <div className={clsx(style.textBox)}>
                                <span className={clsx(style.text, "text-regular-14")}>
                                    Я принимаю
                                </span>
                                <a href={""}
                                   className={clsx(style.link, "text-regular-14")}>
                                    согласие на обработку персональных данных</a>
                            </div>

                        </label>
                        <button
                            disabled={statusSend === 'sending' || isDisabled}
                            className={clsx(style.button,
                            isDisabled ?  style.disabled : "",
                                statusSend === 'sending' ? style.sending : "",
                            "text-semibold-16")}>
                            Отправить
                        </button>
                        {Array.isArray(messageFromServer) &&
                        messageFromServer.length > 0 &&

                        <div className={clsx(style.message,
                            "text-regular-16",
                            statusSend === 'error' ? style.error : "",
                            statusSend === 'success' ? style.success : "")}>
                            {messageFromServer.map((message, index) => (
                                <div key={index}>
                                    {message}
                                </div>
                            ))}

                        </div>}
                    </form>
                    </div>

                </section>
            </main>
            <footer className={clsx(style.footer)}>
                <span className={clsx(style.fish)}/>
                <div className={clsx(style.content)}>
                    <a href={"#main"}>
                        <img className={clsx(style.logo)}
                             aria-label={"Baitis"}
                             alt={"Baitis"}
                             src={new URL("./assets/logo/logo_white.png", import.meta.url)}
                        /> </a>
                    <nav className={clsx(style.menu)}>
                        <a className={clsx("text-medium-16", style.link)}
                           href={"#about-us"}>О нас</a>
                        <a className={clsx("text-medium-16", style.link)}
                           href={"#projects"}>Проекты</a>
                        <a className={clsx("text-medium-16", style.link)}
                           href={"#team"}>Команда</a>
                        <a className={clsx("text-medium-16", style.link)}
                           href={"#contact-us"}>Связаться</a>
                    </nav>

                </div>
                <p className={clsx(style.copyright, "text-regular-14")}>
                    &#169; 2025 Baitis</p>
            </footer>
        </div>
    );
}
export default App;