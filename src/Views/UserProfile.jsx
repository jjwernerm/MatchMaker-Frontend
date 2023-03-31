import FooterComponent from "../Components/Footer";
import PerfilUser from "../Components/PerfilUser";
import SidebarComponent from "../Components/SidebarComponent.jsx";

export default function UserProfile() {

  return (
    <div id="perfil" className="bg-light vh-100">
      <SidebarComponent/>
      <PerfilUser />
    </div>
  );
}
