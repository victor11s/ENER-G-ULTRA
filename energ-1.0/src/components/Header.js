import React from "react";
import { Col, Container, Row } from "react-bootstrap";


class Header extends React.Component {
    render() {
        return (
            <div>
      <div className="w-100 p-3 bg-danger text-end text-white">
        <Row>
          <Col className="text-start"> LOGO </Col>
          <Col className="text-start d-flex align-items-start text-white"> ENER-G </Col>
          <Col>
            <input type="text" class="form-control" placeholder="Buscar" aria-label="Buscar" aria-describedby="button-addon2" />
          </Col>
          <Col>
            <button class="btn btn-secondary d-flex align-items-start " type="button" id="button-addon2">icono</button>
          </Col>
          <Col>
            <button
              type="button"
              className="btn btn-link d-flex align-items-center justify-content-end text-white"> Catálogo
            </button>
          </Col>
          <Col>
            <button
              type="button"
              className="btn btn-link text-start d-flex text-white"> Noticias
            </button>
          </Col>
          <Col>
            <button
              class="btn btn-white dropdown-toggle d-flex align-items-center text-white"
              type="button"
              id="dropdownMenuButton"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"> Perfil
            </button>
          </Col>
        </Row>
      </div>
    </div>
           

        );
    }
}

export default Header;