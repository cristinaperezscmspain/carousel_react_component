import React from 'react';


//Single Slide
export default class Slide extends React.Component {

  render() {
    return (
      <img height={this.props.imageHeight} alt={this.props.imageAlt} src={this.props.imagePath} />
    );
  }

}

Slide.propTypes = {
  imageHeight: React.PropTypes.string.isRequired,
  imageAlt: React.PropTypes.string.isRequired,
  imagePath: React.PropTypes.string.isRequired
};
