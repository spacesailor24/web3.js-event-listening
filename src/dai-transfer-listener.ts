import { Contract } from "web3";

import { DAI_ABI } from "./dai-abi";

(async () => {
  const DAI_VERIFIED_ADDRESS = "0x6b175474e89094c44da98b954eedeac495271d0f";
  const WEB3_PROVIDER = "ws://127.0.0.1:1234";

  const daiContract = new Contract(DAI_ABI, DAI_VERIFIED_ADDRESS, {
    provider: WEB3_PROVIDER,
  });

  const transferEvent = daiContract.events.Transfer();
  transferEvent.on("data", (eventLog) => console.log(eventLog));
  transferEvent.on("error", (error) => console.log(error));
})();
