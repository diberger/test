import React, {FunctionComponent} from 'react';

type Props = {};

const Skills: FunctionComponent<Props> = () => {

    return (
        <>
            <section className="resume-section p-3 p-lg-5 d-flex align-items-center" id="skills">
                <div className="w-100">
                    <h2 className="mb-5">Compétences</h2>

                    <div className="subheading mb-3">Programmation</div>
                    <ul className="list-inline dev-icons">
                        <li className="list-inline-item">
                            <i className="fab fa-html5"/>
                        </li>
                        <li className="list-inline-item">
                            <i className="fab fa-css3-alt"/>
                        </li>
                        <li className="list-inline-item">
                            <i className="fab fa-js-square"/>
                        </li>
                        <li className="list-inline-item">
                            <i className="fab fa-symfony"/>
                        </li>
                        <li className="list-inline-item">
                            <i className="fab fa-react"/>
                        </li>
                        <li className="list-inline-item">
                            <i className="fab fa-node-js"/>
                        </li>
                        <li className="list-inline-item">
                            <i className="fab fa-sass"/>
                        </li>
                        <li className="list-inline-item">
                            <i className="fab fa-php"/>
                        </li>
                        <li className="list-inline-item">
                            <i className="fab fa-gulp"/>
                        </li>
                        <li className="list-inline-item">
                            <i className="fab fa-grunt"/>
                        </li>
                        <li className="list-inline-item">
                            <i className="fab fa-npm"/>
                        </li>
                        <li className="list-inline-item">
                            <i className="fab fa-android"/>
                        </li>
                        <li className="list-inline-item">
                            <i className="fab fa-java"/>
                        </li>
                        <li className="list-inline-item">
                            <i className="fab fa-linux"/>
                        </li>
                    </ul>

                    <div className="subheading mb-3">Administration systèmes et réseaux | Virtualisation</div>
                    <p>Linux, Windows, administration de réseaux locaux (Ethernet / Wifi + Nat, routage, services
                        usuels…)</p>
                    <p>Docker, VirtualBox, Vagrant</p>

                    <div className="subheading mb-3">Cloud Computing & IOT</div>
                    <p>Heroku, Google App Engine, API REST, Jersey</p>

                    <div className="subheading mb-3">Bases de données</div>
                    <p>Oracle, MySQL, MariaDB, NoSQL, Microsoft SQL Server</p>

                    <div className="subheading mb-3">Méthodologies et modélisation</div>
                    <p>Modèle entité – association, UML, Design Patterns</p>

                    <div className="subheading mb-3">Intégration continue</div>
                    <p>Tests unitaires (PhpUnit, jUnit), Tests fonctionnels (Selenium), CI/CD (Gitlab / Bitbucket)</p>

                    <div className="subheading mb-3">Autres langages de programmation connus</div>
                    <p>C, Pro-C, Shell (bash, zsh), Java 8-10, FXML, Arduino, PL/SQL, C# / .NET + XAML / WPF, Ruby,
                        Kotlin</p>

                    <div className="subheading mb-3">Autres logiciels connus :</div>
                    <p>Photoshop, Premiere Pro, Illustrator, Suite Office ...</p>

                    <div className="subheading mb-3">Langues</div>
                    <ul className="fa-ul mb-0">
                        <li>
                            <i className="fa-li fa fa-home"/>
                            Français
                        </li>
                        <li>
                            <i className="fa-li fa fa-flag"/>
                            Anglais (TOEIC 925)
                        </li>

                    </ul>

                    <br/>
                    <div className="subheading mb-3">PERMIS B</div>
                </div>


            </section>

            <hr className="m-0"/>
        </>
    );
};

export default Skills;
