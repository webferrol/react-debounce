export default function UserComponent ({ avatarUrl, githubUrl, name }) {
  return (
    <div className='card' style={{ width: '18rem' }}>
      <img src={avatarUrl} className='card-img-top' alt={githubUrl} />
      <div className='card-body'>
        <h5 className='card-title'>{name}</h5>
        <p className='card-text'>
          Some quick example text to build on the card title and make up the bulk of the card's content.
        </p>
        <a href={githubUrl} target='_blank' className='btn btn-primary' rel='noreferrer'>Go somewhere</a>
      </div>
    </div>
  )
}
