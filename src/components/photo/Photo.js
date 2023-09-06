import Card from "react-bootstrap/Card";
import logo from "../../assets/logo.jpg";
import Badge from "react-bootstrap/Badge";
import Button from "react-bootstrap/Button";
import React from "react";
import {useTranslation} from "react-i18next";
import {FaPrint} from 'react-icons/fa'

const Photo = ({handlePrint}) => {
    const {t} = useTranslation();

    return (
        <Card className={"mb-3"}>
            <Card.Img variant="top" src={logo} alt="Photo" loading={"lazy"}/>
            <Card.Body>
                <Card.Title>{t("personal.name")}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">{t("personal.secondJob")}</Card.Subtitle>
                <Card.Subtitle className="mb-2 text-muted">{t("personal.mainJob")}</Card.Subtitle>
                <Card.Text>
                    <Badge bg="primary" className={"me-1"}>Golang</Badge>
                    <Badge bg="primary" className={"me-1"}>PHP</Badge>
                    <Badge bg="primary" className={"me-1"}>ReactJS</Badge>
                    <Badge bg="secondary" className={"me-1"}>JS</Badge>
                    <Badge bg="secondary" className={"me-1"}>TS</Badge>
                    <Badge bg="secondary" className={"me-1"}>SIP</Badge>
                    <Badge bg="secondary" className={"me-1"}>Rest API</Badge>
                    <Badge bg="primary" className={"me-1"}>MySQL</Badge>
                    <Badge bg="primary" className={"me-1"}>MariaDB</Badge>
                    <Badge bg="primary" className={"me-1"}>PostgreSQL</Badge>
                    <Badge bg="secondary" className={"me-1"}>JQuery</Badge>
                    <Badge bg="secondary" className={"me-1"}>Bootstrap</Badge>
                    <Badge bg="secondary" className={"me-1"}>Git</Badge>
                    <Badge bg="secondary" className={"me-1"}>GitHub</Badge>
                    <Badge bg="secondary" className={"me-1"}>K8s</Badge>
                    <Badge bg="secondary" className={"me-1"}>Docker</Badge>
                    <Badge bg="secondary" className={"me-1"}>ISP</Badge>
                    <Badge bg="secondary" className={"me-1"}>Goland</Badge>
                    <Badge bg="secondary" className={"me-1"}>VSC</Badge>
                    <Badge bg="secondary" className={"me-1"}>PHPMyAdmin</Badge>
                    <Badge bg="secondary" className={"me-1"}>HTML</Badge>
                    <Badge bg="secondary" className={"me-1"}>Create React App</Badge>
                    <Badge bg="secondary" className={"me-1"}>CSS</Badge>
                    <Badge bg="secondary" className={"me-1"}>WordPress</Badge>
                    <Badge bg="secondary" className={"me-1"}>npm</Badge>
                    <Badge bg="secondary" className={"me-1"}>NGINX</Badge>
                    <Badge bg="secondary" className={"me-1"}>Apache</Badge>
                    <Badge bg="secondary" className={"me-1"}>Kafka</Badge>
                    <Badge bg="secondary" className={"me-1"}>CentOS</Badge>
                    <Badge bg="secondary" className={"me-1"}>Ubuntu</Badge>
                    <Badge bg="secondary" className={"me-1"}>FreePBX</Badge>
                </Card.Text>
            </Card.Body>
            <Card.Footer className="d-grid gap-2">
                <Button onClick={handlePrint} variant="outline-light"><FaPrint/></Button>
            </Card.Footer>
        </Card>
    )
}

export default Photo;