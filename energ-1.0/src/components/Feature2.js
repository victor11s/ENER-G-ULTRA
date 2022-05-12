import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import img1 from '../assets/img/LATASF.png'
import { div } from "./LandingStyle";


// Parte 2 Landing page, incluye imagen y marca

class Feature2 extends React.Component {
    render() {
        return (
            <div className="bg-danger">
                <Row className="p-5">
                    <Col>
                    <img class="rounded mx-auto d-block" src={img1} style={{maxHeight: '30rem'}} alt="..." />
                    </Col>
                    <Col className="d-flex  justify-content-center">
                        <h1 class="display-1 lh-1 mb-3 d-flex align-items-center justify-content-center text-white">Ener-G ULTRA</h1>
                        {/*<p class="lead fw-normal text-muted mb-5 d-flex align-items-center justify-content-center">Feel the Power</p>*/}

                    </Col>

                </Row>

            </div>


         

        );
    }
}

export default Feature2;
