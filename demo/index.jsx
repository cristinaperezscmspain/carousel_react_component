import React from 'react';
import {Carousel} from '../src';
import './style.scss';
import '../src/index.scss';

// Dataset
var data = [
  {
    id         : "slide1",
    imagePath  : "https://igcdn-photos-d-a.akamaihd.net/hphotos-ak-xfa1/t51.2885-15/11326163_148497685488515_9386340_n.jpg",
    imageAlt   : "Sello de montaña y ola japonesa carvados a mano #stamping #crafts",
    title      : "Sello de montaña y ola japonesa carvados a mano #stamping #crafts",
    imageHeight : "500px"
  },
  {
    id         : "slide2",
    imagePath  : "https://igcdn-photos-g-a.akamaihd.net/hphotos-ak-xaf1/t51.2885-15/11809729_711469768984806_1727706550_n.jpg",
    imageAlt   : "acuareleando",
    title      : "acuareleando",
    imageHeight : "500px"
  },
  {
    id         : "slide3",
    imagePath  : "https://igcdn-photos-g-a.akamaihd.net/hphotos-ak-xaf1/t51.2885-15/11355147_915182411888366_323491906_n.jpg",
    imageAlt   : "curry rojo tailandes",
    title      : "curry rojo tailandes",
    imageHeight : "500px"
  },
];

React.render(<Carousel data={data} />, document.getElementById('main'));
