"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var etro_1 = require("etro");
var canvas = document.createElement('canvas');
document.body.appendChild(canvas);
var movie = new etro_1.default.Movie({
    canvas: canvas,
});
var layer = new etro_1.default.layer.Visual({
    startTime: 0,
    duration: 5,
    background: etro_1.default.parseColor('blue'),
});
movie.layers.push(layer);
