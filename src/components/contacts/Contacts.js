import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import {FaLinkedin, FaMapMarker, FaTelegram} from 'react-icons/fa';


const Contacts = () => {
    return (
        <Card>
            <Card.Body>
                <Row>
                    <Col>
                        <Card.Text>
                             <span className={`me-3`}>
                                <FaMapMarker className="contact-icon"/> Montenegro, Podgorica
                            </span>
                            <span className={`me-3`}>
                                <a href={`https://t.me/saibaamiruku`} rel={`noreferrer noopener nofollow`}
                                   target={`_blank`}><FaTelegram className="contact-icon"/> Telegram</a>
                            </span>
                            <span className={`me-3`}>
                                <a href={`https://www.linkedin.com/in/rendal00/`} rel={`noreferrer noopener nofollow`}
                                   target={`_blank`}><FaLinkedin className="contact-icon"/> LinkedIn</a>
                            </span>
                        </Card.Text>
                    </Col>
                </Row>
            </Card.Body>
        </Card>
    )
}

export default Contacts;