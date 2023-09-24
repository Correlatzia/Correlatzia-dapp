import React from 'react';
import { ethers } from 'ethers';
import Header from './components/header';
import Footer from './components/footer';
import './App.css';

function App() {
  const { WrapperBuilder } = require("@redstone-finance/evm-connector");

  async function handleRedStoneClick() {
    const provider = new ethers.WebSocketProvider(window.ethereum);
    await provider;

    const contract = new ethers.Contract(address, abi, provider);

    const wrappedContract = WrapperBuilder.wrap(contract).usingDataService(
      {
        dataFeeds: ["ETH", "BTC"],
      },
    );

    await window.ethereum.request({ method: 'eth_requestAccounts' });
    const signer = provider.getSigner();
    await signer;

    await wrappedContract.executeYourMethod();

    try {
      const tx = await contract.connect(signer).getLatestPrice(["ETH", "BTC"]);
      console.log('tx:',tx);
    } catch(err) {
      console.log('failed:', err);
    }
    console.log("am jereeeeeeee");
  }

  return (
    <div className="App">
      <Header className="header"/>
      <main className='main'>
        <button className="button" onClick={handleRedStoneClick}>
          Deposit
        </button>
        <button className="button" onClick={handleRedStoneClick}>
          Buy
        </button>
        <button className="button" onClick={handleRedStoneClick}>
          RedStone
        </button>
      </main>
      <Footer />
    </div>
  );
}

export default App;
