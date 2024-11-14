function SearchBar() {
  return (
    <div className="flex items-center justify-between">
      <span className="text-slate-300">Search</span>
      <input
        type="text"
        className="bg-transparent border border-slate-500 text-slate-400 rounded-xl py-1"
      />
    </div>
  );
}
export default SearchBar;
