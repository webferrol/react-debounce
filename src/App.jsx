import { useState } from 'react'
import UserComponent from './components/User'
import { useUser } from './hooks/useUser'
import './App.css'

function App () {
  const [value, setValue] = useState('')
  const { getDebounceUser, getUser, error, user } = useUser()

  function handleSetUser ({ target }) {
    if (target?.value.match(/^\s$/g)) return
    setValue(target.value)
    getDebounceUser(target.value)
  }

  async function handleSubmit (event) {
    event.preventDefault()
    await getUser(value)
  }
  return (
    <div className='container'>
      {
        (user && <UserComponent {...user} />) || error?.message
      }
      <form onSubmit={handleSubmit} style={{ marginTop: '1em' }}>
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
