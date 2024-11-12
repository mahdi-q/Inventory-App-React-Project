function Button({ onClick, style, text }) {
  return (
    <button onClick={onClick} className={style}>
      {text}
    </button>
  );
}
export default Button;
