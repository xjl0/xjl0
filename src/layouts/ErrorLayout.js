import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import {Outlet} from 'react-router-dom';
import Container from "react-bootstrap/Container";

const ErrorLayout = () => {
    return (
        <Container className="my-5 px-md-5 px-3">
            <Row className="justify-content-center ">
                <Col sm={11} md={9} lg={7} xl={6} className="col-xxl-5">
                    <Outlet/>
                </Col>
            </Row>
        </Container>
    );
};

export default ErrorLayout;
