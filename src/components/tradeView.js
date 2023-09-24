import React, { useState } from 'react';
import {ethers} from 'ethers';
import '../App.css';

const TradeView = () => {
  const [amount, setAmount] = useState('');
  const [action, setAction] = useState('buy');
  const [isApproved, setIsApproved] = useState(false);
  const  usdcABI = '[{"name":"Transfer","inputs":[{"type":"address","name":"_from","indexed":true},{"type":"address","name":"_to","indexed":true},{"type":"uint256","name":"_value","indexed":false}],"anonymous":false,"type":"event"},{"name":"Approval","inputs":[{"type":"address","name":"_owner","indexed":true},{"type":"address","name":"_spender","indexed":true},{"type":"uint256","name":"_value","indexed":false}],"anonymous":false,"type":"event"},{"name":"UpdateMiningParameters","inputs":[{"type":"uint256","name":"time","indexed":false},{"type":"uint256","name":"rate","indexed":false},{"type":"uint256","name":"supply","indexed":false}],"anonymous":false,"type":"event"},{"name":"SetMinter","inputs":[{"type":"address","name":"minter","indexed":false}],"anonymous":false,"type":"event"},{"name":"SetAdmin","inputs":[{"type":"address","name":"admin","indexed":false}],"anonymous":false,"type":"event"},{"outputs":[],"inputs":[{"type":"string","name":"_name"},{"type":"string","name":"_symbol"},{"type":"uint256","name":"_decimals"}],"stateMutability":"nonpayable","type":"constructor"},{"name":"update_mining_parameters","outputs":[],"inputs":[],"stateMutability":"nonpayable","type":"function","gas":148748},{"name":"start_epoch_time_write","outputs":[{"type":"uint256","name":""}],"inputs":[],"stateMutability":"nonpayable","type":"function","gas":149603},{"name":"future_epoch_time_write","outputs":[{"type":"uint256","name":""}],"inputs":[],"stateMutability":"nonpayable","type":"function","gas":149806},{"name":"available_supply","outputs":[{"type":"uint256","name":""}],"inputs":[],"stateMutability":"view","type":"function","gas":4018},{"name":"mintable_in_timeframe","outputs":[{"type":"uint256","name":""}],"inputs":[{"type":"uint256","name":"start"},{"type":"uint256","name":"end"}],"stateMutability":"view","type":"function","gas":2216141},{"name":"set_minter","outputs":[],"inputs":[{"type":"address","name":"_minter"}],"stateMutability":"nonpayable","type":"function","gas":38698},{"name":"set_admin","outputs":[],"inputs":[{"type":"address","name":"_admin"}],"stateMutability":"nonpayable","type":"function","gas":37837},{"name":"totalSupply","outputs":[{"type":"uint256","name":""}],"inputs":[],"stateMutability":"view","type":"function","gas":1421},{"name":"allowance","outputs":[{"type":"uint256","name":""}],"inputs":[{"type":"address","name":"_owner"},{"type":"address","name":"_spender"}],"stateMutability":"view","type":"function","gas":1759},{"name":"transfer","outputs":[{"type":"bool","name":""}],"inputs":[{"type":"address","name":"_to"},{"type":"uint256","name":"_value"}],"stateMutability":"nonpayable","type":"function","gas":75139},{"name":"transferFrom","outputs":[{"type":"bool","name":""}],"inputs":[{"type":"address","name":"_from"},{"type":"address","name":"_to"},{"type":"uint256","name":"_value"}],"stateMutability":"nonpayable","type":"function","gas":111433},{"name":"approve","outputs":[{"type":"bool","name":""}],"inputs":[{"type":"address","name":"_spender"},{"type":"uint256","name":"_value"}],"stateMutability":"nonpayable","type":"function","gas":39288},{"name":"mint","outputs":[{"type":"bool","name":""}],"inputs":[{"type":"address","name":"_to"},{"type":"uint256","name":"_value"}],"stateMutability":"nonpayable","type":"function","gas":228030},{"name":"burn","outputs":[{"type":"bool","name":""}],"inputs":[{"type":"uint256","name":"_value"}],"stateMutability":"nonpayable","type":"function","gas":74999},{"name":"set_name","outputs":[],"inputs":[{"type":"string","name":"_name"},{"type":"string","name":"_symbol"}],"stateMutability":"nonpayable","type":"function","gas":178270},{"name":"name","outputs":[{"type":"string","name":""}],"inputs":[],"stateMutability":"view","type":"function","gas":8063},{"name":"symbol","outputs":[{"type":"string","name":""}],"inputs":[],"stateMutability":"view","type":"function","gas":7116},{"name":"decimals","outputs":[{"type":"uint256","name":""}],"inputs":[],"stateMutability":"view","type":"function","gas":1721},{"name":"balanceOf","outputs":[{"type":"uint256","name":""}],"inputs":[{"type":"address","name":"arg0"}],"stateMutability":"view","type":"function","gas":1905},{"name":"minter","outputs":[{"type":"address","name":""}],"inputs":[],"stateMutability":"view","type":"function","gas":1781},{"name":"admin","outputs":[{"type":"address","name":""}],"inputs":[],"stateMutability":"view","type":"function","gas":1811},{"name":"mining_epoch","outputs":[{"type":"int128","name":""}],"inputs":[],"stateMutability":"view","type":"function","gas":1841},{"name":"start_epoch_time","outputs":[{"type":"uint256","name":""}],"inputs":[],"stateMutability":"view","type":"function","gas":1871},{"name":"rate","outputs":[{"type":"uint256","name":""}],"inputs":[],"stateMutability":"view","type":"function","gas":1901}]';

  const handleAmountChange = (e) => {
    setAmount(e.target.value);
  };

  const handleActionChange = (e) => {
    setAction(e.target.value);
  };

  const handleApproveClick = async () => {
    console.log("aja");
    if (!isApproved) {console.log("aja");
        // call the approve of the coin token
        const provider = new ethers.JsonRpcProvider("https://sepolia-rpc.scroll.io");
        await provider;    

        const signer = new ethers.Wallet(PK, provider);//test account ensure funding before start the test
        await signer;
        console.log(await signer.getAddress(),'signer');
        const factory = await new ethers.Contract("0x690000EF01deCE82d837B5fAa2719AE47b156697", usdcABI, provider);
        const erc20 = await factory.attach("0x690000EF01deCE82d837B5fAa2719AE47b156697");
        await erc20.connect(signer).approve("0x690000EF01deCE82d837B5fAa2719AE47b156697", 0);
                
        setIsApproved(true);
    } else {
        const provider = new ethers.JsonRpcProvider("https://sepolia-rpc.scroll.io");
        await provider;    

        const signer = new ethers.Wallet(PK, provider);//test account ensure funding before start the test
        await signer;
        console.log(await signer.getAddress(),'signer');
        const factory = await new ethers.Contract("0x690000EF01deCE82d837B5fAa2719AE47b156697", usdcABI, provider);
        const contract = await factory.attach("0x690000EF01deCE82d837B5fAa2719AE47b156697");
        await contract.connect(signer).placeOrder("0x690000EF01deCE82d837B5fAa2719AE47b156697", 0);
        setIsApproved(false);
    }
  };

  return (
    <div className='tradeView'>
      <h2>Place Order</h2>
      <div>
        <label>
          Amount USDC:
          </label>
          <input
            type="number"
            value={amount}
            onChange={handleAmountChange}
            placeholder="Enter amount"
          />
      </div>
      <br></br>
      <div>
        <label>
          Action:
        </label>
          <select value={action} onChange={handleActionChange}>
            <option value="buy">Buy</option>
            <option value="sell">Sell</option>
          </select>
      </div>
      <br></br>
      <div>
        <button onClick={handleApproveClick}>
          {isApproved ? 'Submit' : 'Approve'}
        </button>
      </div>
    </div>
  );
};

export default TradeView;
