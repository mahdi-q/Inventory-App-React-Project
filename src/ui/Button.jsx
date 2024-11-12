function Button({ onClick, style, text, disabled = false }) {
  return (
    <button onClick={onClick} className={style} disabled={disabled}>
      {text}
    </button>
  );
}
export default Button;
