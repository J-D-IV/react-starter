import React from 'react';
import "../main.css";
import movies from './MovieListFakeData.js';
import MovieList from './MovieList.js';
import Search from './search.js'

class App extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
     movies: movies,
     clickedSerch: false
    };
  };
  searchVideos(text) {
    let result = []
    text = text.toUpperCase();
    console.log(text);
    for (let i = 0; i < this.state.movies.length; i++) {
      let currentTitle = this.state.movies[i].title;
      console.log(this.state.movies[i].title);
      console.log(currentTitle.indexOf(text));
      if (currentTitle.indexOf(text) >= 0) {
        result.push({title: this.state.movies[i].title})
      } else if (result.length === 0) {
        result = [{title: "Sorry! No results found :("}]
      }
    }
    // console.log(result);
    this.setState({
      movies: result
    })
    // this.setState({
    //   clickedSearch: true
    // })
  }
  render() {
    return(
      <div>
        <div className ="searchBar">
          <Search searchVideos={this.searchVideos.bind(this)} />
        </div>
        <div className='movieContainer'>
           <MovieList movies={this.state.movies}/>
        </div>
      </div>
      
  )}
};

export default App;
 