import React from 'react';
import "../main.css";
import movies from './MovieListFakeData.js';
import MovieList from './MovieList.js';
import Search from './search.js'
import AddMovie from './AddMovie.js'

class App extends React.Component {
  constructor (props) {
    //let arrayOfMovies = [];
    super(props);
    this.state = {
     data: [],
     movies: [],
     searchResultMovies: []
    //  clickedSerch: false
    };
  };
  componentDidMount() {
    this.setState({
      data: movies
    })
  }

  searchVideos(text) {
    let result = [];
    for (let i = 0; i < this.state.movies.length; i++) {
      // iterate over the movies 
      let currentTitle = this.state.movies[i].title;
      // set current title to current movie's title
      if (currentTitle.indexOf(text) >= 0) {
        // check if the searched title is in our movies
        result.push({title: this.state.movies[i].title})
        // if so push it to the result array in the format required
      }
    }
    if (result.length === 0) {
      result = [{title: "Sorry! No results found :("}]
    }

    this.setState({
      searchResultMovies: result
      // movies: result
    })
  }

  addMovieToList(text) {
    let movie = {title: text};
    // console.log(this.state.movies);
    this.state.searchResultMovies.push(movie);
    this.state.movies.push(movie)
    // console.log(this.state.movies);
    this.setState({
      searchResultMovies: this.state.searchResultMovies,
      movies: this.state.movies
    })
  }
  render() {
    return(
      <div>
        <div className="addMovieBar">
          <AddMovie addMovieToList={this.addMovieToList.bind(this)}/>
        </div>
        <div className ="searchBar">
          <Search searchVideos={this.searchVideos.bind(this)} />
        </div>
        <div className='movieContainer'>
           <MovieList movies={this.state.searchResultMovies}/>
        </div>
      </div>
      
  )}
};

export default App;
 