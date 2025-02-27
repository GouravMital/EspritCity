import Web3 from 'web3';
import { InjectedConnector } from '@web3-react/injected-connector';

export const injected = new InjectedConnector({
  supportedChainIds: [1, 3, 4, 5, 42] // Ethereum networks (mainnet, ropsten, rinkeby, goerli, kovan)
});

export const getWeb3 = async () => {
  if (window.ethereum) {
    const web3 = new Web3(window.ethereum);
    try {
      await window.ethereum.request({ method: 'eth_requestAccounts' });
      return web3;
    } catch (error) {
      throw new Error('User denied account access');
    }
  }
  throw new Error('No Ethereum browser extension detected');
};