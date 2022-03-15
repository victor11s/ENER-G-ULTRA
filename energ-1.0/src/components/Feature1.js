import React from "react";
import img1 from '../assets/img/LATASF.png'
import { Col, Container, Row } from "react-bootstrap";
import { Routes, Route } from "react-router-dom";

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
                                        <button
                                            type="button"
                                            className="btn btn-danger text-white p-10 align-self-start ml-auto"> Conoce Más
                                        </button>
                                    </div>
                                </Row>
                            </Container>
                        </Col>

                    </Col>
                    <Col>
                        <img class="rounded mx-auto d-block" src={img1} style={{maxHeight: '30rem'}} alt="..." />
                    </Col>
                </Row>
            </div>

            /* <Routes>
                    <Route path="url" element={"componente"}/>
            </Routes> */


            // <header class="masthead">
            //     <div class="container px-5">
            //         <div className="row">
            //             <div class=" col-md-6 ">
            //                 <h1 class="display-1 lh-1 mb-3">Ener-G ULTRA</h1>
            //                 <p class="lead fw-normal text-muted mb-5">Feel the Power</p>
            //             </div>
            //             <div className="col-md-6">
            //                     <img class="img-responsive" src={img1} alt="..." />
            //                 </div>
            //         </div>
            //     </div>
            // </header>

        );
    }
}

export default Feature1;
