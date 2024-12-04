import Button from "./Button";
import CustomNavLink from "./CustomNavLink";

function MiniHeader() {
  return (
    <nav className="bg-white hidden lg:flex items-center shadow-sm justify-between rounded-full py-3 px-4 w-[52em]">
      <ul className="flex items-center gap-6">
        <CustomNavLink to="/">Plant Finder</CustomNavLink>
        <CustomNavLink to="plants">My Plants</CustomNavLink>
        <CustomNavLink to="notifications">Notifications</CustomNavLink>
        <CustomNavLink to="about-us">About Us</CustomNavLink>
        <CustomNavLink to="contact-us">Contact Us</CustomNavLink>
      </ul>
      <div className="flex items-center">
        <Button size="small" type="accent">Log in</Button>
        <Button size="small" type="accentOutlined">Sign Up</Button>
      </div>
    </nav>
  );
}

export default MiniHeader;
