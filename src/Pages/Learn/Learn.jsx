import './Learn.scss';
import { Navbar } from '../../Components/exportComponents';
import finish from '../../Assets/images/finish.png';
import start from '../../Assets/images/start.png';
import star from '../../Assets/images/star.png';

export default function Learn() {
  document.body.style.overflowY = 'visible';
  return (
    <div className="learn">
      <Navbar />
      <div className="shadow-image">
        <div className="main2">
          <div className="main-text">
            <div>
              <span>LEARNING</span>
              <span>ABOUT</span>
            </div>
            <div>
              <span className="last-word" id="variable">
                VARIABLE
              </span>
              <span className="last-word">STARS</span>
            </div>
          </div>
          <div className="subtitle">
            <p className="title2">
              our goal is to give you an interactive way to learn about variable
              stars and how they generate amazing events in our universe.
            </p>
          </div>
        </div>
        <img src={star} alt="" />
      </div>
      <div className="image-video">
        <div className="video2">
          <img src={start} alt="" />
          <div className="video-text">
            <h2>START YOUR JOURNEY!</h2>
            <p>
              Follow our video sequence to learn about the universe of variable
              stars and how each one has its own unique style.
            </p>
          </div>
        </div>
      </div>
      <div className="video">
        <iframe
          width="636"
          height="358"
          src="https://www.youtube.com/embed/4O746lUintc"
          title="Cyberpunk: Edgerunners Soundtrack -  I Really Want to Stay at Your House"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>

        <div className="video-text">
          <h2>EMBARKING INTO THE UNIVERSE OF VARIABLE STARS</h2>
          <p>
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
        </div>
      </div>
      <div className="video">
        <div className="video-text">
          <h2>
            PULSALTING STARS AND THE NEIGHBOR GALAXY METER (CEPHEID VARIABLES)
          </h2>
          <p>
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
        </div>
        <iframe
          width="636"
          height="358"
          src="https://www.youtube.com/embed/4O746lUintc"
          title="Cyberpunk: Edgerunners Soundtrack -  I Really Want to Stay at Your House"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </div>
      <div className="video">
        <iframe
          width="636"
          height="358"
          src="https://www.youtube.com/embed/4O746lUintc"
          title="Cyberpunk: Edgerunners Soundtrack -  I Really Want to Stay at Your House"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>

        <div className="video-text">
          <h2>CATACLYSMIC VARIABLES (NOVAE E SUPERNOVAE)</h2>
          <p>
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
        </div>
      </div>
      <div className="video">
        <div className="video-text">
          <h2>ECLIPSING BINARIES</h2>
          <p>
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
        </div>
        <iframe
          width="636"
          height="358"
          src="https://www.youtube.com/embed/4O746lUintc"
          title="Cyberpunk: Edgerunners Soundtrack -  I Really Want to Stay at Your House"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </div>
      <div className="video">
        <iframe
          width="636"
          height="358"
          src="https://www.youtube.com/embed/4O746lUintc"
          title="Cyberpunk: Edgerunners Soundtrack -  I Really Want to Stay at Your House"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>

        <div className="video-text">
          <h2>ROTATING VARIABLES</h2>
          <p>
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
        </div>
      </div>
      <div className="video">
        <div className="video-text">
          <h2>RARE EVENTS</h2>
          <p>
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
        </div>
        <iframe
          width="636"
          height="358"
          src="https://www.youtube.com/embed/4O746lUintc"
          title="Cyberpunk: Edgerunners Soundtrack -  I Really Want to Stay at Your House"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </div>
      <div className="image-video">
        <div className="video2">
          <img src={finish} alt="" />
          <div className="video-text">
            <h2>RARE EVENTS</h2>
            <p>
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
          </div>
        </div>
        <iframe
          width="1000"
          height="561"
          src="https://www.youtube.com/embed/4O746lUintc"
          title="Cyberpunk: Edgerunners Soundtrack -  I Really Want to Stay at Your House"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
          className="final-video"
        ></iframe>
      </div>
    </div>
  );
}
