import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import img1 from '../assets/img/1.png'


// Parte 3 de la landing page, donde se encuentra imagen y marca, en color gris
class Feature4 extends React.Component {
    render() {
        return (
            <div>
                <Row className="p-5">
                    <Col className="bg-secondary">
                        <img class="rounded mx-auto d-block" src={img1} alt="..." />
                    </Col>
                    <Col className="d-flex  justify-content-center bg-danger">
                        <h1 class="display-1 lh-1 mb-3 d-flex align-items-center justify-content-center text-white ">1.Característica</h1>
                        {/*<p class="lead fw-normal text-muted mb-5 d-flex align-items-center justify-content-center">Feel the Power</p>*/}
                    </Col>
                    <Col className="bg-secondary">
                        <h1 class="display-1 lh-1 mb-3 d-flex align-items-center justify-content-center text-white ">2.Característica</h1>
                    </Col>


                </Row>

            </div>


       

        );
    }
}

export default Feature4;