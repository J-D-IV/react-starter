import movies from './MovieListFakeData.js';
import MovieListEntry from './MovieListEntry.js';
import React from 'react';
var MovieList = (props) => {
  //console.log('movie list -' ,props);

  return (
    <div>
        {props.movies.map(video => 
          <MovieListEntry movie={video} toggleMovie={props.toggleMovie} />
        )}
    </div>
  );
};



export default MovieList