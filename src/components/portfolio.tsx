import React, {FunctionComponent} from 'react';

type Props = {};

const Portfolio: FunctionComponent<Props> = () => {

    return (
        <>
            <section className="portfolio-section p-3 p-lg-5 d-flex align-items-center" id="portfolio">
                <div className="w-100">
                    <h2 className="mb-5">
                        PORTFOLIO
                        <img className="thanos-img" src="./img/thanos/thanos-gant.png"/>
                    </h2>
                    <div className="row">
                        <div className="col-md-4 disintegration-target">
                            <img className="portfolio-img" src="./img/portfolio/clffony.jpg"/>
                            <p className="project-title">
                                ClfFony - Mars 2019 - Symfony 4.2
                            </p>
                            <p className="project-desc">
                                Cette application permet de faire des requêtes vers le site de la société T2C, afin
                                d'obtenir un
                                itinéraire entre 2 arrêts de tram sur Clermont - Ferrand.
                                On peut également ajouter des itinéraires en favoris afin d'accéder plus vite à la
                                recherche.
                            </p>
                            <p className="project-link-demo">
                                Démo :
                                <a target="_blank" rel="noopener noreferrer" href="https://clffony.dimitri-berger.fr">
                                    ClfFony
                                </a>
                            </p>
                            <p className="project-link-git">
                                Code source :
                                <a target="_blank" rel="noopener noreferrer" href="https://gitlab.com/dberger/clffony">
                                    <i className="fab fa-gitlab"/>
                                </a>
                            </p>
                        </div>
                        <div className="col-md-4 disintegration-target">
                            <img className="portfolio-img" src="./img/portfolio/reactflix.jpg"/>
                            <p className="project-title">
                                Reactflix - Février 2019 - React, Node.js (Express)
                            </p>
                            <p className="project-desc">
                                Ce projet permet d'indiquer les séries ainsi que les épisodes que l'on a visionnés,
                                le but de ce projet était de diviser une application avec une logique back-end et
                                front-end.
                                Ainsi l'application React fait des requêtes ajax vers le serveur node et se met à jour
                                en
                                temps réels. Cette application est une SPA.
                            </p>
                            <p className="project-link-demo">
                                Démo :
                                <a target="_blank" rel="noopener noreferrer" href="https://reactflix.dimitri-berger.fr">
                                    ReactFlix
                                </a>
                            </p>
                            <p className="project-link-git">
                                Code source :
                                <a target="_blank" rel="noopener noreferrer"
                                   href="https://github.com/diberger/licpro-2019-project">
                                    <i className="fab fa-github"/>
                                </a>
                            </p>
                        </div>
                        <div className="col-md-4 disintegration-target">
                            <img className="portfolio-img" src="./img/portfolio/bomberman.png"/>
                            <p className="project-title">
                                Bomberman - Mars 2018 - Android, Bluetooth, Java
                            </p>
                            <p className="project-desc">
                                Jeu classNameique de Bomberman sur Android, il dispose aussi d'un mode "2 Joueurs" jouable
                                en
                                bluetooth.
                            </p>
                            <p className="project-link-demo">
                                Google Play :
                                <a target="_blank" rel="noopener noreferrer"
                                   href="https://play.google.com/store/apps/details?id=com.allabrosse1.bomberman&hl=fr">
                                    Bomberman
                                </a>
                            </p>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-md-4 disintegration-target">
                            <img className="portfolio-img" src="./img/portfolio/snake.jpg"/>
                            <p className="project-title">
                                Snake - Janvier 2018 - Android, Java
                            </p>
                            <p className="project-desc">
                                Un simple jeu de "Snake" sous Android.
                            </p>
                            <p className="project-link-git">
                                Code source :
                                <a target="_blank" rel="noopener noreferrer" href="https://github.com/ylony/Snake">
                                    <i className="fab fa-github"/>
                                </a>
                            </p>
                        </div>
                        <div className="col-md-4 disintegration-target">
                            <img className="portfolio-img" src="./img/portfolio/yloflix.jpg"/>
                            <p className="project-title">
                                YloFlix - Novembre 2017 - Symfony 3 (Apprentissage)
                            </p>
                            <p className="project-desc">
                                Cette application permet à partir d'un dossier "Séries"
                                sur votre disque dur de lister vos séries en mode "Netflix",
                                elle permet également de télécharger automatiquement les sous-titres
                                VOSTFR des épisodes via le site <a href="http://addic7ed.com">addic7ed</a>.
                            </p>
                            <p className="project-link-git">
                                Code source :
                                <a target="_blank" rel="noopener noreferrer" href="https://github.com/ylony/YloFlix">
                                    <i className="fab fa-github"/>
                                </a>
                            </p>
                        </div>
                        <div className="col-md-4 disintegration-target">
                            <img className="portfolio-img" src="./img/portfolio/ylocms.jpg"/>
                            <p className="project-title">
                                YloFanClub - Octobre 2016 - Code Vanilla
                            </p>
                            <p className="project-desc">
                                Le but de ce projet personnel était pour moi d'apprendre à utiliser PHP, aucun patron de
                                conception n'est implémenté et respecté.
                                À l'aide d'un thème wordpress gratuit j'ai reprogrammé entièrement un système de Blog
                                personnel
                                administrable via un back-office.
                            </p>
                            <p className="project-link-git">
                                Code source :
                                <a target="_blank" rel="noopener noreferrer" href="https://github.com/ylony/ylo-cms">
                                    <i className="fab fa-github"/>
                                </a>
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <hr className="m-0"/>
        </>
    );
};

export default Portfolio;
