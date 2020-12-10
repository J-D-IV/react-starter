import React from 'react';

var AddMovie = (props) => {
console.log(props);
  return (
    <div>
      <input id="addMovieButton" placeholder="add movie here"/>
      <button className="button2" onClick={() => {
        let text = document.getElementById("addMovieButton").value.toUpperCase();
        props.addMovieToList(text);
      }}>Add</button>
    </div>
  )
}



export default AddMovie

