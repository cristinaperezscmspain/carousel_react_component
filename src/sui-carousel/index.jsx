import React from 'react';
import ReactSwipe from 'react-swipe';
import Slide from '../sui-slide';

export default class Carousel extends React.Component {

  next() {
    this.refs.ReactSwipe.swipe.next();
  }

  prev() {
    this.refs.ReactSwipe.swipe.prev();
  }

  render() {
    var slideNodes = this.props.data.map(function (slideNode) {
      return (
        <div className='sui-Carousel__slide'><Slide key={slideNode.id} imagePath={slideNode.imagePath} imageAlt={slideNode.imageAlt} imageHeight={slideNode.imageHeight} /></div>
      );
    });
    return (
      <div className='sui-Carousel'>
        <ReactSwipe continuous={true} ref='ReactSwipe' id='mySwipe'>
          {slideNodes}
        </ReactSwipe>
        <button onClick={this.prev.bind(this)}>Prev</button>
        <button onClick={this.next.bind(this)}>Next</button>
      </div>
    );
  }
}

Carousel.propTypes = {
  data: React.PropTypes.array.isRequired
};
