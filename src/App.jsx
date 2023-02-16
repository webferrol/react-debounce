import { useState, useCallback } from 'react'
import debounce from 'just-debounce-it'
import UserComponent from './components/User'
import { useUser } from './hooks/useUser'
import './App.css'

function App () {
  const [value, setValue] = useState('')
  const { user, getUser } = useUser()

  const fn = debounce((valueNow) => {
    getUser(value)
  }, 2000)

  function handleSetUser ({ target }) {
    if (target?.value.match(/^\s$/g)) return
    setValue(target.value)
    fn()
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
