import './Play.scss';
import { Navbar } from '../../Components/exportComponents';
export default function Play() {
  document.body.style.overflowY = 'hidden';
  return (
    <div className="play">
      <Navbar />
      <div className="game">
        <iframe
          width="850"
          height="600"
          title="Create your Own Star Nasa Space Apps 2022"
          src="https://twinkle-tycho-nasa-space-apps-star.netlify.app"
          className="final-video"
        ></iframe>
      </div>
    </div>
  );
}
