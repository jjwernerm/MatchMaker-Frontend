import { useNavigate, NavLink } from "react-router-dom";
import {
  MDBBtn,
  MDBContainer,
  MDBCard,
  MDBRow,
  MDBCol,
  MDBInput,
} from "mdb-react-ui-kit";
import "../styles/login.css";
import Matchmakerlogo from "../img/logoTransparente.png";
import { useContext, useState } from "react";
import ContextOrigin from "../Context";
import Footer from "../Components/Footer";
import Api from "../API/Api.jsx";

const { Context } = ContextOrigin;

export default function Login() {
  const { setSession, session, users, setUsers } = useContext(Context);

  const [formData, setFormData] = useState({ email: "", password: "" });

  const navigate = useNavigate();

  const Login = async (event) => {
    event.preventDefault();
    try {
      const response = await Api.iniciarSesion(
        formData.email,
        formData.password
      );
      console.log(response.data);
      if (response.data.usuario.tipo_usuario == "Cliente") {
        setSession(response.data);
        console.log(session)
        navigate(`/user/dashboard/${response.data.usuario.id}`);
      } else {
        setSession(response.data);
        navigate(`/tenant/dashboard/${response.data.usuario.id}`);
      }
    } catch (error) {
      console.error(error);
      alert("Email o contraseña incorrecta");
    }
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevState) => ({ ...prevState, [name]: value }));
  };

  return (
    <>
      <MDBContainer className="d-flex">
        <div className="fondo-card d-flex">
          <MDBCard>
            <MDBRow>
              <MDBCol>
                <img src={Matchmakerlogo} />
              </MDBCol>
            </MDBRow>

            <MDBRow>
              <MDBCol>
                <p>Iniciar sesión en su cuenta</p>
              </MDBCol>
            </MDBRow>

            <MDBRow>
              <MDBCol>
                <MDBInput
                  className="input-login"
                  wrapperClass="mb-4"
                  label="Email address"
                  id="loginEmail"
                  type="email"
                  size="lg"
                  value={formData.email}
                  onChange={handleInputChange}
                  name="email"
                />
              </MDBCol>
            </MDBRow>

            <MDBRow>
              <MDBCol>
                <MDBInput
                  className="input-login"
                  wrapperClass="mb-4"
                  label="Password"
                  id="loginPasword"
                  type="password"
                  size="lg"
                  value={formData.password}
                  onChange={handleInputChange}
                  name="password"
                />
              </MDBCol>
            </MDBRow>

            <MDBRow>
              <MDBCol>
                <MDBBtn color="dark" onClick={Login}>
                  Login
                </MDBBtn>
              </MDBCol>
            </MDBRow>
            <MDBRow>
              <MDBCol>
                <a className="text-muted text-color" href="/recover">
                  ¿Has olvidado tu contraseña?
                </a>
              </MDBCol>
            </MDBRow>

            <MDBRow>
              <MDBCol>
                <p className="text-muted">¿No tienes una cuenta?</p>
              </MDBCol>
            </MDBRow>

            <MDBRow>
              <MDBCol>
                <NavLink to="/register" className="text-muted text-color">
                  Regístrate Aquí
                </NavLink>
              </MDBCol>
            </MDBRow>
          </MDBCard>

          <MDBCard className="card-img">
            <img
              src="https://w-wa.co.uk/wp-content/uploads/2021/04/Wynne-Williams_associates_landscape_architects_essex_MUGA_design_drone_shot.jpg"
              alt="Login image"
              className="w-100 img-login"
              style={{ height: "600px", width: "1000px" }}
            />
          </MDBCard>
        </div>
      </MDBContainer>
      <Footer />
    </>
  );
}
