import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './Navbar';
import Starwarp from './StarFieldCanvas';
import Home from './home';
import LoginRegister from './LoginRegister';
import MyProfile from './myprofile';
import EditProfile from './editProfile';
import Schedule from './schedule';
import Teams from './Teams';
import { useEffect, useState } from 'react';

function App() {

  window.addEventListener("scroll", function () {
    let navbar = document.querySelector("#navbar");
  
    if (window.scrollY > 50){
      navbar.style.background = "rgba(20, 20, 20)";
  
      navbar.style.border = "1px solid #333;";
    }
    else{
      navbar.style.background = "transparent";
    }
  });

  const [avatar, setAvatar] = useState(localStorage.getItem('avatar') || "fa-user-astronaut");
  const [login, setLogin] = useState(localStorage.getItem('login') === 'true');
    useEffect(() => {
      const cursor = document.querySelector('.custom-cursor');

      const moveCursor = (e) => {
        cursor.style.left = `${e.clientX}px`;
        cursor.style.top = `${e.clientY}px`;
      };

      document.addEventListener('mousemove', moveCursor);

      return () => {
        document.removeEventListener('mousemove', moveCursor);
      };
    }, []);


  useEffect(() => {
    localStorage.setItem('avatar', avatar);
  }, [avatar]);

  return (
    <div className="App">
      <div className="custom-cursor"></div>
      <Router>
        <Navbar avatar={avatar} login={login} setLogin={setLogin} />
        <Starwarp />
        <Switch>
          <Route exact path="/AstroNova">
            <Home />
          </Route>
          <Route exact path="/AstroNova/account/login">
            <LoginRegister mode={"login"} setLogin={setLogin}/>
          </Route>
          <Route exact path="/AstroNova/account/register">
            <LoginRegister mode={"register"} setLogin={setLogin}/>
          </Route>
          <Route exact path="/AstroNova/account">
            <MyProfile />
          </Route>
          <Route exact path="/AstroNova/account/edit">
            <EditProfile setAvatar={ setAvatar }/>
          </Route>
          <Route exact path="/AstroNova/schedule">
            <Schedule/>
          </Route>
          <Route exact path="/AstroNova/teams">
            <Teams/>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;