import React from 'react';

var MovieListEntry = (props) => {
  //console.log('MovieListEntry (props.movie.title) - ', props.movie.title);
  return (
    <div className="entry">
      {props.movie.title}
    </div>
  )
}

export default MovieListEntry