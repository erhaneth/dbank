const main = async () => {
  //a factory generate instances of the transaction class
  const transactionsFactory = await hre.ethers.getContractFactory("Transactions");
  const transactionsContract = await transactionsFactory.deploy();

  await transactionsContract.deployed();

  console.log("Transactions address: ", transactionsContract.address);
};

const runMain = async () => {
  // to catch any errors in the main function
  try {
    await main();
    // success
    process.exit(0);
    
  } catch (error) {
    console.error("Failed 🙈 ",error);
    // failure
    process.exit(1);
  }
};

runMain();