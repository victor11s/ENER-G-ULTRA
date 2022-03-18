import React from "react";
import { Col, Container, Row } from "react-bootstrap";


class Footer extends React.Component {
    render() {
        return (
            <div className="mt-5 text-white">
                <Row className="bg-danger">
                    <Col className="text-center"> Dererechos Reservados </Col>

                </Row>
                <Row className="bg-danger">
                    <Col className="text-center"> Ener-G Ultra (2022) </Col>

                </Row>

            </div>


        );
    }
}


export default Footer;
