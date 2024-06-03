import etro from 'etro';

const canvas = document.createElement('canvas');
document.body.appendChild(canvas);

const movie = new etro.Movie({
    canvas,
  })

const layer = new etro.layer.Visual({
    startTime: 0,
    duration: 5,
    background: etro.parseColor('blue'),
  });

movie.layers.push(layer);

  
  