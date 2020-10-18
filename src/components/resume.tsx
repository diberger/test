import React, {FunctionComponent} from 'react';

type Props = {};

const Resume: FunctionComponent<Props> = () => {

    return (
        <>
            <section className="resume-section p-3 p-lg-5 d-flex align-items-center" id="cv">
                <div className="w-100">
                    <h2 className="mb-5">CV</h2>
                    <a target="_blank" rel="noopener noreferrer" href="./uploads/cv_2.2.pdf">
                        <p>Télécharger mon CV en ligne ...</p>
                    </a>
                </div>
            </section>

            <hr className="m-0"/>
        </>
    );
};

export default Resume;
