import React from 'react';

var Search = (props) => {
  
  return (
    <div>
        <input id="input1"/>
        <button onClick={() => {
          let text = document.getElementById("input1").value;
          // let text = document.getElementById('inputFromSearch').value;
          console.log(text);
          props.searchVideos(text);
        }}/>
    </div>
  );
};

export default Search