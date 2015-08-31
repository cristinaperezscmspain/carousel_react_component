import React from 'react';
import Slides from '../sui-slides';

export default class Carousel extends React.Component {
  constructor() {
    super();
    this.state = {
      position: 0
    };
  }

  next() {
    this.setState({
      position: this.state.position + 1
    });
  }

  prev() {
    this.setState({
      position: this.state.position - 1
    });
  }

  slideTo(index) {
    this.setState({ position: index });
  }

  render() {

    return (
      <div className='sui-Carousel'>
        <Slides
          current={this.state.position}
          data={this.props.data}
          onNext={this.next.bind(this)}
          onPrev={this.prev.bind(this)}
          onSlideTo={this.slideTo.bind(this)} />
      </div>
    );
  }
}

Carousel.propTypes = {
  data: React.PropTypes.array.isRequired
};


