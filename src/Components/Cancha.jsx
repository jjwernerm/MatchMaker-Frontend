import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

import * as BsIcons from "react-icons/bs";

export default function Cancha({ cancha }) {
  return (
    <div className="p-5 justify-content-center ">
      <Card className="canchas-card d-flex flex-column align-center justify-content-center p-3">
        <div className="cancha-img-container">
          <Card.Img className="cancha-img m-auto" variant="top" src={cancha.img} />
        </div>
        <Card.Body>
          <Card.Title className="fw-bold m-auto text-center">{cancha.nombre}</Card.Title>
          <Card.Text className="fw-bold">{cancha.deporte}</Card.Text>
          <Card.Text>Precio: {cancha.precio} $</Card.Text>
          <Card.Text>Ubicacion:   {cancha.ubicacion}   <BsIcons.BsFillPinMapFill /></Card.Text>
          <Button type="button" className="btn btn-primary bg-light" data-mdb-ripple-color="dark">Arrendar </Button>
        </Card.Body>
      </Card>
    </div>
  );
}
