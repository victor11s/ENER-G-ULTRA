import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Nav, FooterBottom, PageContainer, ContentWrap } from './NavComponent';

class Footer extends React.Component {
    render() {
        return (
                <FooterBottom className="mt-auto" >
                    <div className="text-white">
                        <Row className="bg">
                            <Col className="text-center"> Derechos Reservados </Col>

                        </Row>
                        <Row className="bg">
                            <Col className="text-center"> Ener-G Ultra (2022) </Col>

                        </Row>

                    </div>
                </FooterBottom>


        );
    }
}


export default Footer;
