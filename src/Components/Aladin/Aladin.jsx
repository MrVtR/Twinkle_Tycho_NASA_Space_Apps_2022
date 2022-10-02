import React, { useEffect } from 'react';
import $ from 'jquery';
const Aladin = () => {
  useEffect(() => {
    let aladin = window.A.aladin('#aladin-lite-div', {
      survey: 'P/DSS2/color',
      fov: 1,
      target: 'M81',
      showSimbadPointerControl: true,
      showShareControl: true,
    });
    aladin.setFov(1);
    // define function triggered when  a source is hovered
    aladin.on('objectHovered', function (object) {
      var msg;
      if (object) {
        msg =
          'You hovered object ' +
          object.data.name +
          ' located at ' +
          object.ra +
          ', ' +
          object.dec;
      } else {
        msg = 'No object hovered';
      }
      $('#infoDiv').html(msg);
    });

    // define function triggered when an object is clicked
    var objClicked;
    aladin.on('objectClicked', function (object) {
      var msg;
      if (object) {
        objClicked = object;
        object.select();
        msg =
          'You clicked object ' +
          object.data.name +
          ' located at ' +
          object.ra +
          ', ' +
          object.dec;
      } else {
        objClicked.deselect();
        msg = 'You clicked in void';
      }
      $('#infoDiv').html(msg);
    });
  }, []);

  console.log(window.A.catalogFromSimbad('M 81'));

  return (
    <div
      id="aladin-lite-div"
      style={{ height: '80vh', marginLeft: '20px', marginRight: '20px' }}
    />
  );
};

export default Aladin;
