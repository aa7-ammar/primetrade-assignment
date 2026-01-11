import api from "../api/api";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await api.post("/auth/login", {
        email: e.target.email.value,
        password: e.target.password.value,
      });
      localStorage.setItem("token", res.data.token);
      navigate("/dashboard");
    } catch (err) {
      alert(err.response?.data?.message || "Error");
    }
  };

  return (
  <div className="min-h-screen flex items-center justify-center bg-gray-100">
    <form onSubmit={handleSubmit} className="card">
      <h2 className="text-2xl font-semibold mb-4 text-center">
        Login
      </h2>

      <input
        name="email"
        placeholder="Email"
        className="input"
      />

      <input
        name="password"
        type="password"
        placeholder="Password"
        className="input"
      />

      <button className="btn-primary">
        Login
      </button>
    </form>
  </div>
  );

}
