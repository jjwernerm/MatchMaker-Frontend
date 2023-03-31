import { Link, useNavigate } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import FormCanchas from "./FormCanchas";
import "../styles/TenatProfile.css";
import { useContext, useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ContextOrigin from "../Context";
import { Container } from "react-bootstrap";
import context from "react-bootstrap/esm/AccordionContext";
const { Context } = ContextOrigin;
import Api from "../API/Api.jsx";

export default function TenantProfile() {
  const navigate = useNavigate();
  let sinCanchas = true;
  const { id } = useParams();
  console.log(id)

  useEffect(() => {
    const dataUser = async () => {
        const resp = Api.getUser(id);
        const usuario = await resp;
        console.log(usuario)
    }
    dataUser();
}, [])
  //   const cambioEstado = () => {

  //    sinCanchas = false;
  //    console.log(sinCanchas)

  //   };
  return (
    <div className="tenant-profile p-5">
      <Row className="justify-content-center p-5">
        {sinCanchas ? (
          <Col sm={6}>
            <Card className="card-mensaje ">
              <Card.Body className="card-body justify-content-center d-flex flex-column">
                <h3>Bienvenido Usuario</h3>
                <p>
                  No tiene canchas asociadas a tu cuenta. Registra tu cancha
                  aquí.{" "}
                </p>
                <Button
                  className="btn-actualizar"

                >
                  Registrar Cancha
                </Button>
              </Card.Body>
            </Card>
          </Col>
        ) : (
          <Col>
            <FormCanchas />
          </Col>
        )}
      </Row>
    </div>
  );
}
