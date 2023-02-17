import { useState, useRef } from 'react'
import { UserRender } from './components/UserRender'
import { useUser } from './hooks/useUser'
import './App.css'

function App () {
  const [value, setValue] = useState('')
  const noRepeat = useRef(null)
  const { getDebounceUser, error, user } = useUser()

  function handleSetUser ({ target }) {
    if (target?.value.match(/^\s$/g)) return
    if (noRepeat.current === value) return
    noRepeat.value = target.value
    setValue(target.value)
    getDebounceUser(target.value)
  }

  return (
    <div className='container'>
      <input
        onChange={handleSetUser}
        value={value}
        type='text'
      />
      <UserRender data={{ ...user }} error={error?.message} />
    </div>
  )
}

export default App
