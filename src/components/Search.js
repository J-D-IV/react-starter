import React from 'react';

var Search = (props) => {
  
  return (
    <div>
        <input placeholder="search" id="input1"/>
        <button className="button1" onClick={() => {
            let text = document.getElementById("input1").value.toUpperCase();
            props.searchVideos(text);
            // let text = document.getElementById('inputFromSearch').value;
            // console.log(text);
            }}>
            <i class="fa fa-search"></i>
        </button>
    </div>

  );
};

export default Search