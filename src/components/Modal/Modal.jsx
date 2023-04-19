import React, { Component } from 'react';

export class Modal extends Component {
  componentDidMount() {
    window.addEventListener('keydown', this.handleKeydown);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeydown);
  }

  handleKeydown = e => {
    if (e.key === 'Escape') {
      this.props.closeModal();
    }
  };

  render() {
    const { src, alt } = this.props.poster;
    return (
      <div>
        <div>
          <button onClick={this.props.closeModal}>Close</button>
          <img src={`https://image.tmdb.org/t/p/w500${src}`} alt={alt} />
        </div>
      </div>
    );
  }
}
