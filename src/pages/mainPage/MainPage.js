import React from 'react';
import Resume from "../../containers/resume/Resume";
import {Helmet} from "react-helmet";


const MainPage = () => {

    return (
        <>
            <Helmet>
                <title>
                    {`Curriculum vitae`}
                </title>
            </Helmet>
            <Resume/>
        </>

    );
};

export default MainPage;
