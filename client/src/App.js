import { useState } from "react";
import { Routes, Route,Navigate, useLocation,BrowserRouter } from "react-router-dom";
import Topbar from "./scenes/global/Topbar";
import Sidebar from "./scenes/global/Sidebar";
import Dashboard from "./scenes/dashboard";
import Building from "./scenes/building";
import Automotive from "./scenes/automotive";
import Invoices from "./scenes/invoices";
import Contacts from "./scenes/contacts";
import Employee from "./scenes/employee";
import Furniture from "./scenes/furniture";
import Electronic from "./scenes/electronics";
import Request from "./scenes/request";
import RequestForm from "./scenes/requestform";
import FurnitureForm from "./scenes/furnitureform";
import AutomotiveForm from "./scenes/automotiveform";
import ElectronicForm from "./scenes/electronicform";
import EmployeeForm from "./scenes/employeeform";
import FAQ from "./scenes/faq";
import LoginPage from "./scenes/loginpage";
import Register from "./scenes/register";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { ColorModeContext, useMode } from "./theme";
import Calendar from "./scenes/calendar/calendar";
import { useSelector } from "react-redux";
import { Provider } from 'react-redux';


function App() {
  const [theme, colorMode] = useMode();
  const [isSidebar, setIsSidebar] = useState(true);
  const location=useLocation();
  const isAuth = Boolean(useSelector((state) => state.token));
  console.log(useSelector((state) => state.token));
  
  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="app">
        {(location.pathname !== "/"  && <Sidebar isSidebar={isSidebar} />) && (location.pathname !== "/register"  && <Sidebar isSidebar={isSidebar} />) }
        <main className="content">
        {location.pathname !== "/"  && <Topbar setIsSidebar={setIsSidebar} />}
            <Routes>
              <Route path="/" element={!isAuth ? <LoginPage /> : <Navigate to="/dashboard"/>} />
              <Route
                path="/dashboard"
              element={isAuth ? <Dashboard /> : <Navigate to="/"/>}
              />
              <Route path="/register" element={<Register />} />
              <Route path="/employee" element={isAuth ? <Employee /> : <Navigate to="/"/>} />
              <Route path="/contacts" element={isAuth ? <Contacts /> : <Navigate to="/"/>} />
              <Route path="/invoices" element={isAuth ? <Invoices /> : <Navigate to="/"/>} />
              <Route path="/building" element={isAuth ? <Building /> : <Navigate to="/"/>} />
              <Route path="/automotive" element={isAuth ? <Automotive /> : <Navigate to="/"/>} />
              <Route path="/automotive/addautomotive" element={isAuth ? <AutomotiveForm /> : <Navigate to="/"/>} />
              <Route path="/electronics" element={isAuth ? <Electronic /> : <Navigate to="/"/>} />
              <Route path="/request" element={isAuth ? <Request /> : <Navigate to="/"/>} />
              <Route path="/request/addrequest" element={isAuth ? <RequestForm /> : <Navigate to="/"/>} />
              <Route path="/electronics/addelectronics" element={isAuth ? <ElectronicForm /> : <Navigate to="/"/>} />
              <Route path="/employee/addemployee" element={isAuth ? <EmployeeForm /> : <Navigate to="/"/>} />
              <Route path="/faq" element={isAuth ? <FAQ /> : <Navigate to="/"/>} />
              <Route path="/calendar" element={isAuth ? <Calendar /> : <Navigate to="/"/>} />
              <Route path="/furniture" element={<Furniture />} />
              <Route path="/furniture/addfurniture" element={<FurnitureForm />} />
            </Routes>
          </main>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
