import React, {FunctionComponent} from 'react';

type Props = {};

const Interest: FunctionComponent<Props> = () => {

    return (
        <>
            <section className="resume-section p-3 p-lg-5 d-flex align-items-center" id="interests">
                <div className="w-100">
                    <h2 className="mb-5">Intérêts</h2>
                    <p>Tout d'abord passioné par l'univers de l'informatique et des nouvelles technologies, je suis
                        également un
                        grand fan de l'univers Marvel et de cinéma.</p>
                </div>
            </section>

            <hr className="m-0"/>
        </>
    );
};

export default Interest;
