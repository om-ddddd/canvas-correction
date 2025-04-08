import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Home = () => {

  const [login, setLogin] = useState(localStorage.getItem('login') === 'true');

  useEffect(() => {
    setLogin(localStorage.getItem('login') === 'true');
  })

  return (
    <div className="hero-container">
      <canvas id="starfield"></canvas>

      <div className="hero-content">
        <h1>ASTRONOVA</h1>
        <p>Journey through space, science, and discovery</p>
        <div className="hero-buttons">
          <Link to="/schedule"><button className='hero-btn'>Explore Events</button></Link>
          <Link to={"/account" + (!login?"/register":"")}><button className='hero-btn'>Register Now</button></Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
