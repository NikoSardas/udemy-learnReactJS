import React from 'react'
import { render } from 'react-dom'
import HemisphereDisplay from './HemisphereDisplay'

class App extends React.Component {
  state = { latitude: null, errorMessage: '' }

  componentDidMount() {
    window.navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude } = position.coords
        this.setState({ latitude })
      },
      (error) => {
        const { message: errorMessage } = error
        this.setState({ errorMessage })
      }
    )
  }
  componentDidUpdate() {
    console.log('update')
  }
  componentWillUnmount() {
    console.log('unmount')
  }

  render() {
    const { latitude, errorMessage } = this.state

    if (latitude && !errorMessage) {
      return (
        <div>
          <HemisphereDisplay latitude={latitude} />
        </div>
      )
    }
    if (!latitude && errorMessage) {
      return <div>{errorMessage}</div>
    }
    if (!latitude && !errorMessage) {
      return <div>Loading...</div>
    }
  }
}

render(<App />, document.querySelector('#root'))
