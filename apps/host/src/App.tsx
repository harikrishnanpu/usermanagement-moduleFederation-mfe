import React from "react";

const Login = React.lazy(() => import("auth/Login"));

const App = () => {
  return (
    <div>
      <p>Hello, World!</p>
      <React.Suspense fallback={<p>Loading login...</p>}>
        <Login />
      </React.Suspense>
    </div>
  );
};

export default App;