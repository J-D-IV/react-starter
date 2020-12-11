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
     data: movies,
     movies: movies
    };
  };
  
  componentDidMount() {
    // renderToWatchMovies();
    //console.log('before setState -- ', this.state);
  }

  toggleMovie(movie) {
    movie.watched = !movie.watched;
  }

  searchVideos(text) {
    event.preventDefault();
    let result = [];
    for (let i = 0; i < this.state.data.length; i++) {
      let currentTitle = this.state.data[i].title;
      if (currentTitle.indexOf(text) >= 0) {
        result.push({title: this.state.data[i].title})
      }
    }
    if (result.length === 0) {
      result = [{title: "Sorry! No results found :("}]
    }
    this.setState({
      searchResultMovies: result
    })
  }

  renderWatchedMovies() {
    let result = [];
    console.log(this.state.data);
    for (let i = 0; i < this.state.data.length; i++) {
      if (this.state.data[i].watched) {
        result.push(this.state.data[i])
      }
    }
    this.setState({
      movies: result
    })
  }

  renderToWatchMovies() {
    let result = [];
    console.log(this.state.data);
    for (let i = 0; i < this.state.data.length; i++) {
      if (!this.state.data[i].watched) {
        result.push(this.state.data[i])
      }
    }
    this.setState({
      movies: result
    })
  }
 
  addMovieToList(text) {
    event.preventDefault();
    let movie = {title: text, watched:false};
    this.state.data.push(movie);
    this.setState({
      data: this.state.data,
      movies: this.state.movies
    })
  }

  render() {
    return(
      <div>
        <div className="watchAndToWatchButtons">
          <button className="watchedListButton" onClick={() => {
            this.renderWatchedMovies();
          }
          }>WATCHED</button>
          <button className="toWatchListButton" onClick={() => {
            this.renderToWatchMovies();
          }}>TO WATCH</button>
        </div>
        <div className="addMovieBar">
          <AddMovie addMovieToList={this.addMovieToList.bind(this)}/>
        </div>
        <div className ="searchBar">
          <Search searchVideos={this.searchVideos.bind(this)} />
        </div>
        <div className='movieContainer'>
           <MovieList movies={this.state.movies} toggleMovie={this.toggleMovie.bind(this)}/>
        </div>
      </div>
      
  )}
};

export default App;
 