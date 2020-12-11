import React from 'react';

var DropDown = (props) => {

  return (
    <div>
      <div>
        <button onClick={() => {
          props.dropDown(props.info.movie);
          props.info.toggleMovie(props.info.movie);
          //console.log(props.info.movie.Runtime, props.info.movie['IMDB Rating'], props.info.movie.MetaScore,  props.info.movie.watched)
        }}></button>
      </div>

      <div id="dropdown" style={{display: props.isDroppedDown ? 'block' : 'none'}}>
        {props.info.movie.RunTime} 
        {props.info.movie['IMDB Rating']}
        {props.info.movie.MetaScore}  
        {props.info.movie.watched}   
      </div>
    </div>
  
  )
}


export default DropDown