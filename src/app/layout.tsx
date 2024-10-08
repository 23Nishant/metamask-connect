'use client';

import { ReactNode } from 'react'
import { Web3ReactProvider } from '@web3-react/core'
import { MetaMask } from "@web3-react/metamask"
import { hooks as metaMaskHooks, metaMask } from '../metaMask'

const connectors: [MetaMask, typeof metaMaskHooks][] = [
  [metaMask, metaMaskHooks],
]

export default function RootLayout({
  children,
}: {
  children: ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Web3ReactProvider connectors={connectors}>
          {children}
        </Web3ReactProvider>
      </body>
    </html>
  )
}