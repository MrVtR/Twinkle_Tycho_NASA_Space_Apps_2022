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
                A curriculum to help people learn about the star's variability
                in the night sky. Based on NASA and Partners data, these short
                video lessons will teach you everything you need to know about
                stellar variability. In the end, you can prove your knowledge in
                our Quiz. Any further questions? Sam, the AI ChatBot will help
                you.
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
                Based on data from NASA and Partner Agencies, our visualizer
                provides an immersion that allows you to interact and analyze
                multiple variable stars. Learn even more about them, seeing how
                they would look in the night sky. You can also check our
                Forecast Model, which recognizes if a star is variable or not.
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
                Based on Light Curve data from Kepler Telescope and Digital
                Modeling, you can create your variable star! Choose the variable
                class you like the most, as well as magnitude variation and
                period to see what your star would look.
              </p>
            </figcaption>
          </figure>
        </Link>
      </div>
    </div>
  );
}
