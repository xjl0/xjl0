import Card from "react-bootstrap/Card";
import {useTranslation} from "react-i18next";
import React from "react";
import {FaFlag} from 'react-icons/fa';

const Conclusion = () => {
    const {t} = useTranslation();

    return (
        <Card>
            <Card.Header>
                <h2><FaFlag/> {t(`application.conclusion`)}</h2>
            </Card.Header>
            <Card.Body>
                <Card.Text>
                    {t(`personal.conclusion`)}
                </Card.Text>
            </Card.Body>
        </Card>
    )
}

export default Conclusion;