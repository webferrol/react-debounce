import { useEffect, useState } from 'react'
import UserComponent from './components/User'
import { User } from './models/User'
// import userResponse from './mocks/github-user.json'
// import userNotFount from './mocks/github-user-not-found.json'
import './App.css'

const URL_BASE = 'https://api.github.com/users/'

function App () {
  const [user, setUser] = useState('javier')
  const [value, setValue] = useState('')

  useEffect(() => {
    getUser(user)
  }, [])

  async function getUser (userValue) {
    const response = await fetch(`${URL_BASE}${userValue}`)
    const userResponse = await response.json()
    if (response?.message) {
      setUser(null)
      return
    }
    setUser(new User(
      {
        name: userResponse.name,
        githubUrl: userResponse.html_url,
        avatarUrl: userResponse.avatar_url
      }
    ))
  }

  function handleSetUser ({ target }) {
    if (target?.value.match(/^\s$/g)) return
    setValue(target.value)
  }

  async function handleSubmit (event) {
    event.preventDefault()
    await getUser(value)
  }
  return (
    <div className='container'>
      {
        user && <UserComponent {...user} />
      }
      <form onSubmit={handleSubmit}>
        <input
          onChange={handleSetUser}
          value={value}
          type='text'
        />
        <button>Buscar</button>
      </form>
    </div>
  )
}

export default App
