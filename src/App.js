import React from 'react';
import { ethers } from 'ethers';
import Header from './components/header';
import Footer from './components/footer';
import TradeView from './components/tradeView';
import './App.css';

const App = () => {
  const { WrapperBuilder } = require("@redstone-finance/evm-connector");
  const state = {
    wrapperBuilder: WrapperBuilder,
    contractABI: "",
    usdc : "0x690000EF01deCE82d837B5fAa2719AE47b156697",
    usdcABI : '[{"constant":false,"inputs":[{"name":"newImplementation","type":"address"}],"name":"upgradeTo","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"newImplementation","type":"address"},{"name":"data","type":"bytes"}],"name":"upgradeToAndCall","outputs":[],"payable":true,"stateMutability":"payable","type":"function"},{"constant":true,"inputs":[],"name":"implementation","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"newAdmin","type":"address"}],"name":"changeAdmin","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"admin","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"inputs":[{"name":"_implementation","type":"address"}],"payable":false,"stateMutability":"nonpayable","type":"constructor"},{"payable":true,"stateMutability":"payable","type":"fallback"},{"anonymous":false,"inputs":[{"indexed":false,"name":"previousAdmin","type":"address"},{"indexed":false,"name":"newAdmin","type":"address"}],"name":"AdminChanged","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"implementation","type":"address"}],"name":"Upgraded","type":"event"}]',
  }

  async function handleRedStoneClick() {
    const provider = new ethers.JsonRpcProvider("https://sepolia-rpc.scroll.io");
    await provider;

    const contract = new ethers.Contract("0x47569254CaE9365CB6Cfdd8b683E66D945921B3f", state.abi, provider);

    const wrappedContract = WrapperBuilder.wrap(contract).usingDataService(
      {
        dataFeeds: ["ETH", "BTC"],
      },
    );

    await window.ethereum.request({ method: 'eth_requestAccounts' });
    const signer = new ethers.Wallet("f5d45e912c2ea4f183bf9edb3e01a76061e59015fc3431027bd130c6468c6506", provider);
    await signer;

    await wrappedContract.executeYourMethod();

    try {
      const tx = await contract.connect(signer).getLatestPrice(["ETH", "BTC"]);
      console.log('tx:',tx);
    } catch(err) {
      console.log('failed:', err);
    }
  }

  return (
    <div className="App">
      <Header className="header"/>
      <main className='main'>
        <TradeView {...state}/>
        <button className="button" onClick={handleRedStoneClick}>
          RedStone
        </button>
      </main>

      * Every user must approve the funds first then the contract call becomes available
      <Footer />
    </div>
  );
}

export default App;
