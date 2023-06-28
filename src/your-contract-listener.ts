import { Contract } from "web3";

import { YOUR_CONTRACT_ABI } from "./your_contract_abi";

(async () => {
  const YOUR_CONTRACTS_DEPLOYED_ADDRESS = "0x0";
  const WEB3_PROVIDER = "ws://127.0.0.1:1234";

  const yourContract = new Contract(
    YOUR_CONTRACT_ABI,
    YOUR_CONTRACTS_DEPLOYED_ADDRESS,
    {
      provider: WEB3_PROVIDER,
    }
  );

  const transferEvent = yourContract.events.YourEvent();
  transferEvent.on("data", (eventLog) => console.log(eventLog));
  transferEvent.on("error", (error) => console.log(error));
})();
