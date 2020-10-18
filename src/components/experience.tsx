import React, {FunctionComponent} from 'react';

type Props = {};

const Experience: FunctionComponent<Props> = () => {

    return (
        <>
            <section className="resume-section p-3 p-lg-5 d-flex justify-content-center" id="experience">
                <div className="w-100">
                    <h2 className="mb-5">Expériences</h2>
                    <div className="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
                        <div className="resume-picture">
                            <img src="https://www.sfi.fr/wp-content/uploads/2018/07/logoSFI.png"/>
                        </div>
                        <div className="resume-content">
                            <h3 className="mb-0">Développeur Junior</h3>
                            <div className="subheading mb-3">SFI Multimédia</div>
                            <p>Développement avec une architecture en micro-services en PHP/Symfony 4/React</p>
                            <p>Développement de back-office en Symfony 2 et 3</p>
                        </div>
                        <div className="resume-date text-md-right">
                            <span className="text-primary">Septembre 2019 - ...</span>
                        </div>
                    </div>

                    <div className="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
                        <div className="resume-picture">
                            <img src="https://www.sfi.fr/wp-content/uploads/2018/07/logoSFI.png"/>
                        </div>
                        <div className="resume-content">
                            <h3 className="mb-0">Apprenti développeur multimédia</h3>
                            <div className="subheading mb-3">SFI Multimédia</div>
                            <p>Stage puis en alternance, Développement de back-office en PHP avec le framework Symfony 2
                                et 3.</p>
                        </div>
                        <div className="resume-date text-md-right">
                            <span className="text-primary">Avril 2018 - Aout 2019</span>
                        </div>
                    </div>
                </div>

            </section>

            <hr className="m-0"/>
        </>
    );
};

export default Experience;
