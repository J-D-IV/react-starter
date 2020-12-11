import React from 'react';

class AddMovie extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: ''
    }
  }
  
  inputHandler () {
    this.setState({
      input: ''
    })
  }

  render() {
    return (
      <div>
        <form>
          <input 
            id="addMovieButton" 
            placeholder="add movie here"
            type="text"/>
          <button 
            className="button2" 
            onClick={() => {
              let text = document.getElementById("addMovieButton").value.toUpperCase();
              this.props.addMovieToList(text);
          }}>Add</button>
        </form>
    </div>
    )
  }
}



export default AddMovie

