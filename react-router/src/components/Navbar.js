import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className="ui raised very padded segment">
      <button className="ui teal inverted segment">Gloria</button>
      <div className="ui right floated header">
        <NavLink to="/">
          <button className="ui button">Home</button>
        </NavLink>

        <NavLink to="/about">
          <button className="ui button">About</button>
        </NavLink>

        <NavLink to="/contact">
          <button className="ui button">Contact</button>
        </NavLink>
      </div>
    </nav>
  )
}

export default Navbar
