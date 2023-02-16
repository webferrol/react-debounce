import { useEffect, useState } from 'react'
import { User } from '../models/User'

const URL_BASE = 'https://api.github.com/users/'

export function useUser (userValue = 'webferrol') {
  const [user, setUser] = useState(userValue)

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
        userName: userResponse.login,
        githubUrl: userResponse.html_url,
        avatarUrl: userResponse.avatar_url
      }
    ))
  }

  useEffect(() => {
    getUser(user)
  }, [])

  return {
    getUser,
    user
  }
}
