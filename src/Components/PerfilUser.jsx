import { 
  Container, 
  Card,
  Row,
  Col
 } from "react-bootstrap";
import { useContext } from "react";
import ContextOrigin from "../Context";

const { Context } = ContextOrigin;

import "../styles/userProfile.css";
import Matchmakerlogo from '../img/logoTransparente.png'


export default function PerfilUser() {
  const { session } = useContext(Context);
  console.log(session)

  return (
    <>
      <Container className="d-flex">
        <div className="fondo-card d-flex vh-30  container-base">
          <Container className="d-flex justify-content-center">
            <Card style={{ width: "30rem" }}>
              <Row>
                <Col>
                  <img src={Matchmakerlogo} />
                </Col>
              </Row>
              <Card.Header>
                <h4>Datos de perfil</h4>
              </Card.Header>
              <Card.Body className="justify-content-center align-center">
                <Card.Title className="d-flex justify-content-center">{`${session.usuario.nombre}`}</Card.Title>
                <Card.Text>
                  <p>Correo electrónico: <b>{session.usuario.email}</b></p>
                  <p>Teléfono: <b>{session.usuario.telefono}</b></p>
                  <p>Comuna: <b>{session.usuario.comuna}</b></p>
                </Card.Text>
              </Card.Body>
            </Card>
          </Container>
        </div>
      </Container>
    </>
  );
}
