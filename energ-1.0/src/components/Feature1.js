import React from "react";
import img1 from '../assets/img/LATASF.png'
import { Col, Container, Row } from "react-bootstrap";
import { Routes, Route, Link } from "react-router-dom";



// Parte de la landing page 1, que incluye imagen del producto y boton
class Feature1 extends React.Component {
    render() {
        return (
            <div>
                <Row className="p-5">
                    <Col className="d-flex  justify-content-center">
                        <Col className="my-auto d-flex  justify-content-center">
                            <Container>
                                <Row>
                                    <h1 class="display-1 lh-1 mb-3 d-flex align-items-center">Ener-G ULTRA</h1>
                                    {/* /<p class="lead fw-normal text-muted mb-5 d-flex align-items-center justify-content-center">Feel the Power</p>/ */}
                                </Row>
                                <Row>
                                    <div>
                                        
                                        <button to="/catalogo"
                                            type="button"
                                            className="btn btn-danger text-white p-10 align-self-start ml-auto">
                                                <Link to="/catalogo">
                                                    Conoce Más
                                                </Link>
                                        </button>
                                    </div>
                                </Row>
                            </Container>
                        </Col>

                    </Col>
                    <Col>
                        <img class="rounded mx-auto d-block" src={img1} style={{maxHeight: '30rem'}} alt="Imagen de lata Ener-G Ultra" />
                    </Col>
                </Row>
            </div>

            

        );
    }
}

export default Feature1;
