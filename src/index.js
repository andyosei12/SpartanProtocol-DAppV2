import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
 //import Contexts from './Contexts'
import { UseWalletProvider } from '@binance-chain/bsc-use-wallet'
import "./assets/scss/spartan.scss";

const rpcUrl = process.env.REACT_APP_RPC

ReactDOM.render(
  <React.StrictMode>
    <UseWalletProvider
      chainId={parseInt(process.env.REACT_APP_CHAIN_ID)}
      connectors={{
          walletconnect: { rpcUrl },
          bsc: {},
      }}
    >
      <App />
    </UseWalletProvider>
  </React.StrictMode>,
  document.getElementById('root'),
)
