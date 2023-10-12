export function TwitterFollowCard( {userName, name, isFollowing}) {
    return (
        <article>
          <header>
            <img src={`https://unavatar.io/${userName}`} alt={`${name}'s avatar`} />
            <div>
              <strong>{name}</strong>
              <span>{`@${userName}`}</span>
            </div>
          </header>
          <aside>
            {isFollowing ? <button>Siguiendo</button> : <button>Seguir</button>}
          </aside>
        </article>
        )
}