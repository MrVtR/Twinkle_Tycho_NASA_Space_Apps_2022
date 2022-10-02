import './Play.scss';
import { Navbar } from '../../Components/exportComponents';
export default function Play() {
  document.body.style.overflowY = 'hidden';
  return (
    <div className="play">
      <Navbar />
      <div className="game">
        <iframe
          width="1000"
          height="700"
          src="https://www.youtube.com/embed/2UnWZMsTwHA"
          title="Linkin Park Hybrid Theory Full Album HD"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </div>
    </div>
  );
}
