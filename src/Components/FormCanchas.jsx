import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Link } from "react-router-dom";

export default function FormCanchas() {
  return (
    <>
      <Row>
        <Col>
          <Card className="card-profile">
            <Card.Header className="text-start" as="h5">
              Crear Cancha
            </Card.Header>
            <Card.Body>
              <Form>
                <Row>
                  <Col sm={12}>
                    <Form.Group className="mb-3" controlId="formBasicText">
                      <Form.Label className="text-start text-label">
                        Nombre
                      </Form.Label>
                      <Form.Control type="text" placeholder="Nombre" />
                    </Form.Group>
                  </Col>
                  <Col sm={12}>
                    <Form.Group className="mb-3" controlId="formBasicText">
                      <Form.Label className="text-start text-label">
                        Deporte
                      </Form.Label>
                      <Form.Control type="text" placeholder="Deporte" />
                    </Form.Group>
                  </Col>
                  <Col sm={12}>
                    <Form.Group className="mb-3" controlId="formBasicText">
                      <Form.Label className="text-start text-label">
                        Disponibilidad
                      </Form.Label>
                      <Form.Control type="text" placeholder="Disponibilidad" />
                    </Form.Group>
                  </Col>
                </Row>
                <Row>
                  <Col sm={6}>
                    <Button className="btn-actualizar" type="submit">
                      Crear Cancha
                    </Button>
                  </Col>
                  <Col sm={6}>
                    <Link to="/">
                      <Button variant="light">Volver</Button>
                    </Link>
                  </Col>
                </Row>
              </Form>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </>
  );
}
