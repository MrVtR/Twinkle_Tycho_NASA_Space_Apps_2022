import { Link } from 'react-router-dom';
import './Navbar.scss';
import logo from '../../Assets/images/logo.png';
import user from '../../Assets/images/user.png';
function Nav() {
  return (
    <nav className="navbar">
      <div className="nav1">
        <img src={logo} alt="" />
        <div className="team-name">
          <li>TWINKLE</li>
          <li className="last-name">TYCHO</li>
        </div>
      </div>
      <div className="nav2">
        <li className="element2">
          <Link to="/" className="hyperlink">
            HOME
          </Link>
        </li>
        <li className="element2">
          <Link to="/visualizer" className="hyperlink">
            VISUALIZER
          </Link>
        </li>
        <li className="element2">
          <Link to="/learn" className="hyperlink">
            LEARN
          </Link>
        </li>
        <li className="element2">
          <Link to="/play" className="hyperlink">
            PLAY
          </Link>
        </li>
        <li className="element2">
          <Link to="/resources" className="hyperlink">
            RESOURCES
          </Link>
        </li>
        <div className="logo-nav2">
          <img src={user} alt="" />
        </div>
      </div>
    </nav>
  );
}
export default Nav;
