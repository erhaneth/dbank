import React, { useContext } from "react";
import { SiEthereum } from "react-icons/si";
import { BsInfoCircle } from "react-icons/bs";
import { TransactionContext } from "../context/TransactionContext";
import { Loader } from "./";
import { shortAddress } from "../utils/shortAddress";

const commonStyles =
  "min-h-[70px] sm:px-0 px-2 sm:min-w-[120px] flex justify-center items-center border-[0.5px] border-gray-400 text-sm font-light text-white";

const Input = ({ placeholder, name, type, value, handleChange }) => (
  <input
    placeholder={placeholder}
    type={type}
    step="0.0001"
    value={value}
    onChange={(e) => handleChange(e, name)}
    className="my-2 w-full rounded-sm p-2 outline-none bg-transparent text-white border-none text-sm blue-glassmorphism"
  />
);
function Welcome() {
  const {
    connectWallet,
    currentAccount,
    formData,
    sendTransaction,
    handleChange,
    isLoading,
  } = useContext(TransactionContext);
  // console.log(connectWallet);

  const handleSubmit = (e) => {
    const { addressTo, amount, message, keyword } = formData;
    e.preventDefault();

    if (!addressTo || !amount || !message || !keyword) {
      return;
    }
    sendTransaction();
    // console.log("submit");
  };

  return (
    <div className="flex w-full justify-center items-center">
      <div className="flex md:flex-row flex-col items-start justify-between md:p-20 py-20 px-4 ">
        <div className="flex flex-1  justify-start flex-col md:mr-10">
          {!currentAccount && (
            <button
              type="button"
              onClick={connectWallet}
              className="flex flex-row justify-center items-center my-4 bg-[#353396] p-3 rounded-full cursor-pointer hover:bg-[#5867b2]"
            >
              <p className="text-white text-base font-bold">Connect Wallet</p>
            </button>
          )}
          <h1 className="text-4xl flex flex-row justify-center items-center font-bold text-white sm:text-2xl py-2 mt-10">
            In order to test the app, please connect your wallet.
          </h1>
          <div className="grid sm:grid-cols-3 grid-cols-3 w-full mt-20">
            <div className={`rounded-tl-2xl ${commonStyles}`}>Uncensorable</div>
            <div className={commonStyles}>Secure</div>
            <div className={`sm:rounded-tr-2xl ${commonStyles}`}>
              Persistent
            </div>
            <div className={`sm:rounded-bl-2xl ${commonStyles}`}>
              Transparent
            </div>
            <div className={commonStyles}>Decentralized</div>
            <div className={`rounded-br-2xl ${commonStyles}`}>Peer-to-Peer</div>
          </div>
        </div>
        <div className="flex flex-col flex-1 items-center justify-start w-full md:mt-0 mt-10">
          <div className="p-3 justify-end items-start flex-col rounded-xl h-40 sm:w-72 w-full my-5 eth-card .white-glassmorphism ">
            <div className="flex justify-between flex-col  w-full h-full">
              <div className="flex justify-between items-start">
                <div className="w-10 h-10 rounded-full border-2 border-white flex justify-center items-center ">
                  <SiEthereum fontSize={21} color="white" />
                </div>
                <BsInfoCircle fontSize={17} color="white" />
              </div>
              <div>
                <p className="text-white font-light text-sm">
                  {shortAddress(currentAccount)}
                </p>
                <p className="text-white font-semibold text-lg mt-1">
                  Ethereum
                </p>
              </div>
            </div>
          </div>
          <div className="p-5 sm:w-96 w-full flex flex-col justify-start items-center blue-glassmorphism">
            <Input
              placeholder="Address to"
              name="addressTo"
              type="text"
              handleChange={handleChange}
            />
            <Input
              placeholder="Amount (ether)"
              name="amount"
              type="number"
              handleChange={handleChange}
            />
            <Input
              placeholder="Keyword (Giphy as a gift)"
              name="keyword"
              type="text"
              handleChange={handleChange}
            />
            <Input
              placeholder="Enter your message"
              name="message"
              type="text"
              handleChange={handleChange}
            />
            <div className="h-[1px] w-full bg-gray-400 my-2" />

            {isLoading ? (
              <Loader />
            ) : (
              <button
                type="button"
                onClick={handleSubmit}
                className="text-white w-full mt-2 border-[1px] p-2 border-[#3d4f7c] hover:bg-[#3d4f7c] rounded-full cursor-pointer"
              >
                Send
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
export default Welcome;
