import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

const LoginRegister = ({mode, setLogin}) => {
    


    const location = useLocation();
    const isLoginRoute = location.pathname.includes("login");
    const [isLogin, setIsLogin] = useState(isLoginRoute);

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: ''
    });
    const [message, setMessage] = useState('');
    const history = useHistory();

    const toggleForm = () => {
        const newIsLogin = !isLogin;
        setIsLogin(newIsLogin);
        setMessage('');
        setFormData({ name: '', email: '', password: '' });
    
        history.push(newIsLogin ? '/AstroNova/account/login' : '/AstroNova/account/register');
    };
    

    const handleChange = (e) => {
        setFormData(prev => ({
            ...prev,
            [e.target.name]: e.target.value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (isLogin) {
            // Login logic
            const stored = JSON.parse(localStorage.getItem('user'));
            if (stored && stored.email === formData.email && stored.password === formData.password) {
                setMessage(`Welcome back, ${stored.name}!`);
                localStorage.setItem('login', true);
                setLogin(true);
                localStorage.setItem('username', formData.email.split('@')[0]);
                localStorage.setItem('email', formData.email);
                localStorage.setItem('name', formData.email.split('@')[0]);
                history.push("/AstroNova/account");
            } else {
                setMessage('Invalid credentials. Please try again.');
            }
        } else {
            const userData = {
                name: formData.name,
                email: formData.email,
                password: formData.password
            };
            localStorage.setItem('user', JSON.stringify(userData));
            setMessage('Registered successfully! You can now log in.');
            setIsLogin(true);
        }
    };

    return (
        <div className="auth-container">
            <div className="auth-box">
                <h2>{isLogin ? 'Login' : 'Register'}</h2>
                <form onSubmit={handleSubmit}>
                    {!isLogin && (
                        <div className="input-group">
                            <label>Name</label>
                            <input
                                type="text"
                                name="name"
                                placeholder="Enter your name"
                                value={formData.name}
                                onChange={handleChange}
                                required
                            />
                        </div>
                    )}
                    <div className="input-group">
                        <label>Email</label>
                        <input
                            type="email"
                            name="email"
                            placeholder="Enter your email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="input-group">
                        <label>Password</label>
                        <input
                            type="password"
                            name="password"
                            placeholder="Enter your password"
                            value={formData.password}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <button type="submit" className="auth-btn">
                        {isLogin ? 'Login' : 'Register'}
                    </button>
                </form>
                {message && <p className="auth-message">{message}</p>}
                <p className="toggle-text">
                    {isLogin ? "Don't have an account?" : 'Already have an account?'}{' '}
                    <span onClick={toggleForm}>
                        {isLogin ? 'Register' : 'Login'}
                    </span>
                </p>
            </div>
        </div>
    );
};

export default LoginRegister;
