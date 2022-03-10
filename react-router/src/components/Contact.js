import { Link } from 'react-router-dom'
import Modal from './Modal'

const Contact = () => {
  return (
    <div>
      <Modal/>
      <div
        className="ui raised very padded text container segment"
        style={{ marginTop: '20px' }}
      >
        <Link to="/alex" className="ui header">
          Alex
        </Link>
        <p>ContactContactContactContactContact</p>
      </div>
      <div
        className="ui raised very padded text container segment"
        style={{ marginTop: '20px' }}
      >
        <Link to="/willma" className="ui header">
          Willma
        </Link>
        <p>ContactContactContactContactContact</p>
      </div>
    </div>
  )
}

export default Contact
