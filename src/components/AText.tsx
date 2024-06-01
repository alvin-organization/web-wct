import React from "react";

const AText: React.FC = () => {
  const handleLogin = () => {
    // Redirect to Laravel route for OAuth authentication
    window.location.href = "http://your-laravel-app.com/auth/provider";
  };

  return (
    <>
      <div>
        <button onClick={handleLogin}>Login with Provider</button>
      </div>
    </>
  );
};

export default AText;
