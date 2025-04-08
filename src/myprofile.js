import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';

const MyProfile = () => {
    const [userData, setUserData] = useState({
        username: '',
        name: '',
        email: '',
        phone: 'Not provided',
    });

    useEffect(() => {
        setUserData({
            username: localStorage.getItem('username') || 'Guest',
            name: localStorage.getItem('name') || 'Guest',
            email: localStorage.getItem('email'),
            phone: localStorage.getItem('phoneNo') || 'Not provided',
        });
    }, []);

    return (
        <div className="profile-container">
            <h1 className="profile-title">
                Welcome, {userData.username} <span className="rocket">🚀</span>
            </h1>
            <div className="profile-card">
                <p><strong>Username:</strong> {userData.username}</p>
                <p><strong>Name:</strong> {userData.name}</p>
                <p><strong>Email:</strong> {userData.email}</p>
                <p><strong>Phone:</strong> {userData.phone}</p>
                <Link to="/account/edit">
                    <button className="profile-btn">
                        Edit Profile
                    </button>
                </Link>
            </div>
        </div>
    );
};

export default MyProfile;
