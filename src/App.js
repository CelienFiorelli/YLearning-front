import AuthProvider from "./components/organisms/AuthProvider";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from "./components/organisms/LoginPage";
import RegisterPage from "./components/organisms/RegisterPage";
import ProtectedRoutes from "./components/ProtectedRoutes";
import Preview from "./components/atoms/Preview";
import Profile from "./components/organisms/Profile";
import Dashboard from "./components/organisms/Dashboard";
import Challenge from "./components/organisms/challenge/Challenge";
import Course from "./components/organisms/course/Course";
import ChallengePreview from "./components/organisms/challenge/ChallengePreview";
import CourseSections from "./components/organisms/course/CourseSections";
import ChallengeComplete from "./components/organisms/challenge/ChallengeComplete";

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
              <Route path="/challenges">
                <Route path="" element={<Challenge />} />
                <Route path=":id/complete" element={<ChallengeComplete />} />
                <Route path=":id" element={<ChallengePreview />} />
              </Route>
              <Route path="/courses">
                <Route path="" element={<Course />} />
                <Route path=":id/sections" element={<CourseSections />} />
                <Route path=":id" element={<ChallengePreview />} />
              </Route>
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
