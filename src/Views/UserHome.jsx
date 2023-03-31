import FooterComponent from "../Components/Footer";
import UserDashboard from "../Components/UserDashboard";
import SidebarComponent from "../Components/SidebarComponent.jsx";

export default function UserHome() {
  return (
    <div id="perfil" className="bg-light vh-100">
      <SidebarComponent/>
      <UserDashboard />
    </div>
  );
}

  