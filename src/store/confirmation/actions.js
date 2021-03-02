import * as Types from './types';

import { getWalletProvider, getTokenContract } from "../../utils/web3";
import {errorToDispatch, payloadToDispatch} from '../helpers';

export const getApproval = (tokenAddress, contractAddress) => async dispatch => {
    const provider = getWalletProvider()
    let contract = getTokenContract(tokenAddress)

    try {
        let supply = await contract.totalSupply();
        const gPrice = await provider.getGasPrice();
        const gLimit = await contract.estimateGas.approve(contractAddress, supply);
        contract = await contract.approve(contractAddress, supply, {
            gasPrice: gPrice,
            gasLimit: gLimit
        });

        const wait = contract.wait.toString();

        console.log(wait);
        
        dispatch(payloadToDispatch(Types.GET_CONTRACT, contract));
    } catch (error) {
        dispatch(errorToDispatch(Types.CONTRACT_ERROR, error));
    }
}
