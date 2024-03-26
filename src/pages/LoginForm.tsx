import React, { useEffect, useState } from "react";
import axios from "axios";

interface User {
  email: string;
  password: string;
  role: string;
  id: string;
}

const LoginForm = () => {
  const [error, setError] = useState<boolean>(false);
  const [message, setMessage] = useState<string>("");
  const [formData, setFormData] = useState<{ email: string; password: string }>(
    {
      email: "",
      password: "",
    }
  );
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get<User[]>(
          "https://65fada3f3909a9a65b1bb6ce.mockapi.io/User"
        );
        setUsers(response.data);
      } catch (error) {
        console.error("Error fetching users:", error);
        // Handle error if needed
      }
    };

    fetchUsers();
  }, []);

  const handleChange = (inputType: keyof typeof formData, newValue: string) => {
    setFormData({
      ...formData,
      [inputType]: newValue,
    });
  };

  const handleLogin = async (
    e: React.FormEvent<HTMLFormElement>
  ): Promise<void> => {
    e.preventDefault();

    // Find the user with the provided email and password
    const user = users.find(
      (u) => u.email === formData.email && u.password === formData.password
    );

    if (user) {
      setError(false);
      setMessage("Login successful");
      // Perform any additional actions upon successful login, such as navigating to a new page or storing user session
      return;
    }

    setError(true);
    setMessage("Invalid email or password");
  };

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <div>
          <label>Email:</label>
          <input
            className="border boder-secondary text-secondary"
            type="text"
            value={formData.email}
            onChange={(e) => handleChange("email", e.target.value)}
          />
        </div>
        <div>
          <label>Password:</label>
          <input
            className="border boder-secondary text-secondary"
            type="password"
            value={formData.password}
            onChange={(e) => handleChange("password", e.target.value)}
          />
        </div>

        <button className="border boder-secondary text-secondary">Login</button>
      </form>
      {error ? (
        <div style={{ color: "red" }}>{message}</div>
      ) : (
        <div style={{ color: "green" }}>{message}</div>
      )}
    </div>
  );
};

export default LoginForm;
