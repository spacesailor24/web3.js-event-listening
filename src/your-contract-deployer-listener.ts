import { Web3 } from "web3";

import { YOUR_CONTRACT_ABI, YOUR_CONTRACT_BYTECODE } from "./your_contract_abi";

(async () => {
  const WEB3_PROVIDER = "ws://127.0.0.1:1234";
  const web3 = new Web3(WEB3_PROVIDER);

  const yourContract = new web3.eth.Contract(YOUR_CONTRACT_ABI, "", {
    provider: WEB3_PROVIDER,
  });

  const deployOptions = {
    data: YOUR_CONTRACT_BYTECODE,
    arguments: ["constructorArgumentOne", 2, [3]],
  };
  const sendOptions = {
    from: "0x0",
    gas: `0x${(
      await web3.eth.estimateGas({
        data: YOUR_CONTRACT_BYTECODE,
      })
    ).toString(16)}`,
  };
  const yourContractDeployed = await yourContract
    .deploy(deployOptions)
    .send(sendOptions);

  const transferEvent = yourContractDeployed.events.YourEvent();
  transferEvent.on("data", (eventLog) => console.log(eventLog));
  transferEvent.on("error", (error) => console.log(error));
})();
