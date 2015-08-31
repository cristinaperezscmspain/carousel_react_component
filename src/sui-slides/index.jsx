import React from 'react';
import ReactSwipe from 'react-swipe';
import Slide from '../sui-slide';
import Pagination from '../sui-pagination';

export default class Slides extends React.Component {

  componentWillReceiveProps(props) {
    let current = props.current;
    this.refs.ReactSwipe.swipe.slide(current);
  }

  render() {
    var slideNodes = this.props.data.map(function (slideNode, index) {
      return (
        <div className='sui-Carousel__slide' id={index}><Slide key={slideNode.id} imagePath={slideNode.imagePath} imageAlt={slideNode.imageAlt} imageHeight={slideNode.imageHeight} /></div>
      );
    });

    return (
      <div className='sui-Carousel'>
        <ReactSwipe continuous={true} ref='ReactSwipe' id='mySwipe'>
          {slideNodes}
        </ReactSwipe>
        <Pagination
          data={this.props.data}
          onSlideTo={this.props.onSlideTo}
          onNext={this.props.onNext}
          onPrev={this.props.onPrev}
        />
      </div>
    );
  }
}

Slides.propTypes = {
  data: React.PropTypes.array.isRequired,
  onPrev: React.PropTypes.function,
  onNext: React.PropTypes.function,
  onSlideTo: React.PropTypes.function
};
