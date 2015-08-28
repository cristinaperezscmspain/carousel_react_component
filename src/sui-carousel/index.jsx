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
    var slideNodes = this.props.data.map(function (slideNode, index) {
      return (
        <div className='sui-Carousel__slide' id={index}><Slide key={slideNode.id} imagePath={slideNode.imagePath} imageAlt={slideNode.imageAlt} imageHeight={slideNode.imageHeight} /></div>
      );
    });

    var paginationNodes = this.props.data.map(function (paginationNode, index) {
      return (
        <span className='sui-Carousel__Pagination__page'>{index}</span>
      );
    });

    return (
      <div className='sui-Carousel'>
        <ReactSwipe continuous={true} ref='ReactSwipe' id='mySwipe'>
          {slideNodes}
        </ReactSwipe>
        <div className='sui-Carousel__Pagination'>
          <button onClick={this.prev.bind(this)}>Prev</button>
          {paginationNodes}
          <button onClick={this.next.bind(this)}>Next</button>
        </div>
      </div>
    );
  }
}

Carousel.propTypes = {
  data: React.PropTypes.array.isRequired
};
