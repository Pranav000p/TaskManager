import { useState } from "react";
import { useTasks } from "../hooks/useTasks";
import TaskForm from "../Components/TaskForm";
import TaskItem from "../Components/TaskItem";
import FilterBar from "../Components/FilterBar";

export default function TasksPage() {
  const {
    tasks, loading, error, clearError,
    handleCreate, handleUpdate, handleToggle, handleDelete,
  } = useTasks();

  const [filter, setFilter]     = useState("All");
  const [editTask, setEditTask] = useState(null);

  const onFormSubmit = (data) => {
    if (editTask) { handleUpdate(editTask._id, data); setEditTask(null); }
    else { handleCreate(data); }
  };

  const filtered = tasks.filter((t) => {
    if (filter === "Pending")   return !t.completed;
    if (filter === "Completed") return t.completed;
    return true;
  });

  const counts = {
    All:       tasks.length,
    Pending:   tasks.filter((t) => !t.completed).length,
    Completed: tasks.filter((t) => t.completed).length,
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-2xl mx-auto px-4 py-10">

        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 tracking-tight">Task Manager</h1>
          <div className="flex gap-4 mt-2">
            <span className="text-sm text-gray-400">
              <span className="font-semibold text-amber-500">{counts.Pending}</span> pending
            </span>
            <span className="text-sm text-gray-400">
              <span className="font-semibold text-green-500">{counts.Completed}</span> completed
            </span>
            <span className="text-sm text-gray-400">
              <span className="font-semibold text-gray-600">{counts.All}</span> total
            </span>
          </div>
        </div>

        {/* Error */}
        {error && (
          <div className="flex items-center justify-between bg-red-50 border border-red-200 text-red-600 text-sm rounded-2xl px-5 py-4 mb-5">
            <div className="flex items-center gap-2">
              <svg className="w-4 h-4 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z" />
              </svg>
              {error}
            </div>
            <button onClick={clearError} className="text-red-300 hover:text-red-500 ml-4 text-lg leading-none cursor-pointer">✕</button>
          </div>
        )}

        {/* Form */}
        <TaskForm onSubmit={onFormSubmit} editTask={editTask} onCancel={() => setEditTask(null)} />

        {/* Filters */}
        <FilterBar filter={filter} setFilter={setFilter} counts={counts} />

        {/* List */}
        {loading ? (
          <div className="flex flex-col gap-3">
            {[1, 2, 3].map((i) => (
              <div key={i} className="bg-white border border-gray-100 rounded-2xl h-20 shadow-sm" />
            ))}
          </div>
        ) : filtered.length === 0 ? (
          <div className="text-center py-20">
            <p className="text-4xl mb-3">
              {filter === "Completed" ? "🎉" : "📋"}
            </p>
            <p className="text-sm font-medium text-gray-400">
              {filter === "Completed" ? "No completed tasks yet"
               : filter === "Pending"  ? "No pending tasks — you're all caught up!"
               : "No tasks yet. Add one above!"}
            </p>
          </div>
        ) : (
          <div className="flex flex-col gap-3">
            {filtered.map((task) => (
              <TaskItem
                key={task._id}
                task={task}
                onToggle={handleToggle}
                onEdit={setEditTask}
                onDelete={handleDelete}
              />
            ))}
          </div>
        )}

        {/* Progress footer */}
        {counts.All > 0 && (
          <div className="mt-8">
            <div className="flex justify-between text-xs text-gray-400 mb-1.5">
              <span>Progress</span>
              <span>{Math.round((counts.Completed / counts.All) * 100)}%</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-1.5">
              <div
                className="bg-blue-500 h-1.5 rounded-full"
                style={{ width: `${(counts.Completed / counts.All) * 100}%` }}
              />
            </div>
          </div>
        )}

      </div>
    </div>
  );
}