import './Resources.scss';
import { Navbar } from '../../Components/exportComponents';
import res1 from '../../Assets/images/res1.png';
import res2 from '../../Assets/images/res2.png';
import res3 from '../../Assets/images/res3.png';
import res4 from '../../Assets/images/res4.png';
import res5 from '../../Assets/images/res5.png';
import res6 from '../../Assets/images/res6.png';
import res7 from '../../Assets/images/res7.png';
import res8 from '../../Assets/images/res8.png';
import res9 from '../../Assets/images/res9.png';
import python from '../../Assets/images/python.png';
import line from '../../Assets/images/line.png';
import scikit from '../../Assets/images/scikit.png';
import pandas from '../../Assets/images/pandas.png';
import matplot from '../../Assets/images/matplot.png';
import app1 from '../../Assets/images/app1.png';
import app2 from '../../Assets/images/app2.png';
import app3 from '../../Assets/images/app3.png';
import app4 from '../../Assets/images/app4.png';
import app5 from '../../Assets/images/app5.png';
import app6 from '../../Assets/images/app6.png';
import app7 from '../../Assets/images/app7.png';
import tycho from '../../Assets/images/tycho.png';
import logo from '../../Assets/images/logo1.png';
import linhas from '../../Assets/images/linhas.png';
import m1 from '../../Assets/images/m1.png';
import m2 from '../../Assets/images/m2.png';
import m3 from '../../Assets/images/m3.png';
import m4 from '../../Assets/images/m4.png';
import m5 from '../../Assets/images/m5.png';
import m6 from '../../Assets/images/m6.png';

export default function Resources() {
  document.body.style.overflowY = 'visible';
  document.body.style.overflowX = 'hidden';
  return (
    <div className="resources">
      <Navbar />
      <div className="main3">
        <div className="main-text">
          <span>RESOURCES</span>
        </div>
        <div className="subtitle">
          <p className="title2">
            Research sources that helped us in the production of our project.
          </p>
        </div>
      </div>

      <div className="container">
        <div className="item">
          <img src={res1} alt="" />
          <p>VARIABLE STAR CATALOG</p>
        </div>
        <div className="item">
          <img src={res2} alt="" />
          <p>LIGHT CURVES</p>
        </div>
        <div className="item">
          <img src={res3} alt="" />
          <p>CATACLYSMIC VARIABLES (SUPERNOVA)</p>
        </div>
      </div>

      <div className="container">
        <div className="item">
          <img src={res4} alt="" />
          <p>CEPHEIDS</p>
        </div>
        <div className="item">
          <img src={res5} alt="" />
          <p>CEPHEID VARIABLE STARS & DISTANCE DETERMINATION</p>
        </div>
        <div className="item">
          <img src={res6} alt="" />
          <p>SUPERNOVA</p>
        </div>
      </div>

      <div className="container">
        <div className="item">
          <img src={res7} alt="" />
          <p>TYPES OF SUPERNOVA</p>
        </div>
        <div className="item">
          <img src={res8} alt="" />
          <p>SUPERWASP OBSERVATIONS OF VARIABLE STARS</p>
        </div>
        <div className="item">
          <img src={res9} alt="" />
          <p>ASAS-SN VARIABLE STARS ATLAS</p>
        </div>
      </div>
      <div className="main3 mt4">
        <div className="main-text">
          <span>SOFTWARES</span>
        </div>
        <div className="subtitle">
          <p className="title2">
            Software that we used in the implementation of the project
          </p>
        </div>
      </div>

      <div className="py-libs">
        <div className="title-sub2" id="python">
          <img src={python} alt="" />
          <p className="title">DATA ANALYSIS</p>
          <p className="subtitle">PYTHON</p>
        </div>
        <img src={line} alt="" id="line" />
        <div className="libs">
          <div className="lib">
            <img src={pandas} alt="" />
            <div className="title-sub">
              <p className="title">DATA ANALYSIS AND MANIPULATON</p>
              <p className="subtitle">PANDAS</p>
            </div>
          </div>
          <div className="lib" id="scikit">
            <img src={scikit} alt="" />
            <div className="title-sub">
              <p className="title">MACHINE LEARNING</p>
              <p className="subtitle">SCIKIT-LEARN</p>
            </div>
          </div>
          <div className="lib">
            <img src={matplot} alt="" />
            <div className="title-sub">
              <p className="title">GRAPHICS GENERATOR</p>
              <p className="subtitle">MATPLOTLIB</p>
            </div>
          </div>
          <div className="title-sub" id="lightcurve">
            <p className="title">LIGHT CURVE ANALUZER</p>
            <p className="subtitle">LIGHTKURVE</p>
          </div>
        </div>
      </div>

      <div className="elements1">
        <div className="lib">
          <img src={app1} alt="" />
          <div className="title-sub">
            <p className="title">UI/UX DESIGN</p>
            <p className="subtitle">FIGMA</p>
          </div>
        </div>
        <div className="lib">
          <img src={app7} alt="" />
          <img src={app2} alt="" />
          <img src={app3} alt="" />
          <div className="title-sub">
            <p className="title">FRONT-END DESIGN</p>
            <p className="subtitle">HTML5, REACT AND SASS</p>
          </div>
        </div>
      </div>

      <div className="elements2">
        <div className="lib">
          <img src={app5} alt="" />
          <div className="title-sub">
            <p className="title">3D MODELLING</p>
            <p className="subtitle">BLENDER</p>
          </div>
        </div>
        <div className="lib">
          <img src={app4} alt="" />
          <div className="title-sub">
            <p className="title">GAME DEVELOPMENT</p>
            <p className="subtitle">GDEVELOP</p>
          </div>
        </div>
        <div className="lib">
          <img src={app6} alt="" />
          <div className="title-sub">
            <p className="title">VIDEO EDITING</p>
            <p className="subtitle">CANVAS</p>
          </div>
        </div>
      </div>
      <div className="about-us">
        <img src={tycho} alt="" />
        <div className="title-sub">
          <p className="title">ABOUT US</p>
          <p className="subtitle">
            We are a multidisciplinary group of young people from different
            areas, graduations, and states that came together with a common
            goal: to create projects that foster scientific dissemination while
            having fun!{' '}
          </p>
          <p className="subtitle">
            We met in 2021 while assembling a team for the space apps challenge.
            Our project aimed to mitigate global warming, generate an intuitive
            heat-related hazard prediction map, and generate heat stress
            notifications for people. We work so well together that we decided
            to participate with the same team every year!{' '}
          </p>
          <p className="subtitle">
            For the space apps challenge 2022, Our team's name "Twinkle Tycho"
            was created in honor of the Danish astronomer Tycho Brahe, who
            discovered the variation in luminosity between certain types of
            stars after the appearance of the supernova SN 1572.
          </p>
        </div>
      </div>
      <div className="team">
        <div className="tycho">
          <img src={logo} alt="" />
          <span className="ty">TWINKLE</span>
          <span className="ty" id="ty-bold">
            TYCHO
          </span>
        </div>
        <img src={linhas} alt="" id="linhas" />
        <div className="membro">
          <img src={m1} alt="" />
          <p>VITÓRIA VENTURA</p>
        </div>
        <div className="membro">
          <img src={m2} alt="" />
          <p>JOÃO PEDRO COSSO</p>
        </div>
        <div className="membro">
          <img src={m3} alt="" />
          <p>ANA CLARA ARANTES</p>
        </div>
        <div className="membro">
          <img src={m4} alt="" />
          <p>VÍTOR RIBEIRO GUIMARÃES</p>
        </div>
        <div className="membro">
          <img src={m5} alt="" />
          <p>GABRIEL PELIZARI</p>
        </div>
        <div className="membro">
          <img src={m6} alt="" />
          <p>THASSIA PINE GONDEK</p>
        </div>
      </div>
    </div>
  );
}
