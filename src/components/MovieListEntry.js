import React from 'react';
import DropDown from './DropDowns.js';
class MovieListEntry extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isDroppedDown: false
    }
  }

  dropDown() {
    this.setState({
      isDroppedDown: !this.state.isDroppedDown
    })
  }

  //console.log('MovieListEntry (props.movie.title) - ', props.movie.title);
  render() {
    return (
      <div className="entry">
        {this.props.movie.title}
        <DropDown isDroppedDown={this.state.isDroppedDown} dropDown={this.dropDown.bind(this)} info={this.props}/>
      </div>
    )
  }
}

export default MovieListEntry