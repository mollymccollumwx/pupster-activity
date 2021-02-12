import React, { Component } from "react";
import axios from "axios";

class Discover extends Component {
  state = {
    dogImageURL: "",
    dogsYouLike: 0,
    dogsThatLikeYou:0,
  };

  componentDidMount() {
    this.displayDog();
  }

  displayDog = () => {
    const BASEURL = "https://dog.ceo/api/breeds/image/random";
    // const APIKEY = "&apikey=trilogy";

    axios.get(BASEURL).then((response) => {
      const puppy = response.data.message;

      this.setState({ dogImageURL: puppy });
    });
  };

  // handleIncrement increases this.state.count by 1
  handleUnlike = () => {
    // We always use the setState method to update a component's state
    this.displayDog();
  };

  // handleDecrement decreases this.state.count by 1
  handleLike = () => {
    // We always use the setState method to update a component's state
    const randomNum = Math.floor(Math.random()*5)
    if(randomNum ===4 || randomNum >2){
      this.setState({ dogsThatLikeYou: this.state.dogsThatLikeYou + 1 });
    }
    this.setState({ dogsYouLike: this.state.dogsYouLike + 1 });
    this.displayDog();
  };

  render() {
    return (
      <div>
        <h1>Discover page</h1>
        <img alt="good boy" src={this.state.dogImageURL} />
        <button className="btn btn-danger" onClick={this.handleUnlike}>
          I'm an evil person
        </button>{" "}
        <button className="btn btn-primary" onClick={this.handleLike}>
          This is a good pupper
        </button>
        <h5>dog likes: {this.state.dogsYouLike}</h5>
        <h5>dogs that like you : {this.state.dogsThatLikeYou}</h5>
      </div>
    );
  }
}

export default Discover;
