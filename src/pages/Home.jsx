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
