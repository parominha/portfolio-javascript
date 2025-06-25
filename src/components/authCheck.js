import { useEffect, useState } from "react"
import { Navigate } from "react-router-dom"
import user from "../config/user"

function AuthCheck({ children }) {
  const [loading, setLoading] = useState(true)
  const [isAuthenticated, setIsAuthenticated] = useState(false)

  useEffect(() => {
    const token = localStorage.getItem('token')
    if (token) {
      user.get('/dashboard', {
        headers: { Authorization: `Bearer ${token}` }
      })
      .then(() => {
        setIsAuthenticated(true)
      })
      .catch(() => {
        setIsAuthenticated(false)
      })
      .finally(() => setLoading(false))
    } else {
      setIsAuthenticated(false)
      setLoading(false)
    }
  }, [])

  if (loading) return <div>Carregando...</div>
  if (!isAuthenticated) return <Navigate to="/login" />

  return children
}

export default AuthCheck;