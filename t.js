import { ethers } from "ethers";

export default async ({ expressApp }) => {
  const provider = new ethers.providers.WebSocketProvider(
    "ws://localhost:8545"
  );

  console.log(await provider.getBlockNumber());

  provider.on("block", () => console.log("new block"));

  expressLoader({ app: expressApp });
};
