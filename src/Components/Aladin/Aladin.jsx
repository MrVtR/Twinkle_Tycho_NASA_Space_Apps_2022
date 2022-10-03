import React, { useEffect } from 'react';
import $ from 'jquery';
const Aladin = () => {
  useEffect(() => {
    let aladin = window.A.aladin('#aladin-lite-div', {
      survey: 'P/DSS2/color',
      target: '303.2763190 +40.2049045',
      showSimbadPointerControl: true,
      showShareControl: true,
      showLayersControl: false,
    });

    var cat = window.A.catalog({ name: 'Some markers', sourceSize: 28 });
    aladin.addCatalog(cat);
    cat.addSources([
      window.A.marker(294.1752292, +42.1185194, {
        popupTitle: 'KIC 6922244',
        popupDesc:
          '<em>Main ID:</em>Kepler-8<br/><em>Object Type:</em> Rotating Variable<br/><em>Spectral Type:</em> F6V<br/><em>Right Ascension:</em> 18 45 09.1489991376<br/><em>Declination:</em> +42 27 03.891327156<br/><br/>You can check for more info <a target="_blank" href="http://simbad.u-strasbg.fr/simbad/sim-id?Ident=KIC%209107656">in Simbad</a>',
      }),
    ]);
    cat.addSources([
      window.A.marker(297.6950402, +45.4700724, {
        popupTitle: 'KIC 9107656',
        popupDesc:
          '<em>Main ID:</em>2MASS J19504680+4528121<br/><em>Object Type:</em> Rotating Variable<br/><em>Right Ascension:</em> 19 50 46.8096471960<br/><em>Declination:</em> +45 28 12.260607096<br/><br/>You can check for more info <a target="_blank" href="http://simbad.u-strasbg.fr/simbad/sim-id?Ident=KIC%209107656">in Simbad</a>',
      }),
    ]);
    cat.addSources([
      window.A.marker(286.1507476, +37.379088, {
        popupTitle: 'KIC 1849238',
        popupDesc:
          '<em>Main ID:</em>2MASS J19043618+372244<br/><em>Object Type:</em> Rotating Variable<br/><em>Right Ascension:</em> 19 04 36.1794288576<br/><em>Declination:</em> +37 22 44.716910556<br/><br/>You can check for more info <a target="_blank" href="http://simbad.u-strasbg.fr/simbad/sim-id?Ident=KIC%201849238">in Simbad</a>',
      }),
    ]);
  }, []);

  return (
    <div
      id="aladin-lite-div"
      style={{
        width: '78vw',
        height: '78vh',
      }}
    />
  );
};

export default Aladin;
