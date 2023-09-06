import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import ProgressBar from "react-bootstrap/ProgressBar";
import React from "react";
import {useTranslation} from "react-i18next";
import {FaCode} from 'react-icons/fa';

const Skills = () => {
    const {t} = useTranslation();

    return (
        <Card>
            <Card.Header>
                <h2><FaCode/> {t(`application.skills`)}</h2>
            </Card.Header>
            <Card.Body>
                <ListGroup variant="flush">
                    <ListGroup.Item
                        className="d-flex justify-content-between align-items-start"
                    >
                        <div className="ms-2 me-auto">
                            <div className="fw-bold">{t(`personal.skills.0.skill`)}</div>
                            {t(`personal.skills.0.description`)}
                        </div>
                    </ListGroup.Item>
                    <ListGroup.Item
                        className="d-flex justify-content-between align-items-start"
                    >
                        <div className="ms-2 me-auto">
                            <div className="fw-bold">{t(`personal.skills.1.skill`)}</div>
                            {t(`personal.skills.1.description`)}
                        </div>
                    </ListGroup.Item>
                    <ListGroup.Item
                        className="d-flex justify-content-between align-items-start"
                    >
                        <div className="ms-2 me-auto">
                            <div className="fw-bold">{t(`personal.skills.2.skill`)}</div>
                            {t(`personal.skills.2.description`)}
                        </div>
                    </ListGroup.Item>
                    <ListGroup.Item
                        className="d-flex justify-content-between align-items-start"
                    >
                        <div className="ms-2 me-auto">
                            <div className="fw-bold">{t(`personal.skills.3.skill`)}</div>
                            {t(`personal.skills.3.description`)}
                        </div>
                    </ListGroup.Item>
                    <ListGroup.Item
                        className="d-flex justify-content-between align-items-start"
                    >
                        <div className="ms-2 me-auto">
                            <div className="fw-bold">{t(`personal.skills.4.skill`)}</div>
                            {t(`personal.skills.4.description`)}
                        </div>
                    </ListGroup.Item>
                </ListGroup>
            </Card.Body>
            <Card.Footer>
                <ProgressBar now={94} label={`Golang & PHP`} className={`my-2`} striped/>
                <ProgressBar now={93} label={`JavaScrypt & JQuery`} className={`my-2`} striped/>
                <ProgressBar now={89} label={`PostgreSQL & MySQL & MariaDB`} className={`my-2`} striped/>
                <ProgressBar now={83} label={`ReactJS & TS`} className={`my-2`} striped/>
                <ProgressBar now={82} label={`HTML5 & CSS`} className={`my-2`} striped/>
            </Card.Footer>
        </Card>
    )
}
export default Skills;