import React, { useContext } from 'react'
import { ThemeContext } from '../contexts/ThemeContext'
import { AuthContext } from '../contexts/AuthContext'

const Navbar = () => {
  const { isLoggedIn, changeAuthStatus } = useContext(AuthContext)
  const { isDarkTheme, darkTheme, lightTheme } = useContext(ThemeContext)
  const theme = isDarkTheme ? darkTheme : lightTheme
  const { background, color } = theme

  return (
    <nav
      style={{
        color,
        background,
        height: '120px',
      }}
    >
      <h2 style={{ textAlign: 'center' }}>Oak Academy</h2>
      <p onClick={changeAuthStatus}>
        {isLoggedIn ? 'Logged in' : 'Logged out'}
      </p>
      <div className="ui three buttons">
        <button className="ui button">Overview</button>
        <button className="ui button">Contact</button>
        <button className="ui button">Support</button>
      </div>
    </nav>
  )
}

export default Navbar
