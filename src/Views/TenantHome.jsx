import Footer from "../Components/Footer";
import FooterComponent from "../Components/Footer";
import SidebarComponent from "../Components/SidebarComponent";
import TenantDashboard from "../Components/TenantDashboard";

export default function TenantHome() {
  return (
    <div id="perfil" className="bg-light vh-100">
      <SidebarComponent/>
      <TenantDashboard />
    </div>
  );
}