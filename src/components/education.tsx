import React, {FunctionComponent} from 'react';

type Props = {};

const Education: FunctionComponent<Props> = () => {

    return (
        <>
            <section className="resume-section p-3 p-lg-5 d-flex align-items-center" id="education">
                <div className="w-100">
                    <h2 className="mb-5">Diplômes</h2>

                    <div className="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
                        <div className="resume-content">
                            <h3 className="mb-0">Université Clermont - Auvergne</h3>
                            <div className="subheading mb-3">Licence Professionnelle Développement d’applications
                                intranet/internet.
                            </div>
                        </div>
                        <div className="resume-date text-md-right">
                            <span className="text-primary">2018 - 2019</span>
                        </div>
                    </div>

                    <div className="resume-item d-flex flex-column flex-md-row justify-content-between">
                        <div className="resume-content">
                            <h3 className="mb-0">Université Clermont - Auvergne</h3>
                            <div className="subheading mb-3">DUT Informatique</div>
                        </div>
                        <div className="resume-date text-md-right">
                            <span className="text-primary">2016 - 2018</span>
                        </div>
                    </div>

                    <div className="resume-item d-flex flex-column flex-md-row justify-content-between">
                        <div className="resume-content">
                            <h3 className="mb-0">Lycée Saint-Aubrin, Montbrison</h3>
                            <div className="subheading mb-3">BAC Série Scientifique SVT spécialité Mathématiques</div>
                        </div>
                        <div className="resume-date text-md-right">
                            <span className="text-primary">2016</span>
                        </div>
                    </div>
                </div>
            </section>

            <hr className="m-0"/>
        </>
    );
};

export default Education;
