L.mapquest.key = '4jh0vzYClnvAPyXRetPhuCdlrYtdesUk';

// 'map' refers to a <div> element with the ID map
L.mapquest.map('map', {
  center: [40, -98],
  layers: L.mapquest.tileLayer('map'),
  zoom: 4,
});