import React from 'react';
import PropTypes from 'prop-types';

class Progress extends React.Component {
  render() {
    return (
      <div>
        <progress className={this.props.className} value={this.props.value} max={this.props.max} >{this.props.children}</progress>
      </div>
    )
  }
}

Progress.propTypes = {
  className: PropTypes.string,
  value: PropTypes.number,
  max: PropTypes.string,
  children: PropTypes.node,
}

export default Progress;
