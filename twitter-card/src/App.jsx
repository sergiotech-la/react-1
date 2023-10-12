import { TwitterFollowCard } from "./TwitterFollowCard"

function App() {
  return(
    <>
      <TwitterFollowCard userName='sergiotech-la' name='Sergio Antonio Herrera' isFollowing={true}/>
      <TwitterFollowCard />
    </>
  )
}

export default App