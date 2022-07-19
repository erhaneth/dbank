import React, { useEffect, useState } from "react";
import { ethers } from "ethers";
import { contractABI, contractAddress } from "../utils/constants";

export const TransactionContext = React.createContext();

const { ethereum } = window;

const createEthereumContract = () => {
  const provider = new ethers.providers.Web3Provider(ethereum);
  const signer = provider.getSigner();
  const contract = new ethers.Contract(contractAddress, contractABI, signer);
  return contract;
  //   console.log({
  //     provider,
  //     signer,
  //     contract,
  //   });
};
export const TransactionProvider = ({ children }) => {
  const [currentAccount, setCurrentAccount] = useState("");
  const [formData, setFormData] = useState({
    addressTo: "",
    amount: "",
    message: "",
    keyword: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const [transactionCount, setTransactionCount] = useState(
    localStorage.getItem("transactionCount")
  );
  const [transactions, setTransactions] = useState([]);

  const handleChange = (e, name) => {
    setFormData((prevState) => ({ ...prevState, [name]: e.target.value }));
  };

  const getAllTransactions = async () => {
    try {
      if (ethereum) {
        const transactionsContract = createEthereumContract();
        // getAllTransactions() returns an array of transaction hashes -- from smart contract
        const availableTransactions = await transactionsContract.getAllTransactions();

        const structuredTransactions = availableTransactions.map((transaction) => ({
          addressTo: transaction.receiver,
          addressFrom: transaction.sender,
          timestamp: new Date(transaction.timestamp.toNumber() * 1000).toLocaleString(),
          message: transaction.message,
          keyword: transaction.keyword,
          amount: parseInt(transaction.amount._hex) / (10 ** 18) // convert to ether
        }));

        console.log(structuredTransactions);

        setTransactions(structuredTransactions);
      } else {
        console.log("Ethereum is not present");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const checkIfWalletIsConnect = async () => {
    try {
      if (!ethereum) return;
      // console.log("Please install MetaMask");
      const accounts = await ethereum.request({ method: "eth_accounts" });
      // console.log( accounts );
      if (accounts.length) {
        setCurrentAccount(accounts[0]);
        getAllTransactions();
      } else {
        console.log("No accounts found");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const checkIfTransactionsExists = async () => {
    try {
      if (ethereum) {
        const transactionsContract = createEthereumContract();
        const currentTransactionCount = await transactionsContract.getTransactionCount();

        window.localStorage.setItem("transactionCount", currentTransactionCount);
      }
    } catch (error) {
      console.log(error);

      throw new Error("No ethereum object");
    }
  };


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
      throw new Error("No ethereum object found");
    }
  };

  //sending from one to and another and storing transaction
  const sendTransaction = async (to, value) => {
    try {
      if (ethereum) {
        const { addressTo, amount, message, keyword } = formData;
        const transactionContract = createEthereumContract();
        const parsedAmount = ethers.utils.parseEther(amount);
        // transactionContract to call related function
        await ethereum.request({
          // request to send transaction  to the blockchain
          method: "eth_sendTransaction",
          params: [
            {
              from: currentAccount,
              to: addressTo,
              // 5208 hexadecimal value of 0.00021 ether (21000 wei ->subunit of ether)
              gas: "0x5208", // 21000 wei
              // parseEther(amount) converts the amount to wei
              value: parsedAmount._hex,
            },
          ],
        });
        // store the transaction in the blockchain
        const transactionHash = await transactionContract.addToBlockchain(
          addressTo,
          parsedAmount,
          message,
          keyword
        );

        setIsLoading(true);
        // wait for the transaction to be mined
        console.log(`loading transaction - ${transactionHash}`);
        await transactionHash.wait();

        // wait for the transaction to be mined
        console.log(`success - ${transactionHash}`);
        setIsLoading(false);

        const transactionCount =
          await transactionContract.getTransactionCount();

        setTransactionCount(transactionCount.toNumber());
        window.location.reload();
      } else {
        console.log("No ethereum object");
      }
    } catch (error) {
      console.log(error);
      throw new Error("No ethereum object found");
    }
  };
  useEffect(() => {
    checkIfWalletIsConnect();
    checkIfTransactionsExists();
  }, [transactionCount]);
  return (
    <TransactionContext.Provider
      value={{
        transactionCount,
        connectWallet,
        transactions,
        currentAccount,
        isLoading,
        sendTransaction,
        handleChange,
        formData,
      }}
    >
      {children}
    </TransactionContext.Provider>
  );
};
