function SortBar({ categories }) {
  return (
    <div className="flex items-center justify-between mb-4">
      <span className="text-slate-300">Sort</span>
      
      <div className="flex items-center gap-x-4">
        <select className="bg-transparent border border-slate-500 text-slate-400 rounded-xl py-1">
          <option className="bg-slate-600 text-slate-300" value="">
            All
          </option>

          {categories.map((category) => (
            <option
              key={category.id}
              className="bg-slate-600 text-slate-300"
              value={category.id}
            >
              {category.title}
            </option>
          ))}
        </select>

        <select className="bg-transparent border border-slate-500 text-slate-400 rounded-xl py-1">
          <option
            className="bg-slate-600 text-slate-300"
            selected
            value="newest"
          >
            newest
          </option>
          <option className="bg-slate-600 text-slate-300" value="oldest">
            oldest
          </option>
        </select>
      </div>
    </div>
  );
}
export default SortBar;
