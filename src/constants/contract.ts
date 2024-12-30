import { client } from "@/app/client";
import { defineChain, getContract } from "thirdweb";


export const contractAddress = "0xc6caa200aa14b6D662753aed251fFD67B22b4630";
export const tokenAddress = "0xaD3Fdf30A78dd9C1fd7B0E312ADEb4feaF776F62";

export const contract = getContract({
    client: client,
    chain: defineChain(545),
    address: contractAddress
});

export const tokenContract = getContract({
    client: client,
    chain: defineChain(545),
    address: tokenAddress
});