'use client';

import React from 'react'
import { useWallet } from '../useWallet'

const WalletConnector: React.FC = () => {
  const { isActive, account, isConnecting, connect, disconnect } = useWallet()

  return (
    <div>
      {isActive ? (
        <div>
          <p>Connected with {account}</p>
          <button onClick={disconnect}>Disconnect</button>
        </div>
      ) : (
        <button onClick={connect} disabled={isConnecting}>
          {isConnecting ? 'Connecting...' : 'Connect to MetaMask'}
        </button>
      )}
    </div>
  )
}

export default WalletConnector