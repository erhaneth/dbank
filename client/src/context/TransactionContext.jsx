import React, { useEffect, useState } from "react";
import { ethers } from "ethers";
import { contractABI, contractAddress } from "../utils/constants";

export const TransactionContext = React.createContext();

const { ethereum } = window;

const getEthereumContract = () => {
  const provider = new ethers.providers.Web3Provider(ethereum);
  const signer = provider.getSigner();
  const contract = new ethers.Contract(contractAddress, contractABI, signer);
  // return contract;
  console.log({
    provider,
    signer,
    contract,
  });
};
export const TransactionProvider = ({ children }) => {
  const [currentAccount, setCurrentAccount] = useState("");
  const [ formData, setFormData ] = useState({ addressTo: "", amount: "", message: "", keyword: "" });

  const handleChange = (e, name) => {
    setFormData({ ...formData, [name]: e.target.value });
  }
    

  const checkIfWalletConnected = async () => {
    try {
        
        if (!ethereum) return;
        console.log("Please connect to a wallet");
        const accounts = await ethereum.request({ method: "eth_accounts" });
        // console.log( accounts );
        if (accounts.length > 0) {
          setCurrentAccount(accounts[0]);
        } else {
          console.log("No accounts found");
        }
    } catch (error) {
        console.log(error);
    }
    }
  

  const connectWallet = async () => {
    try {
      if (!ethereum) return;
      console.log("Please connect to a wallet");
      const accounts = await ethereum.request({
        method: "eth_requestAccounts",
      });
      setCurrentAccount(accounts[0]);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    checkIfWalletConnected();
  }, []);
   //   sending and storing transaction
  const sendTransaction = async (to, value) => {
    try {
        if (!ethereum) return;
        const { addressTo, amount, message, keyword } = formData;
        getEthereumContract();
    } catch (error) {
        throw new Error("No ethereum object found");
    }
    }



  return (
    <TransactionContext.Provider value={{ connectWallet, currentAccount, formData, setFormData, handleChange, sendTransaction }}>
      {children}
    </TransactionContext.Provider>
  );
}
