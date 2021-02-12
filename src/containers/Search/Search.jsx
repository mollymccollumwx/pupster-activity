import React, { Component } from "react";
import axios from "axios";

class Search extends Component {
  state = {
    searchTerm: "",
  };

  componentDidMount() {
    this.displayBreeds();
  }
  // onsubmit
  // onchange

  displayBreeds = () => {
    const dogBreedsListURL = "https://dog.ceo/api/breeds/list";
    
    axios.get(dogBreedsListURL).then((response) => {
      const puppy = response.data.message;
      console.log(puppy);
    });
  };

  searchBreeds = () => {

    const searchByBreedURL = `https://dog.ceo/api/breed/${this.state.searchTerm}/images`;
    axios.get(searchByBreedURL).then((response) => {
      const puppy = response.data.message;
      console.log(puppy);
    });
  };


  
  handleInputChange = event => {
    const value = event.target.value;
    const name = event.target.name;
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    this.searchBreeds(this.state.searchTerm);

  };

  render() {
    return (
      <div>
        <h1>Search Page</h1>
        <form>
          <div className="form-group">
            <label htmlFor="search">Search:</label>
            <input
              onChange={this.handleInputChange}
              value={this.state.searchTerm}
              name="searchTerm"
              type="text"
              className="form-control"
              placeholder="Search For a dog"
              id="search"
            />
            <br />
            <button
              onClick={this.handleFormSubmit}
              className="btn btn-primary"
            >
              Search
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default Search;
