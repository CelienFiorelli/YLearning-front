import AuthProvider from "./components/AuthProvider";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from "./views/LandingPage";
import LoginPage from "./views/LoginPage";
import RegisterPage from "./views/RegisterPage";
import ProtectedRoutes from "./components/ProtectedRoutes";
import Dashboard from "./views/Dashboard";
import Preview from "./views/Preview";
import Chat from "./views/Chat";
import { WebSocketProvider } from "./views/WebSocketProvider";
import Profil from "./views/Profil";

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route index element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route path="/verify/:verifyToken" element={<Preview />} />
            <Route element={<ProtectedRoutes />}>
              <Route path="/chat" element={
                <WebSocketProvider>
                  <Chat />
                </WebSocketProvider>
              } />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/profil" element={<Profil />} />
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
