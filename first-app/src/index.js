import React from 'react'
import ReactDOM from 'react-dom'

const App = () => {
  const buttonText = { text: 'Submit' }

  return (
    <div>
      <label htmlFor="name" className="label">
        Enter email
      </label>
      <input id="name" type="text" />
      <button style={{ backgroundColor: 'red', color: 'white' }}>
        {buttonText.text}
      </button>
    </div>
  )
}

ReactDOM.render(<App />, document.querySelector('#root'))
