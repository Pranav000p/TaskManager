export default function TaskItem({ task, onToggle, onEdit, onDelete }) {
  const date = new Date(task.createdAt).toLocaleDateString("en-US", {
    month: "short", day: "numeric", year: "numeric",
  });

  return (
    <div className={`bg-white border rounded-2xl px-5 py-4 flex items-center gap-4 ${
      task.completed ? "border-gray-100 opacity-60" : "border-gray-200 shadow-sm"
    }`}>

      {/* Checkbox */}
      <button
        onClick={() => onToggle(task._id, task.completed)}
        title={task.completed ? "Mark as pending" : "Mark as done"}
        className={`w-6 h-6 rounded-full border-2 flex-shrink-0 flex items-center justify-center cursor-pointer ${
          task.completed
            ? "bg-green-500 border-green-500"
            : "border-gray-300 hover:border-blue-400 bg-white"
        }`}
      >
        {task.completed && (
          <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
          </svg>
        )}
      </button>

      {/* Text */}
      <div className="flex-1 min-w-0">
        <p className={`text-sm font-semibold truncate ${
          task.completed ? "line-through text-gray-400" : "text-gray-800"
        }`}>
          {task.title}
        </p>
        {task.description && (
          <p className="text-xs text-gray-400 mt-0.5 truncate">{task.description}</p>
        )}
        <p className="text-xs text-gray-300 mt-1">{date}</p>
      </div>

      {/* Badge */}
      <span className={`text-xs font-semibold px-3 py-1 rounded-full flex-shrink-0 ${
        task.completed
          ? "bg-green-50 text-green-600"
          : "bg-amber-50 text-amber-600"
      }`}>
        {task.completed ? "Done" : "Pending"}
      </span>

      {/* Actions */}
      <div className="flex gap-1 flex-shrink-0">
        <button
          onClick={() => onEdit(task)}
          title="Edit"
          className="p-2 rounded-xl text-gray-300 hover:text-blue-500 hover:bg-blue-50 cursor-pointer"
        >
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
          </svg>
        </button>
        <button
          onClick={() => onDelete(task._id)}
          title="Delete"
          className="p-2 rounded-xl text-gray-300 hover:text-red-500 hover:bg-red-50 cursor-pointer"
        >
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
          </svg>
        </button>
      </div>
    </div>
  );
}