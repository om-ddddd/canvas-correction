import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import AvatarSelector from './AvatarSelector';

const EditProfile = ( {setAvatar} ) => {
  const history = useHistory();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [username, setUserName] = useState('');
  const [phoneNo, setPhoneNo] = useState('');

  useEffect(() => {
    setName(localStorage.getItem('name') || '');
    setEmail(localStorage.getItem('email') || '');
    setUserName(localStorage.getItem('username') || '');
    setPhoneNo(localStorage.getItem('phoneNo') || '');
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem('name', name);
    localStorage.setItem('email', email);
    localStorage.setItem('username', username);
    localStorage.setItem('phoneNo', phoneNo);
    history.push('/account');
  };

  return (
    <div className="edit-profile-container">
      <h2>Edit Your Profile</h2>
      <AvatarSelector onSelect={setAvatar} />
      <form onSubmit={handleSubmit} className="edit-profile-form">
        <label>
          UserName:
          <input
            type="text"
            value={username}
            onChange={(e) => setUserName(e.target.value)}
            required
          />
        </label>

        <label>
          Name:
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </label>

        <label>
          Email:
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </label>

        <label>
          Phone No:
          <input
            type="tel"
            value={phoneNo}
            placeholder='Enter Your Phone Number'
            onChange={(e) => setPhoneNo(e.target.value)}
          />
        </label>

        <button type="submit" className='profile-btn'>Save Changes</button>
      </form>
    </div>
  );
};

export default EditProfile;
