import {
  Container,
  Button,
  Form,
  Card,
  Row,
  Col
}
  from "react-bootstrap";

import { useContext, useState, useEffect } from "react";
import Api from "../API/Api.jsx";

import ContextOrigin from "../Context";

const { Context } = ContextOrigin;

import '../styles/userdashboard.css';

import Matchmakerlogo from '../img/logoTransparente.png'
import { useParams } from "react-router-dom";



export default function UserDashboard() {
  const { session } = useContext(Context);

  const { id } = useParams();
  console.log(id)

  useEffect(() => {
    const dataUser = async () => {
      const resp = Api.getUser(id);
      const usuario = await resp;
      console.log(usuario)
      console.log(session)
    }
    dataUser();
  }, [])

  return (
    <>
      <Container className="d-flex">
        <div className="fondo-card d-flex">
          <Card className="d-flex justify-content-center gap-3">

            <Row>
              <Col>
                <img src={Matchmakerlogo} />
              </Col>
            </Row>

            <Row>
              <Col>
                <p>Datos de perfil</p>
              </Col>
            </Row>

            <div className="d-flex1">
              <Row>
                <Col>
                  <Form.Group className="mb-3" controlId="formBasicText">
                    <Form.Label className="text-start text-label text-light">
                      Nombre
                    </Form.Label>
                    <Form.Control type="text" placeholder="Nombre" />
                  </Form.Group>
                </Col>
              </Row>

              <Row>
                <Col>
                  <Form.Group className="mb-3" controlId="formBasicText">
                    <Form.Label className="text-start text-label text-light">
                      Apellido Paterno
                    </Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Apellido Paterno"
                    />
                  </Form.Group>
                </Col>
              </Row>
            </div>

            <div className="d-flex1">
              <Row>
                <Col>
                  <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label className="text-start text-label text-light">
                      Email
                    </Form.Label>
                    <Form.Control type="email" placeholder="Email" />
                  </Form.Group>
                </Col>
              </Row>

              <Row>
                <Col>
                  <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label className="text-start text-label text-light">
                      Teléfono
                    </Form.Label>
                    <Form.Control type="text" placeholder="Teléfono" />
                  </Form.Group>
                </Col>
              </Row>
            </div>

            <Row>
              <Col>
                <Button className="btn-actualizar" type="submit">
                  Actualizar Datos
                </Button>
              </Col>
            </Row>

          </Card>
        </div>
      </Container>
    </>
  );
}
