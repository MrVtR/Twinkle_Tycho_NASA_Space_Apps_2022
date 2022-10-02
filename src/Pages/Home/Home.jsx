import './Home.scss';
import { Navbar } from '../../Components/exportComponents';
import back1 from '../../Assets/images/back1.png';
import back2 from '../../Assets/images/back2.png';
import back3 from '../../Assets/images/back3.png';
import { Link } from 'react-router-dom';

export default function Home() {
  document.body.style.overflowY = 'visible';
  document.body.style.overflowX = 'hidden';

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
                A curriculum to help people learn more about the stars in the
                night sky and its variations. Based on NASA and Partners data
                and thought to be dynamic and easily understandable, these short
                video lessons will teach you everything you need to know about
                stellar variability. In the end you can prove your knowledge in
                an interactive Quiz. Any further questions? Sam, the AI ChatBot
                will help you.
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
                Based on Light Curve data from Kepler Telescope and Digital
                Modeling, you can create your own variable star. Choose the
                variable class you like the most as well as magnitude variation
                and period and see how your star would look like!
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
