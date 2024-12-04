function Button({
  children,
  size = "regular",
  disabled = false,
  onClick,
  buttonType = "button",
  type,
}) {
  const sizes = {
    small: "w-24",
    regular: "w-52",
    large: "w-full",
  };
  const base =
    sizes[size] + ` flex items-center justify-center font-normal `;

  const styles = {
    primary: base + `bg-brandGreen text-white rounded-full p-3`,
    secondary: base + ``,
    accentOutlined: base + ` rounded-full border border-brandGreen p-2 text-brandGreen`,
    accent: base + `text-brandGreen`,
  };

  return (
    <button
      onClick={onClick}
      type={buttonType}
      disabled={disabled}
      className={styles[type]}
    >
      {children}
    </button>
  );
}

export default Button;
