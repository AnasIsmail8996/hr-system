import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "../context/AuthContext";
import { useAuth } from "../hooks/useAuth";

import Login from "../pages/auth/Login";
import Register from "../pages/auth/Register";
import AdminLayout from "../components/layout/AdminLayout";
import UserDashboard from "../pages/user/UserDashboard.jsx";

import Profile from "../pages/adminProfile/Profile.jsx";
import Setting from "../pages/adminProfile/Setting.jsx";
import Notification from "../pages/adminProfile/Notification.jsx";
import About from "../pages/adminProfile/About.jsx";
import FAQ from "../pages/adminProfile/FAQ.jsx"
import AdminProfileLayout from "../pages/adminProfile/AdminProfileLayout.jsx";

const PrivateRoute = ({ children }) => {
  const { user } = useAuth();
  return user ? children : <Login />;
};

const RoleBasedDashboard = () => {
  const { user } = useAuth();
  if (user?.role === "admin") return <AdminLayout />;
  return <UserDashboard />;
};

const AppRouter = () => {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>

          
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />

          {/* DASHBOARD */}
          <Route
            path="/"
            element={
              <PrivateRoute>
                <RoleBasedDashboard />
              </PrivateRoute>
            }
          />
<Route
  element={
    <PrivateRoute>
      <AdminProfileLayout />
    </PrivateRoute>
  }
>
  <Route path="/profile" element={<Profile />} />
  <Route path="/settings" element={<Setting />} />
  <Route path="/notifications" element={<Notification />} />
  <Route path="/faq" element={<FAQ />} />
  <Route path="/about" element={<About />} />
</Route>
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
};

export default AppRouter;
