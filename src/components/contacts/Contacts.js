import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import {FaLinkedin, FaMapMarker, FaTelegram, FaGithub} from 'react-icons/fa';


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
                                <a href={`//t.me/saibaamiruku`} rel={`noreferrer noopener nofollow`}
                                   target={`_blank`}><FaTelegram className="contact-icon"/> Telegram</a>
                            </span>
                            <span className={`me-3`}>
                                <a href={`//www.linkedin.com/in/rendal00/`} rel={`noreferrer noopener nofollow`}
                                   target={`_blank`}><FaLinkedin className="contact-icon"/> LinkedIn</a>
                            </span>
                            <span className={`me-3`}>
                                <a href={`//github.com/xjl0`} rel={`noreferrer noopener nofollow`}
                                   target={`_blank`}><FaGithub className="contact-icon"/> GitHub</a>
                            </span>
                        </Card.Text>
                    </Col>
                </Row>
            </Card.Body>
        </Card>
    )
}

export default Contacts;