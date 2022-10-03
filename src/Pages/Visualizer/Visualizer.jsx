import { Navbar, Aladin } from '../../Components/exportComponents';
import './Visualizer.scss';
import f1 from '../../Assets/images/f1.png';
import f2 from '../../Assets/images/f2.png';
import f3 from '../../Assets/images/f3.png';
import f4 from '../../Assets/images/f4.png';
import f5 from '../../Assets/images/f5.png';
import f6 from '../../Assets/images/f6.png';
import f7 from '../../Assets/images/f7.png';

export default function Visualizer() {
  return (
    <div className="visualizer">
      <Navbar />
      <div className="aladin">
        <ul className="legenda">
          Visualizer Functions:
          <li>Search Object</li>
          <ul>
            <li className="sub-item">
              <img src={f1} alt="" />
              Search objects by it's name or celestial coordinates
            </li>
          </ul>
          <li>Point to Object</li>
          <ul>
            <li className="sub-item">
              <img src={f2} alt="" />
              Point to any kind of object on the visualizer and click on it to
              obtain more details about
            </li>
          </ul>
          <li>Zoom in/out</li>
          <ul>
            <li className="sub-item">
              <img src={f3} alt="" />
              Zoom in/out the visualizer with the mouse scroll and the buttons
              +/-
            </li>
          </ul>
          <li>Create share link</li>
          <ul>
            <li className="sub-item">
              <img src={f4} alt="" />
              It's possible to share your current view with this button
            </li>
          </ul>
          <li>Enter on Fullscreen mode</li>
          <ul>
            <li className="sub-item">
              <img src={f5} alt="" />
              Click on this button to change the visualizer to fullscreen mode
            </li>
          </ul>
          <li>Change coordinates scale</li>
          <ul>
            <li className="sub-item">
              <img src={f6} alt="" id="teste" />
              Click here to change the coordinates scale: you can choose J2000,
              J2000d and GAL(Galactic)
            </li>
          </ul>
        </ul>
        <Aladin />
        <ul className="legenda">
          Caption:
          <li>Main ID:</li>
          <ul>
            <li className="sub-item">The primary object identification</li>
          </ul>
          <li>Object Type:</li>
          <ul>
            <li className="sub-item">The Object main classification</li>
          </ul>
          <li>Spectral Type:</li>
          <ul>
            <li className="sub-item">
              Star Classification based on the relative strengths of their
              absorption lines
            </li>
          </ul>
          <li>Right Ascension:</li>
          <ul>
            <li className="sub-item">
              Celestial sphere's equivalent of longitude
            </li>
          </ul>
          <li>Declination:</li>
          <ul>
            <li className="sub-item">
              Celestial sphere's equivalent of latitude
            </li>
          </ul>
          <li>Is it a variable star?</li>
          <ul>
            <li className="sub-item">
              <img src={f7} alt="" />
              Some examples of variable stars the team predicted using NASA's
              data and Machine Learning
            </li>
          </ul>
        </ul>
      </div>
    </div>
  );
}
