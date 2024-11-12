function Input({ label, id, name, value, onChange, type = "text" }) {
  return (
    <div>
      <label htmlFor={id} className="text-slate-300 block mb-1">
        {label}
      </label>
      <input
        type={type}
        id={id}
        className="bg-transparent border border-slate-500 text-slate-400 rounded-xl py-1 focus:bg-transparent"
        name={name}
        value={value}
        onChange={onChange}
      />
    </div>
  );
}
export default Input;
