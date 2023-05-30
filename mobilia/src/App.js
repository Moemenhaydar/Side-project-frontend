import { Outlet, Route, Routes } from "react-router-dom";
import "./App.css";
import LoginPage from "./pages/login/login.js";
import { RequireAuth } from "react-auth-kit";
import Admin from "./routes/admin.js";
import Dashboard from "./pages/admin/dashboard/adminDash.js";
import AdminPage from "../src/pages/admin/adminPage/adminpage.js";
import Categories from "./pages/admin/category/category.js";
import Products from "./pages/admin/products/product.js";
import Home from "./pages/home/home.js";
import SubCategory from "./pages/admin/subcategory/subcategory";
import ContactDash from "./pages/admin/contactus/contactus";
import Visiter from "./routes/visiter.js";
import About from "../src/pages/about/about.js";
import ProductVisitor from "./components/products/productvisitor";
// import Admin from "./routes/admin.js"

function App() {
  return (
    <div className="App">
      <Routes>
        <Route
          path={"/dashboard"}
          element={
            <RequireAuth loginPath={"/login"}>
              <div>
                <Outlet />
              </div>
            </RequireAuth>
          }
        >
          <Route
            path={"/dashboard/product"}
            element={
              <RequireAuth loginPath={"/login"}>
                <div>
                  <Outlet />
                </div>
              </RequireAuth>
            }
          />
          <Route path="/dashboard" element={<Admin />}>
            <Route path="/dashboard/dashboard" element={<Dashboard />} />
            <Route path="/dashboard/adminPage" element={<AdminPage />} />
            <Route path="/dashboard/categories" element={<Categories />} />
            <Route path="/dashboard/subcategory" element={<SubCategory />} />
            <Route path="/dashboard/products" element={<Products />} />
            <Route path="/dashboard/contact" element={<ContactDash />} />
          </Route>{" "}
        </Route>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/" element={<Visiter />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/product" element={<ProductVisitor />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
