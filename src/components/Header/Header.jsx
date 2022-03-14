import { Link, useMatch, useResolvedPath } from "react-router-dom"

import logo from '../../assets/images/logo.svg'
import './Header.scss'

const HeaderLink = ({ children, to, ...props }) => {
	let resolved = useResolvedPath(to)
	let match = useMatch({ path: resolved.pathname, end: true })

	return (
		<Link
			className={match ? 'header-nav-link header-nav-link--active' : 'header-nav-link'}
			to={to}
			{...props}
		>
			{children}
		</Link>
	)
}

const Header = () => {
	return (
		<header className="header">
			<div className="container">
				<div className="header-inner">
					<Link to="/" className="header-logo">
						<img src={logo} className="header-logo-img" alt="Rick and Morty" />
					</Link>
					<nav className="header-nav">
						<HeaderLink to="/">Characters</HeaderLink>
						<HeaderLink to="/favorite">Watch list</HeaderLink>
					</nav>
				</div>
			</div>
		</header>
	)
}

export default Header