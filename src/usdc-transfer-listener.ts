import { Web3 } from "web3";

(async () => {
  const USDC_VERIFIED_ADDRESS = "0x6b175474e89094c44da98b954eedeac495271d0f";
  const USDC_TRANSFERRED_FUNCTION_SIGNATURE =
    "0xddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef";
  const NUMBER_OF_BLOCKS = BigInt(10);

  const web3 = new Web3("http://localhost:1234");

  const logs = await web3.eth.getPastLogs({
    address: USDC_VERIFIED_ADDRESS,
    topics: [USDC_TRANSFERRED_FUNCTION_SIGNATURE],
    // This PR will allows us to pass a BigInt instead of having to format it as a hex string
    // https://github.com/web3/web3.js/pull/6219
    fromBlock: `0x${(
      (await web3.eth.getBlockNumber()) - NUMBER_OF_BLOCKS
    ).toString(16)}`,
  });

  console.log(logs);
})();
