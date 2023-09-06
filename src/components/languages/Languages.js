import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import React from "react";
import {useTranslation} from "react-i18next";

const Languages = () => {
    const {t, i18n} = useTranslation();

    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng).then(r => {
        });
    };

    return (
        <Card className={`sticky-top mb-3`} style={{top:".5em"}}>
            <Card.Body>
                <Card.Title>{t("application.languages")}</Card.Title>
            </Card.Body>
            <ListGroup variant="flush" as="ol" numbered>
                <ListGroup.Item
                    className="d-flex justify-content-between align-items-start"
                    action
                    active={i18n.language === t(`personal.languages.0.lng`)}
                    onClick={() => changeLanguage(t(`personal.languages.0.lng`))}
                >
                    <div className="ms-2 me-auto">
                        <div className="fw-bold">{t(`personal.languages.0.language`)}</div>
                        {t(`personal.languages.0.level`)}
                    </div>
                </ListGroup.Item>
                <ListGroup.Item
                    className="d-flex justify-content-between align-items-start"
                    active={i18n.language === t(`personal.languages.1.lng`)}
                    action
                    onClick={() => changeLanguage(t(`personal.languages.1.lng`))}
                >
                    <div className="ms-2 me-auto">
                        <div className="fw-bold">{t(`personal.languages.1.language`)}</div>
                        {t(`personal.languages.1.level`)}
                    </div>
                </ListGroup.Item>
                <ListGroup.Item
                    className="d-flex justify-content-between align-items-start"
                >
                    <div className="ms-2 me-auto">
                        <div className="fw-bold">{t(`personal.languages.2.language`)}</div>
                        {t(`personal.languages.2.level`)}
                    </div>
                </ListGroup.Item>
            </ListGroup>
        </Card>
    )
}

export default Languages;