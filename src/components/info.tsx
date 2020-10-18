import React, {FunctionComponent} from 'react';

type Props = {};

const Info: FunctionComponent<Props> = () => {

    return (
        <>
            <section className="resume-section p-3 p-lg-5 d-flex align-items-center" id="about">
                <div className="w-100">
                    <h1 className="mb-0">Dimitri
                        <span className="text-primary"> BERGER</span>
                    </h1>
                    <div className="subheading mb-5">Développeur Junior à <a href="https://www.sfi.fr">SFI
                        MULTIMEDIA</a> sur
                        Saint - Etienne ·
                        <a href="mailto:dimitri@dimitri-berger.fr"> dimitri@dimitri-berger.fr</a>
                    </div>
                    <p className="lead mb-5">Je suis actuellement développeur dans l'entreprise SFI Multimédia à
                        Saint-Etienne,
                        je travaille sur un outil intégrant une architecture de type micro-services en PHP/Symfony 4 et
                        un front
                        en React. Je travaille également sur des plateformes de gestion en Symfony 2 et 3</p>
                    <p className="lead mb-5">Calme, Autonome, Motivé, Autodictate, Veille technologique</p>
                    <div className="social-icons">
                        <a href="https://www.linkedin.com/in/dimitri-berger-426b7a13a/">
                            <i className="fab fa-linkedin-in"> </i>
                        </a>
                        <a href="https://gitlab.com/dberger">
                            <i className="fab fa-gitlab"> </i>
                        </a>
                        <a href="https://github.com/ylony">
                            <i className="fab fa-github"> </i>
                        </a>
                    </div>
                </div>
            </section>

            <hr className="m-0"/>
        </>
    );
};

export default Info;
