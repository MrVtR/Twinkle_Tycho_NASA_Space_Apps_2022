import { Navbar, Aladin } from '../../Components/exportComponents';
import './Visualizer.scss';
import f1 from '../../Assets/images/f1.png';
import f2 from '../../Assets/images/f2.png';
import f3 from '../../Assets/images/f3.png';
import f4 from '../../Assets/images/f4.png';
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
              You can Search objects by it's name or celestial coordinates
            </li>
          </ul>
          <li>Point to Object</li>
          <ul>
            <li className="sub-item">
              <img src={f2} alt="" />
              You can point to any kind of object on the visualizer to obtain
              more details about it
            </li>
          </ul>
          <li>Zoom in/out</li>
          <ul>
            <li className="sub-item">
              <img src={f3} alt="" />
              You can zoom in/out the visualizer with the mouse scroll and the
              buttons +/-
            </li>
          </ul>
          <li>Create share link</li>
          <ul>
            <li className="sub-item">
              <img src={f4} alt="" />
              It's possible to share your current view with this button
            </li>
          </ul>
        </ul>
        <Aladin />
        <ul className="legenda">
          Caption:
          <li>Main ID:</li>
          <ul>
            <li className="sub-item">Object Identification</li>
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
        </ul>
      </div>
    </div>
  );
}
