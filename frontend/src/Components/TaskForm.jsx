import { useState, useEffect } from "react";

export default function TaskForm({ onSubmit, editTask, onCancel }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  useEffect(() => {
    if (editTask) { setTitle(editTask.title); setDescription(editTask.description || ""); }
    else          { setTitle(""); setDescription(""); }
  }, [editTask]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title.trim()) return;
    onSubmit({ title: title.trim(), description: description.trim() });
    setTitle(""); setDescription("");
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white border border-gray-200 rounded-2xl p-6 mb-6 shadow-sm">
      <h2 className="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-5">
        {editTask ? "Edit Task" : "New Task"}
      </h2>

      <div className="flex flex-col gap-3">
        {/* Title */}
        <div className="flex flex-col gap-1.5">
          <label className="text-xs font-medium text-gray-500">Title <span className="text-red-400">*</span></label>
          <input
            type="text"
            placeholder="What needs to be done?"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
            className="w-full px-4 py-3 text-sm text-gray-800 bg-gray-50 border border-gray-200 rounded-xl outline-none focus:bg-white focus:border-blue-500 focus:ring-2 focus:ring-blue-100 placeholder-gray-300"
          />
        </div>

        {/* Description */}
        <div className="flex flex-col gap-1.5">
          <label className="text-xs font-medium text-gray-500">Description <span className="text-gray-300">(optional)</span></label>
          <input
            type="text"
            placeholder="Add a short description..."
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="w-full px-4 py-3 text-sm text-gray-800 bg-gray-50 border border-gray-200 rounded-xl outline-none focus:bg-white focus:border-blue-500 focus:ring-2 focus:ring-blue-100 placeholder-gray-300"
          />
        </div>

        {/* Buttons */}
        <div className="flex gap-2 pt-1">
          <button
            type="submit"
            className="flex-1 bg-blue-600 hover:bg-blue-700 active:bg-blue-800 text-white text-sm font-semibold py-3 px-5 rounded-xl cursor-pointer"
          >
            {editTask ? "Update Task" : "Add Task"}
          </button>
          {editTask && (
            <button
              type="button"
              onClick={onCancel}
              className="px-5 py-3 text-sm font-semibold text-gray-500 bg-gray-100 hover:bg-red-200 active:bg-red-300 rounded-xl cursor-pointer"
            >
              Cancel
            </button>
          )}
        </div>
      </div>
    </form>
  );
}