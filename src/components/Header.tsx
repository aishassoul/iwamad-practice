
import { NavLink } from 'react-router'
import { useLikes } from '../context/LikesContext'
import logo from '../assets/logo.svg'

type HeaderProps = {
  title: string
  subtitle: string
}

function Header({ title, subtitle }: HeaderProps) {
  const { likes } = useLikes()

  return (
    <header className="site-header">
      <div className="header-brand">
        <img
          className="site-logo"
          src={logo}
          alt=""
          width={40}
          height={40}
        />

        <div>
          <h1>{title}</h1>
          <p>{subtitle}</p>
        </div>
      </div>

      <p className="header-likes">♥ {likes}</p>

      <nav className="profile-links" aria-label="Main navigation">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/skills">Skills</NavLink>
        <NavLink to="/contact">Contact</NavLink>
        <NavLink to="/register">Register</NavLink>
      </nav>
    </header>
  )
}

export default Header
