import './App.css'

export function App () {
    return (
        <article className='tw-followCard'>
            <header className='tw-followCard-header'>
                <img 
                className='tw-followCard-avatar'
                alt="El avatar de kikobeats" 
                src="https://unavatar.io/twitter/kikobeats"/>
                <div className='tw-followCard-info'>
                    <strong>Ginés Miñano Bernabéu</strong>
                    <span className='tw-followCard-infoUserName'>@kikobeats</span>
                </div>
            </header>
            <aside>
                <button className='tw-followCard-button'>
                    Seguir
                </button>
            </aside>
        </article>
    )
}