import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard.jsx'

export function App () {
    const formatUserName = (userName) => `@${userName}`
    return (
        <section className='App'>
        <TwitterFollowCard formatUserName={formatUserName} isFollowing userName="midudev" name="Ginés Miñano Bernabéu"/>
        <TwitterFollowCard formatUserName={formatUserName} isFollowing={false}  userName="pheralb" name="Pablo Hernandez"/>
        <TwitterFollowCard formatUserName={formatUserName} isFollowing userName="elonmusk" name="Elon Musk"/>
        </section>
    )
}