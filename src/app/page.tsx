import type { NextPage } from 'next'
import WalletConnector from '../components/WalletConnector'

const Home: NextPage = () => {
  return (
    <div>
      <h1>My dApp</h1>
      <WalletConnector />
    </div>
  )
}

export default Home