import { Outlet } from "react-router-dom";
import Sidebar from "../components/sidebar/sidebar";
import style from"../routes/admin.css";

function Admin() {
    return (
      // <UserProvider>
      <div className="adminContainer">
        <Sidebar />
        <section className="adminProfile-main">
        </section>
        <section className="visitor-main">
          <Outlet />
        </section>
      </div>
    )
  }
  
  export default Admin;