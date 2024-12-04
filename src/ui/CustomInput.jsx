function CustomInput({
  placeholder,
  name,
  type = "text",
  label,
  icon,
  onClick,
}) {
  return (
    <div className="flex font-normal  flex-col w-full gap-3">
      <label className="text-brandGrey" htmlFor={name}>
        {label}
      </label>
      <div className="w-full bg-brandLightGrey focus-within:ring-1 focus-within:ring-brandGreen flex items-center justify-between p-3 rounded-xl">
        <input
          name={name}
          className="w-full bg-transparent focus:outline-none"
          placeholder={placeholder}
          type={type}
        />
        {icon && (
          <span role="button" onClick={onClick} className="pl-2 cursor-pointer">
            {icon}
          </span>
        )}
      </div>
    </div>
  );
}

export default CustomInput;
