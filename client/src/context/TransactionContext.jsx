import React, {useEffect, useState } from "react";
import { ethers } from "ethers";
import { contractABI, contractAddress } from "../utils/constants";

export const TransactionContext = React.createContext();

const { ethereum } = window;

const  getEthereumContract = () => {
    const provider = new ethers.providers.Web3Provider(ethereum);
    const signer = provider.getSigner();
    const contract = new ethers.Contract(contractAddress, contractABI, signer);
    // return contract;
    console.log({

        provider,
        signer,
        contract
    });
}
export const TransactionProvider = ({ children }) => { 
    const [currentAccount, setCurrentAccount] = useState("");
    const checkIfWalletConnected = async () => {    
        if (!ethereum) 
        return 
        console.log("Please connect to a wallet");
        const accounts = await ethereum.request({ method: "eth_accounts" });
        console.log({ accounts });

    }

    const connectWallet = async () => {
       try {
        if (!ethereum) 
        return 
        console.log("Please connect to a wallet");
        const accounts = await ethereum.request({ method: 'eth_requestAccounts' });
        setCurrentAccount(accounts[0]);
       } catch (error) {
         console.log(error);
       }
    }

    useEffect(() => {   
        checkIfWalletConnected();
    }
    , []);

    return (
<TransactionContext.Provider value={{connectWallet, currentAccount}}>
    {children}
</TransactionContext.Provider>
    );

}