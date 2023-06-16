import { useState } from "react";
import { Routes, Route,Navigate, useLocation } from "react-router-dom";
import Topbar from "./scenes/global/Topbar";
import Sidebar from "./scenes/global/Sidebar";
import Dashboard from "./scenes/dashboard";
import Building from "./scenes/building";
import Automotive from "./scenes/automotive";
import Electronic from "./scenes/electronics";
import Furniture from "./scenes/furniture";
import Invoices from "./scenes/invoices";
import Contacts from "./scenes/contacts";
import Employee from "./scenes/employee";
import Form from "./scenes/form";
import FAQ from "./scenes/faq";
import LoginPage from "./scenes/loginpage";
import Register from "./scenes/register";
import Geography from "./scenes/geography";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { ColorModeContext, useMode } from "./theme";
import Calendar from "./scenes/calendar/calendar";

function App() {
  const [theme, colorMode] = useMode();
  const [isSidebar, setIsSidebar] = useState(true);
  const location = useLocation();
  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="app">
        {(location.pathname !== "/"  && <Sidebar isSidebar={isSidebar} />) && (location.pathname !== "/register"  && <Sidebar isSidebar={isSidebar} />) }
        <main className="content">
        {location.pathname !== "/"  && <Topbar setIsSidebar={setIsSidebar} />}
            <Routes>
              <Route path="/" element={<LoginPage />} />
              <Route path="/register" element={<Register />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/employee" element={<Employee />} />
              <Route path="/contacts" element={<Contacts />} />
              <Route path="/invoices" element={<Invoices />} />
              <Route path="/building" element={<Building />} />
              <Route path="/automotive" element={<Automotive />} />
              <Route path="/electronic" element={<Electronic />} />
              <Route path="/furniture" element={<Furniture />} />
              <Route path="/form" element={<Form />} />
              <Route path="/faq" element={<FAQ />} />
              <Route path="/calendar" element={<Calendar />} />
              <Route path="/geography" element={<Geography />} />
            </Routes>
          </main>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
