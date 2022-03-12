import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import img1 from '../assets/img/1.png'


class Feature2 extends React.Component {
    render() {
        return (
            <div className="bg-danger">
                <Row className="p-5">
                    <Col>
                        <img class="rounded mx-auto d-block" src={img1} alt="..." />
                    </Col>
                    <Col className="d-flex  justify-content-center">
                        <h1 class="display-1 lh-1 mb-3 d-flex align-items-center justify-content-center text-white">Ener-G ULTRA</h1>
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

export default Feature2;
