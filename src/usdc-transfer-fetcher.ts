import { Web3, utils } from "web3";

(async () => {
  const USDC_VERIFIED_ADDRESS = "0x6b175474e89094c44da98b954eedeac495271d0f";
  const TRANSFER_EVENT_TOPIC = utils.keccak256(
    "Transfer(address,address,uint256)"
  );
  const NUMBER_OF_BLOCKS = BigInt(10);

  const web3 = new Web3("http://localhost:1234");

  const logs = await web3.eth.getPastLogs({
    address: USDC_VERIFIED_ADDRESS,
    topics: [TRANSFER_EVENT_TOPIC],
    // This PR will allows us to pass a BigInt instead of having to format it as a hex string
    // https://github.com/web3/web3.js/pull/6219
    fromBlock: `0x${(
      (await web3.eth.getBlockNumber()) - NUMBER_OF_BLOCKS
    ).toString(16)}`,
  });

  console.log(logs);
})();
