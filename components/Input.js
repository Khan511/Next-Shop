function Input({ type, required, value, onChange, name }) {
  return (
    <input
      required={required}
      name={name}
      onChange={onChange}
      value={value}
      type={type}
      className="border rounded-sm block px-3 py-1 w-80 text-gray-600"
    />
  );
}

export default Input;
