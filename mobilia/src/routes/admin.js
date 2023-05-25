import { Outlet } from "react-router-dom";
import Sidebar from "../components/sidebar/sidebar";
// import {UserProvider} from"../components/context/userContext.js";
// import AdminProfile from"../components/context/userContext.js";

function Admin() {
    return (
      // <UserProvider>
      <div className="adminContainer">
        <Sidebar />
        <section className="adminProfile-main">
          {/* <AdminProfile /> */}
        </section>
        <section className="visitor-main">
          <Outlet />
        </section>
      </div>
      // {/* </UserProvider> */}
    )
  }
  
  export default Admin;