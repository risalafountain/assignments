import { useContext, useEffect, useState } from 'react'
import './App.css'
import { BountyContext } from './context/BountyProvider'
import Bounty from './components/Bounty'

function App() {
  const { getBounties, bounties } = useContext(BountyContext)
  useEffect(() => {
    getBounties()
  }, [])

  const bountyList = bounties.map(bounty => {
    return <Bounty {...bounty}  /> //how do i resolve the key value pairs

  })

  return (
    <>
      {bountyList}
    </>
  )
}

export default App
