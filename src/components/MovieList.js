import movies from './MovieListFakeData.js';
import MovieListEntry from './MovieListEntry.js';
import React from 'react';
var MovieList = (props) => {
  console.log(props);

  return (
    <div>
        {props.movies.map(video => 
          <MovieListEntry movie={video} />
        )}
    </div>
  );
};



export default MovieList