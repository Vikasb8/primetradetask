import React, { useCallback, useEffect, useState } from "react";
import axios from "axios";
import { getApiMessage } from "../utils/apiMessage";

function Dashboard() {
  const [tasks, setTasks] = useState([]);
  const [title, setTitle] = useState("");
  const [message, setMessage] = useState("");
  const [messageType, setMessageType] = useState("");

  const token = localStorage.getItem("token");

  const fetchTasks = useCallback(async () => {
    try {
      const res = await axios.get(
        "http://127.0.0.1:8000/api/v1/tasks/",
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );

      setTasks(res.data);
    } catch (err) {
      setMessage(getApiMessage(err, "Error loading tasks"));
      setMessageType("error");
    }
  }, [token]);

  useEffect(() => {
    fetchTasks();
  }, [fetchTasks]);

  const addTask = async () => {
    if (!title) {
      setMessage("Enter task title");
      setMessageType("error");
      return;
    }

    try {
      const res = await axios.post(
        "http://127.0.0.1:8000/api/v1/tasks/",
        { title: title, description: "task" },
        { headers: { Authorization: `Bearer ${token}` } }
      );

      setMessage(res.data.message || "Task added");
      setMessageType("success");
      setTitle("");
      fetchTasks();

    } catch (err) {
      console.log(err.response?.data);
      setMessage(getApiMessage(err, "Error adding task"));
      setMessageType("error");
    }
  };

  const deleteTask = async (id) => {
    try {
      const res = await axios.delete(
        `http://127.0.0.1:8000/api/v1/tasks/${id}/`,
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );

      setMessage(res.data?.message || "Task deleted");
      setMessageType("success");
      fetchTasks();

    } catch (err) {
      setMessage(getApiMessage(err, "Error deleting task"));
      setMessageType("error");
    }
  };

  const logout = () => {
    localStorage.removeItem("token");
    window.location.href = "/";
  };

  return (
    <main className="dashboard-page">
      <section className="dashboard-shell">
        <header className="dashboard-header">
          <div>
            <span className="eyebrow">PrimeTrade</span>
            <h1>Dashboard</h1>
          </div>
          <button className="secondary-btn" onClick={logout}>Logout</button>
        </header>

        {message && <div className={`message ${messageType}`}>{message}</div>}

        <div className="task-composer">
          <label>
            New Task
            <input
              placeholder="Add a task title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </label>

          <button className="primary-btn" onClick={addTask}>Add Task</button>
        </div>

        <section className="task-list" aria-label="Tasks">
          {tasks.length === 0 ? (
            <div className="empty-state">No tasks yet.</div>
          ) : (
            tasks.map((t) => (
              <div className="task" key={t.id}>
                <span>{t.title}</span>
                <button className="danger-btn" onClick={() => deleteTask(t.id)}>
                  Delete
                </button>
              </div>
            ))
          )}
        </section>
      </section>
    </main>
  );
}

export default Dashboard;
