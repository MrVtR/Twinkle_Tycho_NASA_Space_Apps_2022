import './Home.scss';
import { Navbar } from '../../Components/exportComponents';
import back1 from '../../Assets/images/back1.png';
import back2 from '../../Assets/images/back2.png';
import back3 from '../../Assets/images/back3.png';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className="Home">
      <Navbar />
      <div className="main">
        <div className="main-text">
          <div>
            <span>THE</span>
            <span>NIGHT</span>
            <span>SKY</span>
          </div>
          <div>
            <span>IS</span>
            <span>ALWAYS</span>
            <span className="last-word">CHANGING</span>
          </div>
        </div>
        <div className="subtitle">
          <h2 className="title1">Welcome to the twinkle tycho project!</h2>
          <p className="title2">
            our goal is to give you an interactive way to learn about variable
            stars and how they generate amazing events in our universe.
          </p>
          <p className="title2">Interested? meet our tools!</p>
        </div>
      </div>
      <div className="images-main">
        <Link to="/learn" className="hyperlink">
          <figure>
            <img src={back1} alt="" />
            <figcaption className="legenda">
              <h2>LEARN</h2>
              <p>
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </p>
            </figcaption>
          </figure>
        </Link>
        <Link to="/visualizer" className="hyperlink">
          <figure>
            <img src={back2} alt="" />
            <figcaption className="legenda2">
              <h2>VISUALIZE</h2>
              <p>
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </p>
            </figcaption>
          </figure>
        </Link>
        <Link to="/play" className="hyperlink">
          <figure>
            <img src={back3} alt="" />
            <figcaption className="legenda">
              <h2>CREATE YOUR OWN STAR</h2>
              <p>
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </p>
            </figcaption>
          </figure>
        </Link>
      </div>
    </div>
  );
}
