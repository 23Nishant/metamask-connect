'use client';

import type { AppProps } from 'next/app'
import { Web3ReactProvider } from '@web3-react/core'
import { MetaMask } from "@web3-react/metamask"
import { hooks as metaMaskHooks, metaMask } from '../metaMask'

const connectors: [MetaMask, typeof metaMaskHooks][] = [
  [metaMask, metaMaskHooks],
]

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Web3ReactProvider connectors={connectors}>
      <Component {...pageProps} />
    </Web3ReactProvider>
  )
}

export default MyApp