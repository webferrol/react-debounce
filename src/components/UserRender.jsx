
function UserComponent ({ avatarUrl, githubUrl, name, userCreatedAt }) {
  return (
    <article className='card' style={{ width: '18rem' }}>
      <header className='card-header'>
        {
          avatarUrl && <img className='card-img-top image' src={avatarUrl} alt='Wonderfull!!!!' />
        }
        <h2 className='card-title'>
          Shift the overall look and feel by adding these wonderful
          touches to furniture in your home
        </h2>
      </header>
      <p className='card-text'>
        Ever been in a room and felt like something was missing? Perhaps
        it felt slightly bare and uninviting. I’ve got some simple tips
        to help you make any room feel complete.
      </p>
      <footer className='card-footer'>
        <div className='card-author'>
          <img className='image card-avatar' src={avatarUrl} alt='Mi nombre es' />
          <div className='card-author-info'>
            <a className='card-link' href={githubUrl}>{name}</a>
            <time className='card-date' dateTime='2020-06-28'>{userCreatedAt}</time>
          </div>
        </div>
        <a className='card-share' href='#'><img src='/src/assets/icon-share.svg' alt='Share' /></a>
      </footer>
    </article>
  )
}

function ErrorComponent ({ error }) {
  return (
    <strong style={{ color: 'white' }}>{error}</strong>
  )
}

export function UserRender ({ data, error }) {
  return (
    !data || error ? <ErrorComponent error={error} /> : <UserComponent {...data} />
  )
}
