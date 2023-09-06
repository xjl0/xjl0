import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { Link, useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet';

const Error404 = () => {
    const navigate = useNavigate()
    return (
        <>
            <Helmet>
                <title>
                    {`Page not found`}
                </title>
            </Helmet>
            <Card className="text-center">
                <Card.Body className="p-5">
                    <div className="display-5 text-300 fs-error">404</div>
                    <p className="lead mt-4 text-800 font-sans-serif fw-semi-bold">
                        Page not found
                    </p>
                    <hr />
                    <Button
                        size='sm'
                        variant='primary'
                        icon='chevron-left'
                        onClick={() => navigate(-1)}
                    >
                        Back
                    </Button>
                    <Link className="btn btn-primary btn-sm ms-3" to="/">
                        Go to main
                    </Link>
                </Card.Body>
            </Card>
        </>
    );
};

export default Error404;
