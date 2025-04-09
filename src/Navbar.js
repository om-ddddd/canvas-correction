import { Link, useHistory, useLocation } from 'react-router-dom';
import logo from './logo.png';
import { useEffect, useState } from 'react';

const Navbar = ({ avatar, login, setLogin }) => {
    const history = useHistory();
    const location = useLocation();
    const [open, setOpen] = useState(false);
    const [currentAvatar, setCurrentAvatar] = useState(avatar);
    const w = window.innerWidth;

    useEffect(() => {
        setCurrentAvatar(avatar);
    }, [avatar]);

    useEffect(() => {
        setCurrentAvatar('fa-user-astronaut');
    }, [login]);


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
        history.push('/AstroNova');
    };

    useEffect(() => {
        setLogin(localStorage.getItem('login') === 'true')
    }, []);

    return (
        <header>
            <nav id="navbar">
                <div id="logo" className="fade-in">
                    <img src={logo} alt="logo" />
                    <Link to="/AstroNova"><span className="name">AstroNova</span></Link>
                </div>

                {w > 770 && (
                    <div id="link">
                        <ul className="nav">
                            <li className={`item fade-in ${location.pathname === '/AstroNova' ? 'active-link' : ''}`}>
                                <Link to="/AstroNova">Home</Link>
                            </li>
                            <li className={`item fade-in ${location.pathname === '/AstroNova/schedule' ? 'active-link' : ''}`}>
                                <Link to="/AstroNova/schedule">Schedule</Link>
                            </li>
                            <li className={`item fade-in ${location.pathname === '/AstroNova/teams' ? 'active-link' : ''}`}>
                                <Link to="/AstroNova/teams">Teams</Link>
                            </li>
                        </ul>
                    </div>
                )}

                <div className="profile-dropdown">
                    <button
                        className={`profile-icon ${open ? 'pulse-glow' : ''}`}
                        onClick={toggleDropdown}
                        style={{ transform: `${!open ? 'scale(1)' : 'scale(1.1)'}` }}
                    >
                        <i className={"fas " + currentAvatar}></i>
                    </button>

                    {open && w<771 && (
                        <div id="dropdown-menu" className="dropdown-menu">
                            <Link to="/Astronova" onClick={() => setOpen(false)}>Home</Link>
                            <Link to="/Astronova/schedule" onClick={() => setOpen(false)}>Schedule</Link>
                            <Link to="/Astronova/teams" onClick={() => setOpen(false)}>Teams</Link>
                            <Link to={"/AstroNova/account" + (!login ? "/login" : "")} onClick={() => setOpen(false)}>My Profile</Link>
                            {!login ? (
                                <Link to="/AstroNova/account/login" onClick={() => setOpen(false)}>Log In</Link>
                            ) : (
                                <Link to="/AstroNova" className="logout-btn" onClick={handleLogout}>Log Out</Link>
                            )}
                        </div>
                    )}
                    {open && w>770 && (
                        <div id="dropdown-menu" className="dropdown-menu">
                            <Link to={"/AstroNova/account" + (!login ? "/login" : "")} onClick={() => setOpen(false)}>My Profile</Link>
                            {!login ? (
                                <Link to="/AstroNova/account/login" onClick={() => setOpen(false)}>Log In</Link>
                            ) : (
                                <Link to="/AstroNova" className="logout-btn" onClick={handleLogout}>Log Out</Link>
                            )}
                        </div>
                    )}
                </div>
            </nav>
        </header>
    );
};

export default Navbar;
