import { AiFillPlayCircle } from "react-icons/ai";
import { SiEthereum } from "react-icons/si";
import { BsInfoCircle } from "react-icons/bs";

// import { loader } from './'
const commonStyles ="min-h-[70px] sm:px-0 px-2 sm:min-w-[120px] flex justify-center items-center border-[0.5px] border-gray-400 text-sm font-light text-white";

const Input = ({placeholder}) => {
    
     <input
      placeholder={placeholder}
     />
    
}
function Welcome() {
  const connectWallet = () => {
    window.location.href = "https://metamask.io/";
  };

  return (
    <div className="flex w-full justify-center items-center">
      <div className="flex md:flex-row flex-col items-start justify-between md:p-20 py-20 px-4 ">
        <div className="flex flex-1  justify-start flex-col md:mr-10">
          <button
            type="button"
            onclick={connectWallet}
            className="flex flex-row justify-center items-center my-5 bg-[#2952e3] p-3 rounded-full cursor-pointer hover:bg-[#5867b2]"
          >
            <p className="text-white text-base font-bold">Connect Wallet</p>
          </button>
          <h1 className="text-xl font-bold text-white sm:text-5xl text-gradient py-1">
            Why Blockchain
          </h1>
          <div className="grid sm:grid-cols-3 grid-cols-3 w-full mt-10">
            <div className={`rounded-tl-2xl ${commonStyles}`}>Uncensorable</div>
            <div className={commonStyles}>Secure</div>
            <div className={`rounded-tr-2xl ${commonStyles}`}>Persistent</div>
            <div className={`rounded-bl-2xl ${commonStyles}`}>Transparent</div>
            <div className={commonStyles}>Decentralized</div>
            <div className={`rounded-br-2xl ${commonStyles}`}>Peer-to-Peer</div>
          </div>
        </div>
        <div className="flex flex-col flex-1 items-center justify-start w-full md:mt-0 mt-10">
          <div className="p-3 justify-end items-start flex-col rounded-xl h-40 sm:w-72 w-full my-5 eth-card">
            <div className="flex flex-col justify-between w-full h-full">
              <div className="flex justify-between items-start">
                <div className="w-10 h-10 rounded-full border-2 border-white flex justify-center items-center ">
                  <SiEthereum fontSize={21} color="white" />
                </div>
                <BsInfoCircle fontSize={17} color="white" />
              </div>
              <p className="text-white font-light text-sm">Address</p>
              <p className="text-white font-semibold text-lg mt-1">Ethereum</p>
            </div>
          </div>
        </div>
      </div>
      <div className="p-5 sm:w-96 flex flex-col justify-start items-center blue-glassmorphism">

      </div>
    </div>
  );
}
export default Welcome;
