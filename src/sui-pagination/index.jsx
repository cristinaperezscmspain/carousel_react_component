import React from 'react';
//import ReactSwipe from 'react-swipe';

export default class Pagination extends React.Component {

  next() {
    this.refs.ReactSwipe.swipe.next();
  }

  prev() {
    this.refs.ReactSwipe.swipe.prev();
  }

  slideTo() {
    this.refs.ReactSwipe.swipe.slide();
  }

  render() {
    var paginationNodes = this.props.data.map(function (paginationNode, index) {
      return (
        <button className='sui-Pagination__page'>{index}</button>
      );
    });
    return (
      <div className='sui-Pagination'>
        {paginationNodes}
         <button onClick={this.prev.bind(this)}>Prev</button>
        <button onClick={this.next.bind(this)}>Next</button>
      </div>
    );
  }
}

Pagination.propTypes = {
  data: React.PropTypes.array.isRequired
};
