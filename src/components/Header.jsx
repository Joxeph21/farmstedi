import Logo from "../ui/Logo";
import MiniHeader from "../ui/MiniHeader";

function Header() {
  return (
    <header className="flex items-center  md:justify-start lg:justify-center px-24 gap-20">
      <Logo />
      <MiniHeader />
    </header>
  );
}

export default Header;
