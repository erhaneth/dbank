import "@nomiclabs/hardhat-waffle";

/** @type import('hardhat/config').HardhatUserConfig */
export const solidity = "0.8.9";
export const networks = {
  goerli: {
    //url from alchemy and pk from metamask
    url: "https://eth-goerli.g.alchemy.com/v2/lQ-4NFS38STcHpl_TPg40yWhf5A3Us52",
    accounts: ["eb642670949d71d7eb7e3efed0a53981bd86901e82601dc3731d2638bcdeaeae"]
  }
};
// https://dashboard.alchemyapi.io/
//hardhat-waffle is a plugin that helps you to test your smart contracts on the blockchain.