import React, { useState, useEffect } from "react";
import Employee from "../components/Employee";
import Technical from "../components/Technical";
import Director from "../components/Director";
import Manager from "../components/Manager";
import Legend from "../components/Legend";
import "../styles/home.css";

function Home() {
    const [role, setRole] = useState(
        new URLSearchParams(window.location.search).get("role")
    );

    function checkValues(event) {
        const nome = document.getElementById("nome");
        const cognome = document.getElementById("cognome");
        const email = document.getElementById("email");
        const messaggio = document.getElementById("messaggio");
        event.preventDefault();

        if (nome.value && cognome.value && email.value && messaggio.value) {
            console.log(
                nome.value +
                    " " +
                    cognome.value +
                    " " +
                    email.value +
                    " " +
                    messaggio.value
            );

            nome.value = "";
            cognome.value = "";
            email.value = "";
            messaggio.value = "";

            modalPopup.style.display = "block";
        }
    }

    function setModalOverlayTransparency(alpha) {
        const modal = document.getElementById("modalPopup");
        const color = `rgba(0, 0, 0, ${alpha})`; // e.g. alpha = 0.3
        modal.style.setProperty("--overlay-color", color);
    }

    function popUp() {
        setModalOverlayTransparency(0.2);
        modalPopup.style.display = "none"; // makes the overlay lighter
    }

    useEffect(() => {
        const onPopState = () => {
            const params = new URLSearchParams(window.location.search);
            setRole(params.get("role"));
        };

        window.addEventListener("popstate", onPopState);
        return () => window.removeEventListener("popstate", onPopState);
    }, []);

    const renderHome = () => {
        switch (role) {
            case "employee":
                return <Employee />;

            case "technical":
                return <Technical />;

            case "manager":
                return <Manager />;

            case "director":
                return <Director />;

            case "legend":
                return <Legend />;

            default:
                return (
                    <>
                        <div
                            class="modal modal-sheet position-static d-block p-4 py-md-5"
                            tabindex="-1"
                            role="dialog"
                            id="background"
                        >
                            <div class="modal-abs modal-dialog" id="modalPopup">
                                <div class="modal-content rounded-4 shadow">
                                    <div class="modal-header border-bottom-0">
                                        <h1 class="modal-title fs-5">
                                            La tua lettera è stata mandata
                                        </h1>
                                        <button
                                            onClick={() => popUp()}
                                            type="button"
                                            class="btn-close"
                                            data-bs-dismiss="modal"
                                            aria-label="Close"
                                        ></button>
                                    </div>
                                    <div class="modal-body py-0">
                                        <p>
                                            Grazie per averci mandato la lettera
                                            di richiamo, a presto!
                                        </p>
                                    </div>
                                    <div class="modal-footer flex-column align-items-stretch w-100 gap-2 pb-3 border-top-0">
                                        <button
                                            type="button"
                                            class="btn btn-lg btn-primary"
                                            data-bs-dismiss="modal"
                                            onClick={() => popUp()}
                                        >
                                            Close
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <section class="hero px-4 py-5 text-center">
                            <h1 class="display-5 fw-bold text-body-emphasis">
                                Soluzioni Digitali, Persone Reali
                            </h1>
                            <div class="col-lg-6 mx-auto">
                                <p class="lead mb-4">
                                    Siamo un team di sviluppatori, designer e
                                    creativi uniti dalla passione per
                                    l'innovazione. Progettiamo software su
                                    misura che aiutano le aziende a crescere,
                                    mettendo sempre al centro le persone:
                                    clienti, utenti e il nostro team.
                                </p>
                                <div class="d-grid gap-2 d-sm-flex justify-content-sm-center">
                                    <button
                                        type="button"
                                        class="btn btn-primary btn-lg px-4 gap-3"
                                    >
                                        Contattaci
                                    </button>
                                    <button
                                        type="button"
                                        class="btn btn-outline-secondary btn-lg px-4"
                                    >
                                        La nostra storia
                                    </button>
                                </div>
                            </div>
                        </section>

                        <section class="about-section">
                            <div class="container px-4 py-5" id="featured-3">
                                <h2 class="pb-2 border-bottom">
                                    La nostra azienda
                                </h2>
                                <div class="row g-4 py-5 row-cols-1 row-cols-lg-3">
                                    <div class="feature col">
                                        <div class="feature-icon d-inline-flex align-items-center justify-content-center text-bg-primary bg-gradient fs-2 mb-3">
                                            <svg
                                                class="bi"
                                                width="1em"
                                                height="1em"
                                                aria-hidden="true"
                                            >
                                                <use xlink:href="#collection"></use>
                                            </svg>
                                        </div>
                                        <h3 class="fs-2 text-body-emphasis">
                                            Innovazione su misura
                                        </h3>
                                        <p>
                                            Sviluppiamo soluzioni digitali
                                            pensate per adattarsi alle reali
                                            esigenze delle aziende. Ogni
                                            progetto nasce da un’analisi
                                            approfondita e si traduce in un
                                            prodotto solido, intuitivo e
                                            scalabile.
                                        </p>
                                        <a href="#" class="icon-link">
                                            Scopri i nostri progetti
                                            <svg class="bi" aria-hidden="true">
                                                <use xlink:href="#chevron-right"></use>
                                            </svg>
                                        </a>
                                    </div>

                                    <div class="feature col">
                                        <div class="feature-icon d-inline-flex align-items-center justify-content-center text-bg-primary bg-gradient fs-2 mb-3">
                                            <svg
                                                class="bi"
                                                width="1em"
                                                height="1em"
                                                aria-hidden="true"
                                            >
                                                <use xlink:href="#people-circle"></use>
                                            </svg>
                                        </div>
                                        <h3 class="fs-2 text-body-emphasis">
                                            Un team affiatato
                                        </h3>
                                        <p>
                                            Il cuore dell’azienda sono le
                                            persone: sviluppatori, designer e
                                            project manager che collaborano ogni
                                            giorno con passione e competenza.
                                            Crediamo in un ambiente di lavoro
                                            sereno e stimolante.
                                        </p>
                                        <a href="#" class="icon-link">
                                            Conosci il nostro team
                                            <svg class="bi" aria-hidden="true">
                                                <use xlink:href="#chevron-right"></use>
                                            </svg>
                                        </a>
                                    </div>

                                    <div class="feature col">
                                        <div class="feature-icon d-inline-flex align-items-center justify-content-center text-bg-primary bg-gradient fs-2 mb-3">
                                            <svg
                                                class="bi"
                                                width="1em"
                                                height="1em"
                                                aria-hidden="true"
                                            >
                                                <use xlink:href="#toggles2"></use>
                                            </svg>
                                        </div>
                                        <h3 class="fs-2 text-body-emphasis">
                                            Tecnologia all’avanguardia
                                        </h3>
                                        <p>
                                            Restiamo sempre aggiornati sulle
                                            ultime tecnologie per garantire
                                            performance, sicurezza e
                                            innovazione. Utilizziamo stack
                                            moderni per offrire soluzioni pronte
                                            per il futuro.
                                        </p>
                                        <a href="#" class="icon-link">
                                            Esplora i nostri servizi
                                            <svg class="bi" aria-hidden="true">
                                                <use xlink:href="#chevron-right"></use>
                                            </svg>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </section>

                        <div
                            class="modal modal-sheet position-static d-block bg-body-secondary p-4 py-md-5"
                            tabindex="-1"
                            role="dialog"
                            id="modalSignin"
                        >
                            <div class="modal-dialog">
                                <div class="modal-content rounded-4 shadow">
                                    <div class="modal-header p-5 pb-4 border-bottom-0">
                                        <h1 class="fw-bold mb-0 fs-2">
                                            Lettera di richiamo
                                        </h1>
                                    </div>

                                    <div class="modal-body p-5 pt-0">
                                        <form class="">
                                            <div class="form-floating mb-3">
                                                <input
                                                    type="text"
                                                    class="form-control rounded-3"
                                                    id="nome"
                                                    placeholder="name@example.com"
                                                    required
                                                ></input>
                                                <label for="floatingInput">
                                                    Nome
                                                </label>
                                            </div>
                                            <div class="form-floating mb-3">
                                                <input
                                                    type="text"
                                                    class="form-control rounded-3"
                                                    id="cognome"
                                                    placeholder="name@example.com"
                                                    required
                                                ></input>
                                                <label for="floatingInput">
                                                    Cognome
                                                </label>
                                            </div>
                                            <div class="form-floating mb-3">
                                                <input
                                                    type="email"
                                                    class="form-control rounded-3"
                                                    id="email"
                                                    placeholder="name@example.com"
                                                    required
                                                ></input>
                                                <label for="floatingInput">
                                                    Email
                                                </label>
                                            </div>
                                            <div className="form-floating mb-3">
                                                <textarea
                                                    className="form-control rounded-3"
                                                    placeholder="Leave a message here"
                                                    id="messaggio"
                                                    style={{ height: "100px" }}
                                                    required
                                                ></textarea>
                                                <label htmlFor="floatingTextarea">
                                                    Messaggio
                                                </label>
                                            </div>
                                            <button
                                                class="w-100 mb-2 btn btn-lg rounded-3 btn-primary"
                                                type="submit"
                                                onClick={() =>
                                                    checkValues(event)
                                                }
                                            >
                                                Invia
                                            </button>
                                            <small class="text-body-secondary">
                                                Cliccando Invia, stai
                                                dichiarando di ricevere email da
                                                parte di IncAgency.
                                            </small>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="container">
                            <footer class="py-5">
                                <div class="row">
                                    <div class="col-6 col-md-2 mb-3">
                                        <h5>Section</h5>
                                        <ul class="nav flex-column">
                                            <li class="nav-item mb-2">
                                                <a
                                                    href="#"
                                                    class="nav-link p-0 text-body-secondary"
                                                >
                                                    Home
                                                </a>
                                            </li>
                                            <li class="nav-item mb-2">
                                                <a
                                                    href="#"
                                                    class="nav-link p-0 text-body-secondary"
                                                >
                                                    Features
                                                </a>
                                            </li>
                                            <li class="nav-item mb-2">
                                                <a
                                                    href="#"
                                                    class="nav-link p-0 text-body-secondary"
                                                >
                                                    Pricing
                                                </a>
                                            </li>
                                            <li class="nav-item mb-2">
                                                <a
                                                    href="#"
                                                    class="nav-link p-0 text-body-secondary"
                                                >
                                                    FAQs
                                                </a>
                                            </li>
                                            <li class="nav-item mb-2">
                                                <a
                                                    href="#"
                                                    class="nav-link p-0 text-body-secondary"
                                                >
                                                    About
                                                </a>
                                            </li>
                                        </ul>
                                    </div>

                                    <div class="col-6 col-md-2 mb-3">
                                        <h5>Section</h5>
                                        <ul class="nav flex-column">
                                            <li class="nav-item mb-2">
                                                <a
                                                    href="#"
                                                    class="nav-link p-0 text-body-secondary"
                                                >
                                                    Home
                                                </a>
                                            </li>
                                            <li class="nav-item mb-2">
                                                <a
                                                    href="#"
                                                    class="nav-link p-0 text-body-secondary"
                                                >
                                                    Features
                                                </a>
                                            </li>
                                            <li class="nav-item mb-2">
                                                <a
                                                    href="#"
                                                    class="nav-link p-0 text-body-secondary"
                                                >
                                                    Pricing
                                                </a>
                                            </li>
                                            <li class="nav-item mb-2">
                                                <a
                                                    href="#"
                                                    class="nav-link p-0 text-body-secondary"
                                                >
                                                    FAQs
                                                </a>
                                            </li>
                                            <li class="nav-item mb-2">
                                                <a
                                                    href="#"
                                                    class="nav-link p-0 text-body-secondary"
                                                >
                                                    About
                                                </a>
                                            </li>
                                        </ul>
                                    </div>

                                    <div class="col-6 col-md-2 mb-3">
                                        <h5>Section</h5>
                                        <ul class="nav flex-column">
                                            <li class="nav-item mb-2">
                                                <a
                                                    href="#"
                                                    class="nav-link p-0 text-body-secondary"
                                                >
                                                    Home
                                                </a>
                                            </li>
                                            <li class="nav-item mb-2">
                                                <a
                                                    href="#"
                                                    class="nav-link p-0 text-body-secondary"
                                                >
                                                    Features
                                                </a>
                                            </li>
                                            <li class="nav-item mb-2">
                                                <a
                                                    href="#"
                                                    class="nav-link p-0 text-body-secondary"
                                                >
                                                    Pricing
                                                </a>
                                            </li>
                                            <li class="nav-item mb-2">
                                                <a
                                                    href="#"
                                                    class="nav-link p-0 text-body-secondary"
                                                >
                                                    FAQs
                                                </a>
                                            </li>
                                            <li class="nav-item mb-2">
                                                <a
                                                    href="#"
                                                    class="nav-link p-0 text-body-secondary"
                                                >
                                                    About
                                                </a>
                                            </li>
                                        </ul>
                                    </div>

                                    <div class="col-md-5 offset-md-1 mb-3">
                                        <form>
                                            <h5>Subscribe to our newsletter</h5>
                                            <p>
                                                Monthly digest of what's new and
                                                exciting from us.
                                            </p>
                                            <div class="d-flex flex-column flex-sm-row w-100 gap-2">
                                                <label
                                                    for="newsletter1"
                                                    class="visually-hidden"
                                                >
                                                    Email address
                                                </label>
                                                <button
                                                    class="btn btn-primary"
                                                    type="button"
                                                >
                                                    Subscribe
                                                </button>
                                            </div>
                                        </form>
                                    </div>
                                </div>

                                <div class="d-flex flex-column flex-sm-row justify-content-between py-4 my-4 border-top">
                                    <p>
                                        © 2025 Company, Inc. All rights
                                        reserved.
                                    </p>
                                    <ul class="list-unstyled d-flex">
                                        <li class="ms-3">
                                            <a
                                                class="link-body-emphasis"
                                                href="#"
                                                aria-label="Instagram"
                                            >
                                                <svg
                                                    class="bi"
                                                    width="24"
                                                    height="24"
                                                >
                                                    <use xlink:href="#instagram"></use>
                                                </svg>
                                            </a>
                                        </li>
                                        <li class="ms-3">
                                            <a
                                                class="link-body-emphasis"
                                                href="#"
                                                aria-label="Facebook"
                                            >
                                                <svg
                                                    class="bi"
                                                    width="24"
                                                    height="24"
                                                    aria-hidden="true"
                                                >
                                                    <use xlink:href="#facebook"></use>
                                                </svg>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </footer>
                        </div>
                    </>
                );
        }
    };

    return <div>{renderHome()}</div>;
}

export default Home;
