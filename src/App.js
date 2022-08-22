import { Route } from 'react-router-dom'
import Home from './views/home'
import Web3 from 'web3'
import { useEffect } from 'react'

function App() {
  useEffect(() => {
    if (window.ethereum) {
      const web3 = new Web3(window.ethereum)
      web3.eth.requestAccounts().then(console.log)
    }
  }, [])

  return (
    <>
      <Route path="/" exact component={Home} />
    </>
  )
}

export default App
