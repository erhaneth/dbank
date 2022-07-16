import { AiFillPlayCircle } from 'react-icons/ai'
import { SiEthereum } from 'react-icons/si'
import { BsInfoCircle } from 'react-icons/bs'

// import { loader } from './'
const commonStyles = "min-h-[70px] sm:px-0 px-2 sm:min-w-[120px] flex justify-center items-center border-[0.5px] border-gray-400 text-sm font-light text-white"
function Welcome() {

    const connectWallet = () => {
                 
        window.location.href = 'https://metamask.io/'
    }

    return (
        <div className="flex w-full justify-center items-center">
            <div className="flex md:flex-row flex-col items-start justify-between md:p-20 py-20 px-4 ">
                <div className="flex flex-1  justify-start flex-col md:mr-10">
                    <h1 className="text-3xl font-bold text-white sm:text-5xl text-gradient py-1">Why Blockchain</h1>
                    <button 
                      type="button"
                      onclick={connectWallet}
                      className="flex flex-row justify-center items-center my-5 bg-[#2952e3] p-3 rounded-full cursor-pointer hover:bg-[#5867b2]">
                        <p className="text-white text-base font-bold">Connect Wallet</p>
                        </button>
                        <div className="grid sm:grid-cols-3 grid-cols-3 w-full mt-10">
                          <div className={`rounded-tl-2xl ${commonStyles}`}>
                          Uncensorable
                          </div>
                          <div className={commonStyles}>Secure</div>
                          <div className={`rounded-tr-2xl ${commonStyles}`}>
                            Persistent
                          </div>
                          <div className={`rounded-bl-2xl ${commonStyles}`}>
                            Transparent
                          </div>
                          <div className={commonStyles}>Decentralized</div>
                          <div className={`rounded-br-2xl ${commonStyles}`}>
                            Peer-to-Peer
                          </div>

                        </div>

                    </div>
            </div>

        </div>
    )
}
export default Welcome;