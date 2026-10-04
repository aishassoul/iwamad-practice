import { NavLink } from 'react-router'
import { useLikes } from '../context/LikesContext'

type HeaderProps = {
    title: string
    subtitle: string
}

function Header({ title, subtitle }: HeaderProps) {
    const { likes } = useLikes()
    return (
        <header className="site-header">
            <h1>{title}</h1>
            <p>{subtitle}</p>
            <p>♥ {likes}</p>

            <nav className="profile-links">
                <NavLink to="/">Home</NavLink>
                <NavLink to="/skills">Skills</NavLink>
                <NavLink to="/contact">Contact</NavLink>
            </nav>
        </header>
    )
}

export default Header