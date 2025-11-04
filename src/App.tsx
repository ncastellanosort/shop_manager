import { Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import Products from "./pages/products";
import Dashboard from "./pages/dashboard";
import Layout from "./components/layout";
import NotFound from "./pages/not-found";
import AuthProvider from "./contexts/auth/auth-provider";
import PrivateRoute from "./contexts/auth/private-route";
import { LoginForm } from "./components/login-form";
import { SignupForm } from "./components/signup-form";

function App() {
  return (
    <AuthProvider>
      <Routes>
        <Route index element={<Home />} />
        <Route path="/login" element={<LoginForm />} />
        <Route path="/signup" element={<SignupForm />} />

        <Route element={<PrivateRoute><Layout /></PrivateRoute>}>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/products" element={<Products />} />
        </Route>

        <Route path="*" element={<NotFound />} />
      </Routes>
    </AuthProvider>
  );
}

export default App
