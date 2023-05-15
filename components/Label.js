 
const Label = ({ label, children }) => {
  return (
    <label className="block my-2">
      <span>{label}</span>
      {children}
    </label>
  );
};

export default Label;
