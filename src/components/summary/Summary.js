import Card from "react-bootstrap/Card";
import React from "react";
import {useTranslation} from "react-i18next";
import {FaAward} from 'react-icons/fa';

const Summary = () => {
    const {t} = useTranslation();

    return (
        <Card>
            <Card.Header>
                <h2><FaAward/> {t(`application.summary`)} </h2>
            </Card.Header>
            <Card.Body>
                <Card.Text>
                    {t(`personal.summary`)}
                </Card.Text>
            </Card.Body>
        </Card>
    )
}

export default Summary;