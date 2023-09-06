import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Languages from "../../components/languages/Languages";
import Photo from "../../components/photo/Photo";
import Summary from "../../components/summary/Summary";
import Contacts from "../../components/contacts/Contacts";
import Skills from "../../components/skills/Skills";
import Experience from "../../components/experience/Experience";
import Achievements from "../../components/achievements/Achievements";
import Conclusion from "../../components/conclusion/Conclusion";
import Education from "../../components/education/Education";
import {useReactToPrint} from "react-to-print";

const Resume = () => {
    const componentRef = React.useRef();

    const handlePrint = useReactToPrint({
        content: () => componentRef.current,
    });

    return (
        <Container className="my-5 px-3" ref={componentRef}>
            <Row>
                <Col lg={3} sm={5}>
                    <Photo handlePrint={handlePrint}/>
                    <Languages/>
                </Col>
                <Col lg={9} sm={7}>
                    <Row className={"mb-3"}>
                        <Col>
                            <Contacts/>
                        </Col>
                    </Row>
                    <Row className={"mb-3"}>
                        <Col>
                            <Summary/>
                        </Col>
                    </Row>
                    <Row className={"mb-3"}>
                        <Col>
                            <Skills/>
                        </Col>
                    </Row>
                    <Row className={"mb-3"}>
                        <Col>
                            <Experience/>
                        </Col>
                    </Row>
                    <Row className={"mb-3"}>
                        <Col>
                            <Education/>
                        </Col>
                    </Row>
                    <Row className={"mb-3"}>
                        <Col>
                            <Achievements/>
                        </Col>
                    </Row>
                    <Row className={"mb-3"}>
                        <Col>
                            <Conclusion/>
                        </Col>
                    </Row>
                </Col>
            </Row>

        </Container>
    );
};

export default Resume;