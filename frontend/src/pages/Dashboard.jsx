import { useEffect, useState } from "react";
import api from "../api/api";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

export default function Dashboard() {
  const {user} = useContext(AuthContext);
  const [tasks, setTasks] = useState([]);
  const [title, setTitle] = useState("");

  const fetchTasks = async () => {
    const res = await api.get("/tasks");
    setTasks(res.data);
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  const createTask = async () => {
    await api.post("/tasks", { title });
    setTitle("");
    fetchTasks();
  };

  const deleteTask = async (taskId) => {
  try {
    await api.delete(`/tasks/${taskId}`);
    fetchTasks();
  } catch (err) {
        alert("Only admins can delete tasks");
    }
  };


  return (
  <div className="min-h-screen bg-gray-100 p-6">
    <div className="max-w-2xl mx-auto bg-white rounded shadow p-6">
      
      
      <div className="flex justify-between items-center mb-6">
        <div>
          <h2 className="text-2xl font-semibold">Dashboard</h2>
          <p className="text-sm text-gray-600">
            Logged in as:{" "}
            <span className="font-medium">{user.role}</span>
          </p>
        </div>

        <button
          onClick={() => {
            localStorage.removeItem("token");
            window.location.href = "/login";
          }}
          className="text-sm text-red-600 hover:underline"
        >
          Logout
        </button>
      </div>

      
      <div className="flex items-center gap-2 mb-6">
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="New task title"
          className="input flex-1"
        />
        <button
          onClick={createTask}
          className="btn-primary"
        >
          Add
        </button>
      </div>



      =
      {tasks.length === 0 ? (
        <p className="text-gray-500 text-sm">
          No tasks yet.
        </p>
      ) : (
        <ul className="space-y-2">
          {tasks.map((task) => (
            <li
              key={task._id}
              className="flex justify-between items-center border p-3 rounded"
            >
              <span>{task.title}</span>

              {user.role === "admin" && (
                <button
                  onClick={() => deleteTask(task._id)}
                  className="text-sm text-red-600 hover:underline"
                >
                  Delete
                </button>
              )}
            </li>
          ))}
        </ul>
      )}
    </div>
  </div>
);

}
