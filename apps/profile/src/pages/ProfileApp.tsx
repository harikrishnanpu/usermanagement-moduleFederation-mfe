import React, { useEffect, useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { getProfile } from "../api";
import { authStore } from "host/store";

function ProfileApp() {
  const navigate = useNavigate();
  const [user, setUser] = useState(authStore.getUser());
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    return authStore.subscribe(() => setUser(authStore.getUser()));
  }, []);

  useEffect(() => {
    if (!authStore.getToken()) {
      setLoading(false);
      return;
    }

    getProfile()
      .then((data) => authStore.setUser(data.user))
      .catch(() => authStore.clearAuth())
      .finally(() => setLoading(false));
  }, []);

  function handleLogout() {
    authStore.clearAuth();
    navigate("/auth/login");
  }

  if (loading) {
    return <p>Loading profile...</p>;
  }

  if (!authStore.getToken() || !user) {
    return <Navigate to="/auth/login" replace />;
  }

  return (
    <div>
      <h2>Profile</h2>
      <p>Name: {user.name}</p>
      <p>Email: {user.email}</p>
      <p>ID: {user.id}</p>
      <button type="button" onClick={handleLogout}>
        Logout
      </button>
    </div>
  );
}

export default ProfileApp;
