import api from "../api/api";

export default function Register() {
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await api.post("/auth/register", {
        name: e.target.name.value,
        email: e.target.email.value,
        password: e.target.password.value,
      });
      alert("Registration successful");
    } catch (err) {
      alert(err.response?.data?.message || "Error");
    }
  };

  return (
  <div className="min-h-screen flex items-center justify-center bg-gray-100">
    <form onSubmit={handleSubmit} className="card">
      <h2 className="text-2xl font-semibold mb-4 text-center">
        Register
      </h2>

      <input
        name="name"
        placeholder="Name"
        className="input"
      />

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
        Register
      </button>
    </form>
  </div>
);

}
