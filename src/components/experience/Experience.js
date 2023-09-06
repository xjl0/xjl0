import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import React from "react";
import {useTranslation} from "react-i18next";
import experienceData from '../../locales/en.json';
import { FaBriefcase } from 'react-icons/fa';

const Experience = () => {
    const {t} = useTranslation();

    return (
        <Card>
            <Card.Header>
                <h2><FaBriefcase/> {t(`application.experience`)}</h2>
            </Card.Header>
            <Card.Body>
                <ListGroup variant="flush">
                    <ListGroup.Item
                        className="d-flex justify-content-between align-items-start"
                    >
                        <div className="ms-2 me-auto">
                            {experienceData.personal.experience.map((experienceItem, index) => (
                                <div key={index}>
                                    <h4>{t(`personal.experience.`+index+`.exp`)}</h4>
                                    <ul>
                                        {experienceItem.descriptions.map((description, descIndex) => (
                                            <li key={descIndex}>{t(`personal.experience.`+index+`.descriptions.`+descIndex)}</li>
                                        ))}
                                    </ul>
                                </div>
                            ))}
                        </div>
                    </ListGroup.Item>
                </ListGroup>
            </Card.Body>
        </Card>
    )
}
export default Experience;