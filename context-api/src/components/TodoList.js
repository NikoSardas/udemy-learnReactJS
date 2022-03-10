import React, { useContext } from 'react'
import { ThemeContext } from '../contexts/ThemeContext'

const TodoList = () => {
  const { isDarkTheme, darkTheme, lightTheme, changeTheme } =
    useContext(ThemeContext)
  const theme = isDarkTheme ? darkTheme : lightTheme
  const { background, color } = theme

  return (
    <div style={{ background, color, textAlign: 'center', height: '180px' }}>
      <p className="item">Plan the family trip</p>
      <p className="item">Go shopping for dinner</p>
      <p className="item">Go for a walk</p>
      <button className="ui button secondary" onClick={changeTheme}>
        Theme
      </button>
    </div>
  )
}

export default TodoList
