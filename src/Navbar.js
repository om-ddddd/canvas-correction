import { Link, useHistory, useLocation } from 'react-router-dom';
import logo from './logo.png';
import { useEffect, useState } from 'react';

const Navbar = ({ avatar, login, setLogin }) => {
    const history = useHistory();
    const location = useLocation();
    const [open, setOpen] = useState(false);
    const [currentAvatar, setCurrentAvatar] = useState(avatar);

    useEffect(() => {
        setCurrentAvatar(avatar);
    }, [avatar]);


    const toggleDropdown = () => {
        setOpen(prev => !prev);
    };

    const handleLogout = () => {
        localStorage.setItem('login', false);
        localStorage.removeItem('username');
        localStorage.removeItem('name');
        localStorage.removeItem('email');
        localStorage.setItem('avatar', 'fa-user-astronaut');

        setLogin(false);
        setOpen(false);
        history.push('/');
    };

    useEffect(() => {
        setLogin(localStorage.getItem('login') === 'true')
    }, []);

    return (
        <header>
            <nav id="navbar">
                <div id="logo" className="fade-in">
                    <img src={logo} alt="logo" />
                    <Link to="/"><span className="name">AstroNova</span></Link>
                </div>

                <div id="link">
                    <ul className="nav">
                        <li className={`item fade-in ${location.pathname === '/' ? 'active-link' : ''}`}>
                            <Link to="/">Home</Link>
                        </li>
                        <li className={`item fade-in ${location.pathname === '/schedule' ? 'active-link' : ''}`}>
                            <Link to="/schedule">Schedule</Link>
                        </li>
                        <li className={`item fade-in ${location.pathname === '/teams' ? 'active-link' : ''}`}>
                            <Link to="/teams">Teams</Link>
                        </li>
                    </ul>
                </div>

                <div className="profile-dropdown">
                    <button
                        className={`profile-icon ${open ? 'pulse-glow' : ''}`}
                        onClick={toggleDropdown}
                    >
                        <i className={"fas " + currentAvatar}></i>
                    </button>

                    {open && (
                        <div id="dropdown-menu" className="dropdown-menu">
                            <Link to={"/account" + (!login ? "/login" : "")} onClick={() => setOpen(false)}>My Profile</Link>
                            {!login ? (
                                <Link to="/account/login" onClick={() => setOpen(false)}>Log In</Link>
                            ) : (
                                <Link to="/" className="logout-btn" onClick={handleLogout}>Log Out</Link>
                            )}
                        </div>
                    )}
                </div>
            </nav>
        </header>
    );
};

export default Navbar;
