import React from 'react';
import "../main.css";
import movies from './MovieListFakeData.js';
import MovieList from './MovieList.js';

class App extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
     movies: movies
    };
  };
  render() {
    return(
      <div className='movieContainer'>
        <MovieList movies={this.state.movies}/>
      </div>
  )}
};

export default App;
 