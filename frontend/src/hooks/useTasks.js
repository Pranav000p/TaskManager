import { useState, useEffect } from "react";
import { getTasks, createTask, updateTask, deleteTask } from "../api/taskApi";

export function useTasks() {
  const [tasks, setTasks]     = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError]     = useState("");

  const clearError = () => setError("");

  const fetchTasks = async () => {
    try {
      setLoading(true);
      const res = await getTasks();
      setTasks(res.data.data);
      setError("");
    } catch {
      setError("Failed to connect. Make sure backend is running on port 5000.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => { fetchTasks(); }, []);

  const handleCreate = async (data) => {
    try {
      const res = await createTask(data);
      setTasks((prev) => [res.data.data, ...prev]);
    } catch { setError("Failed to create task."); }
  };

  const handleUpdate = async (id, data) => {
    try {
      const res = await updateTask(id, data);
      setTasks((prev) => prev.map((t) => (t._id === id ? res.data.data : t)));
    } catch { setError("Failed to update task."); }
  };

  const handleToggle = async (id, completed) => {
    try {
      const res = await updateTask(id, { completed: !completed });
      setTasks((prev) => prev.map((t) => (t._id === id ? res.data.data : t)));
    } catch { setError("Failed to toggle task."); }
  };

  const handleDelete = async (id) => {
    if (!window.confirm("Delete this task?")) return;
    try {
      await deleteTask(id);
      setTasks((prev) => prev.filter((t) => t._id !== id));
    } catch { setError("Failed to delete task."); }
  };

  return { tasks, loading, error, clearError, handleCreate, handleUpdate, handleToggle, handleDelete };
}