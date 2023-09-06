import {useTranslation} from "react-i18next";
import Card from "react-bootstrap/Card";
import React from "react";
import experienceData from "../../locales/en.json";
import ListGroup from "react-bootstrap/ListGroup";
import { FaBook } from 'react-icons/fa';

const Education = () =>{
    const {t} = useTranslation();

    return (
        <Card>
            <Card.Header>
                <h2><FaBook/> {t(`application.education`)} </h2>
            </Card.Header>
            <Card.Body>
                <ListGroup variant="flush">
                    {experienceData.personal.education.map((Item, index) => (
                        <ListGroup.Item
                            className="d-flex justify-content-between align-items-start"
                            key={index}
                        >
                            {t(`personal.education.` + index)}
                        </ListGroup.Item>
                    ))}
                </ListGroup>
            </Card.Body>
        </Card>
    )
}

export default Education;