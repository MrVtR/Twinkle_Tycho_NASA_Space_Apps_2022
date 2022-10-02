import './Learn.scss';
import { Navbar } from '../../Components/exportComponents';
import finish from '../../Assets/images/finish.png';
import start from '../../Assets/images/start.png';
import star from '../../Assets/images/star.png';

export default function Learn() {
  document.body.style.overflowY = 'visible';
  document.body.style.overflowX = 'hidden';
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
              Are you ready to dive into the universe of variable stars? We look
              forward to teaching you!
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
            A brief introduction to variable stars and everything you need to
            know to board on this journey.
          </p>
        </div>
      </div>
      <div className="video">
        <div className="video-text">
          <h2>
            PULSALTING STARS AND THE NEIGHBOR GALAXY METER (CEPHEID VARIABLES)
          </h2>
          <p>
            Intrinsic variable stars of Pulsating-class, their types and how
            they can be used to know more about our own galaxy better.
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
            Intrinsic variable stars of Cataclysmic-class, their types and how
            explosions can help us understand the speed at which the universe
            expands.
          </p>
        </div>
      </div>
      <div className="video">
        <div className="video-text">
          <h2>EXTRINSIC VARIABLE STARS - ECLIPSING AND ROTATIONAL VARIABLES</h2>
          <p>
            Extrinsic variable stars: Eclipsing-class and how they, such as our
            sun and moon, can also eclipse and Rotational-class and how large
            stains can also cause starlight to vary.
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
          <h2>PECULIAR VARIABLES</h2>
          <p>
            Knowing some peculiar events that affect a star's light. Dark and
            bright: sudden dims and intense frares.
          </p>
        </div>
      </div>
      <div className="image-video">
        <div className="video2">
          <img src={finish} alt="" />
          <div className="video-text">
            <h2>CONGRATULATIONS!! YOU HAVE COMPLETED THE JOURNEY.</h2>
            <p>
              In the quiz below, Test your knowledge by trying to get the type
              of each variable star right from real gifs.
            </p>
          </div>
        </div>
        <div>
          <iframe
            width="1000"
            height="561"
            title="Quiz Nasa Space Apps 2022"
            src="https://twinkle-tycho-game-nasa-space-apps.netlify.app"
            className="final-video"
          ></iframe>
        </div>
      </div>
    </div>
  );
}
