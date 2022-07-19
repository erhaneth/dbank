import logo from "../images/dbank.png";
// import { image } from "../images/footer-bg.png";
function Footer() {
  return (
    <div className="w-full flex md:justify-center justify-between items-center flex-col p-4 gradient-bg-footer">
      {/* <img src={image} alt="logo" className="" /> */}
      <div className="w-full flex sm:flex-row flex-col justify-between items-center my-4">
        <div className="flex justify-center items-center">
          <img src={logo} alt="logo" className="w-32" />
        </div>
      </div>
      

      <div className="sm:w-[90%] w-full flex justify-between items-center mt-3">
        <p className="text-white flex justify-center ">© dbank2022</p>
      </div>
      <div className="sm:w-[90%] w-full h-[0.25px] bg-gray-400 mt-5 " />
    </div>
  );
}
export default Footer;
