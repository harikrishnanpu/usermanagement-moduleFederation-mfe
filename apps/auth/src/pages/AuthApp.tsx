import React from "react";
import { Link, Navigate, Route, Routes } from "react-router-dom";
import Login from "./Login";
import Signup from "./Signup";

function AuthApp() {
  return (
    <div>
      <h2>Auth</h2>
      <nav style={{ marginBottom: "10px" }}>
        <Link to="login">Login</Link> | <Link to="signup">Signup</Link>
      </nav>

      <Routes>
        <Route index element={<Navigate to="login" replace />} />
        <Route path="login" element={<Login />} />
        <Route path="signup" element={<Signup />} />
        <Route path="*" element={<Navigate to="login" replace />} />
      </Routes>
    </div>
  );
}

export default AuthApp;
