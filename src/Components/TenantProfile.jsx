import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { MDBCol, MDBInput, MDBRow } from "mdb-react-ui-kit";

// import PhoneInput from 'react-phone-input-2'
// import 'react-phone-input-2/lib/style.css'

import { useContext, useState } from "react";

import '../styles/tenantDashboard.css';

import ContextOrigin from "../Context";
const { Context } = ContextOrigin;

export default function PerfilUser() {
  const { tenants, setTenants, session } = useContext(Context);

  const [tenant, setTenant] = useState({});


  const actInfo = () => {
    setTenant([...tenants, tenant]);
    alert("Datos actualizados correctamente!");
    navigate("/tenant/profile");
  };



  return (
    <div className="bg-light vh-100 ">
      <Form className=" form w-50 mx-auto border p-3 rounded  text-white ">
        <div>
          <h4>Datos de Perfil</h4>
          <hr />
        </div>
        <Form.Group className="mb-3" controlId="Tenant-Email">
          <Form.Label>Email address</Form.Label>
          <MDBInput wrapperClass='mb-4' label='Email address' id='tenantEmailInput' type='email' size="lg"
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="Tenant-address">
          <Form.Label>Dirección</Form.Label>
          <MDBInput wrapperClass='mb-4' label='Dirección' id='tenantAddressInput' type='text' size="lg"
          />
        </Form.Group>
        <MDBRow>
          <MDBCol col='4'>
            <Form.Group className="mb-3" controlId="Tenant-Phone" id="tenantPasswordInput">
              <Form.Label>Numero de telefono</Form.Label>

            </Form.Group>
          </MDBCol>
          <MDBCol col='8'>
            <Form.Group className="mb-3" controlId="Tenant-Password">
              <Form.Label>Password</Form.Label>
              <MDBInput wrapperClass='mb-4' label='Password' id='tenantPasswordInput' type='password' size="lg"
              />
            </Form.Group>
          </MDBCol>
        </MDBRow>
        <Button variant="mb-4 px-5" onClick={actInfo}>
          Actualizar
        </Button>
      </Form>
    </div >
  );
}
