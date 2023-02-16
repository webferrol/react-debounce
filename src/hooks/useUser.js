import { useCallback, useEffect, useState } from 'react'
import debounce from 'just-debounce-it'
import { User } from '../models/User'

export function useUser (userValue = 'webferrol') {
  const [user, setUser] = useState(userValue)
  const [error, setError] = useState(null)

  const getDebounceUser = useCallback(
    debounce(valueNow => {
      getUser(valueNow)
    }, 2000)
    , [])

  async function getUser (userValue) {
    setError(null)
    const response = await fetch(`${import.meta.env.VITE_FETCHING_DATA_URL}${userValue}`)

    if (!response.ok) {
      setError({ message: 'Name not found' })
      setUser(null)
      return
    }

    const userResponse = await response.json()
    if (response?.message) {
      setUser(null)
      setError({ message: 'Name not found' })
      return
    }
    setUser(new User(
      {
        name: userResponse.name,
        userName: userResponse.login,
        githubUrl: userResponse.html_url,
        avatarUrl: userResponse.avatar_url,
        userCreatedAt: userResponse.created_at
      }
    ))
  }

  useEffect(() => {
    getUser(user)
  }, [])

  return {
    getDebounceUser,
    getUser,
    error,
    user
  }
}
