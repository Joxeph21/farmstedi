import { NavLink } from "react-router-dom";

function CustomNavLink({ children, to }) {
  return (
    <NavLink
      className={({ isActive }) =>
        `${isActive && "p-3 rounded-full  bg-brandGreen"} 
        ${isActive ? "text-white" : "text-brandGrey p-2"}
        capitalize text-base  font-normal py-2`
      }
      to={to}
    >
      {children}
    </NavLink>
  );
}

export default CustomNavLink;
