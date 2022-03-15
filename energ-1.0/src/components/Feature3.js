import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import img1 from '../assets/img/LATASF.png'

class Feature3 extends React.Component {
    render() {
        return (
            <div>
                <Row className="p-5">
                    <Col className="bg-secondary">
                    <img class="rounded mx-auto d-block" src={img1} style={{maxHeight: '30rem'}} alt="..." />
                    </Col>
                    <Col className="d-flex  justify-content-center bg-danger">
                        <h1 class="display-1 lh-1 mb-3 d-flex align-items-center justify-content-center text-white ">Ener-G ULTRA</h1>
                        {/*<p class="lead fw-normal text-muted mb-5 d-flex align-items-center justify-content-center">Feel the Power</p>*/}

                    </Col>

                </Row>

            </div>


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

export default Feature3;