import AuthProvider from "./components/organisms/AuthProvider";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from "./components/organisms/LoginPage";
import RegisterPage from "./components/organisms/RegisterPage";
import ProtectedRoutes from "./components/ProtectedRoutes";
import Preview from "./components/atoms/Preview";
import Profile from "./components/organisms/Profile";
import Dashboard from "./components/organisms/Dashboard";
import Challenge from "./components/organisms/Challenge";
import Course from "./components/organisms/Course";

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
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/course" element={<Course />} />
              <Route path="/challenge" element={<Challenge />} />
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
