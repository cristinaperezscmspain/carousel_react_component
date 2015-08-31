import React from 'react';


export default class Pagination extends React.Component {

  goPrev() {
    this.props.onPrev();
  }

  goNext() {
    this.props.onNext();
  }

  slideTo(index) {
    this.props.onSlideTo(index);
  }

  render() {
    var paginationNodes = this.props.data.map((paginationNode, index) => {
      return (
        <button className='sui-Pagination__page' onClick={this.slideTo.bind(this, index)}>{index + 1}</button>
      );
    });
    return (
      <div className='sui-Pagination'>
        <button onClick={this.goPrev.bind(this)}>prev</button>
        {paginationNodes}
        <button onClick={this.goNext.bind(this)}>Next</button>
      </div>
    );
  }
}

Pagination.propTypes = {
  data: React.PropTypes.array.isRequired,
  onPrev: React.PropTypes.function,
  onNext: React.PropTypes.function,
  onSlideTo: React.PropTypes.function
};
