import React, { useState } from 'react';
import {ethers} from 'ethers';
import '../App.css';

const TradeView = () => {
  const [amount, setAmount] = useState('');
  const [action, setAction] = useState('buy');
  const [isApproved, setIsApproved] = useState(false);

  const handleActionChange = (e) => {
    setAction(e.target.value);
  };

  const handleApproveClick = () => {
    if (isApproved) {
        // call the approve of the coin token
        setIsApproved(true);
    } else {
        setIsApproved(false);
    }
  };

  return (
    <div className='tradeView'>
      <h2>Place Order</h2>
      <div>
        <label>
          Amount USDC:
          <input
            type="number"
            value={amount}
            placeholder="Enter amount"
          />
        </label>
      </div>
      <div>
        <label>
          Action:
          <select value={action} onChange={handleActionChange}>
            <option value="buy">Buy</option>
            <option value="sell">Sell</option>
          </select>
        </label>
      </div>
      <div>
        <button onClick={handleApproveClick}>
          {isApproved ? 'Submit' : 'Approve'}
        </button>
      </div>
    </div>
  );
};

export default TradeView;
