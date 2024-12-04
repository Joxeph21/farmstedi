import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import Header from "./Header";
import Main from "./Main";
import bgImage from "../assets/images/bg.png";

function AppLayout() {
  return (
    <div className="pt-6 relative">
      <div
        className=" w-full inset-0 -z-10 h-full min-h-[60em] absolute"
        style={{
          backgroundImage: `url(${bgImage})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "bottom",
        }}
      ></div>
      <Header />

      <Main>
        <Outlet />
      </Main>
      <Footer />
    </div>
  );
}

export default AppLayout;
