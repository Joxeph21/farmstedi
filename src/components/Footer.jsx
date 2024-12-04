import CustomLink from "../ui/CustomLink";
import Ximage from "../assets/svg/x.svg"
import facebook from "../assets/svg/facebook.svg"
import instagram from "../assets/svg/instagram.svg"

function Footer() {
  return (
    <footer className="h-96 w-full relative flex items-center flex-col justify-center gap-10 p-4 lg:p-24 bg-brandBlack">
      <div className="w-full flex gap-32 text-white border-b-[0.5px] border-brandLightGrey font-normal items-start py-10 h-full">
        <ul className="flex flex-col gap-4">
          <CustomLink>About</CustomLink>
          <CustomLink>Features</CustomLink>
          <CustomLink>Our Products</CustomLink>
        </ul>
        <ul className="flex flex-col gap-4">
          <CustomLink>Contact Us</CustomLink>
          <CustomLink>support@farmstedi.com</CustomLink>
          <CustomLink>+ (234) 567-8090</CustomLink>
        </ul>
        <div className="flex flex-col gap-4">
          <h2>Follow Us</h2>
          <div className="flex gap-3 items-center">
            <img src={Ximage} alt="x_image" />
            <img src={facebook} alt="facebook_image" />
            <img src={instagram} alt="instagram_image" />
          </div>
        </div>
      </div>
      <div className="flex text-xs text-white w-full justify-between items-center">
        <div className="flex items-center gap-8">
          <CustomLink>Privacy Policy</CustomLink>
          <CustomLink>Terms & Conditions</CustomLink>
          <CustomLink>Support</CustomLink>
        </div>
        <p className="font-medium ">© Copyright 2024, All Rights Reserved</p>
      </div>
    </footer>
  );
}

export default Footer;
