import {useTranslation} from "react-i18next";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import experienceData from "../../locales/en.json";
import React from "react";
import { FaStar  } from 'react-icons/fa';

const Achievements = () => {
    const {t} = useTranslation();

    return (
        <Card>
            <Card.Header>
                <h2><FaStar /> {t(`application.achievements`)}</h2>
            </Card.Header>
            <Card.Body>
                <ListGroup variant="flush">
                    {experienceData.personal.achievements.map((Item, index) => (
                        <ListGroup.Item
                            className="d-flex justify-content-between align-items-start"
                            key={index}
                        >
                            {t(`personal.achievements.` + index)}
                        </ListGroup.Item>
                    ))}
                </ListGroup>
            </Card.Body>
        </Card>
    )
}

export default Achievements;