import { useState } from 'react'
import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard.jsx'

const users = [
    {
        userName: 'midudev',
        name: 'Ginés Miñano Bernabeu',
        isFollowing: true
    },
    {
        userName: 'pheralb',
        name: 'Pablon H.',
        isFollowing: false
    },
    {
        userName: 'TMChein',
        name: 'Tomas',
        isFollowing: true
    }
]
export function App () {
    const [state, setState] = useState(0)
    return (
        <section className='App'>
        {
            users.map(({ userName, name, isFollowing }) => (
                <TwitterFollowCard
                    key={userName}
                    userName={userName}
                    initialIsFollowing={isFollowing}
                    >
                    {name}
                </TwitterFollowCard>
            ))
        }
            <button onClick={() => setState(state + 1)}>count</button>
        </section>
    )
}