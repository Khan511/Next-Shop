function Button({ type, children }) {
  return (
    <button
      type={type}
      className=" bg-green-800 border px-4 py-2 rounded hover:bg-green-700 text-gray-100 my-3 "
    >
      {children}
    </button>
  );
}

export default Button;
