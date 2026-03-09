const FILTERS = ["All", "Pending", "Completed"];

const activeStyles = {
  All:       "bg-blue-600 text-white",
  Pending:   "bg-amber-100 text-amber-700",
  Completed: "bg-green-100 text-green-700",
};

export default function FilterBar({ filter, setFilter, counts }) {
  return (
    <div className="flex gap-2 mb-5">
      {FILTERS.map((f) => (
        <button
          key={f}
          onClick={() => setFilter(f)}
          className={`flex items-center gap-1.5 px-4 py-2 rounded-xl text-sm font-semibold cursor-pointer border ${
            filter === f
              ? `${activeStyles[f]} border-transparent`
              : "bg-white text-gray-400 border-gray-200 hover:text-gray-600 hover:border-gray-300"
          }`}
        >
          {f}
          <span className={`text-xs font-normal ${filter === f ? "opacity-70" : "opacity-50"}`}>
            {counts[f]}
          </span>
        </button>
      ))}
    </div>
  );
}