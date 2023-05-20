import { Outlet, Route, Routes } from 'react-router-dom';
import './App.css';
import LoginPage from './pages/login/login';
import { RequireAuth } from 'react-auth-kit';
import Dashboard from './pages/admin/dashboard/adminDash';


function App() {
  return (
     <div className="App">
    <Routes>
    <Route path={'/dashboard'} element={
        <RequireAuth loginPath={'/login'}>
          <div>
            <Outlet/>
          </div>
        </RequireAuth>
      }>
        <Route path={'/dashboard'} element={<Dashboard/>}/>
      </Route>
      <Route path='/login' element={<LoginPage/>}/>
    </Routes>
    </div>
  );
}

export default App;
