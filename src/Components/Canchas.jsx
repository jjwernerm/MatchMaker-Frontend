import { useState, useEffect } from "react";
import Cancha from "./Cancha";
import SidebarComponent from "../Components/SidebarComponent.jsx";
import "../styles/canchas.css";


export default function CanchasList() {
  const [canchas, setCanchas] = useState([]);


  useEffect(() => {
    fetch("https://match-maker-backend.vercel.app/canchas")
      .then((response) => response.json())
      .then((data) => {
        setCanchas(data);
      });
  }, []);


  return (
    <>
      <SidebarComponent />
      <div className="canchas-grid p-5 ">
        {console.log(canchas)}
        {canchas && canchas.map((cancha) => (
          <Cancha key={cancha.id} cancha={cancha}/>
        ))}
      </div>
    </>
  );
}
