import React from 'react';
import ReactSwipe from 'react-swipe';



export default class Carousel extends React.Component {

  next() {
    this.refs.ReactSwipe.swipe.next();
  }

  prev() {
    this.refs.ReactSwipe.swipe.prev();
  }

  render() {
    return (
      <div className='sui-Carousel'>
        <ReactSwipe continuous={true} ref='ReactSwipe' id='mySwipe'>
            <div><img height='500px' alt='Sello de montaña y ola japonesa carvados a mano #stamping #crafts' src='https://igcdn-photos-d-a.akamaihd.net/hphotos-ak-xfa1/t51.2885-15/11326163_148497685488515_9386340_n.jpg' /></div>
            <div><img height='500px' alt='acuareleando' src='https://igcdn-photos-g-a.akamaihd.net/hphotos-ak-xaf1/t51.2885-15/11809729_711469768984806_1727706550_n.jpg' /></div>
            <div><img height='500px' alt='curry rojo tailandes' src='https://igcdn-photos-g-a.akamaihd.net/hphotos-ak-xaf1/t51.2885-15/11355147_915182411888366_323491906_n.jpg' /></div>
        </ReactSwipe>
        <button onClick={this.prev.bind(this)}>Prev</button>
        <button onClick={this.next.bind(this)}>Next</button>
      </div>
    );
  }
}
