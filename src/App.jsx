import React, { Component } from "react";
import FriendCard from "./components/FriendCard";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import friends from "./friends.json";

class App extends Component {
  state = { friends: friends };

  handleRemove = (id) => {
    // console.log("remove" + id)
    this.setState({
      friends: this.state.friends.filter((friend) => friend.id !== id),
    });
  };

  render() {
    return (
      <Wrapper>
        <Title>Friends List</Title>
        {this.state.friends.map((friend) => (
          <FriendCard
            key={friend.id}
            {...friend}
            // name={friend.name}
            // image={friend.image}
            // occupation={friend.occupation}
            // location={friend.location}
            handleRemove={this.handleRemove}
          />
        ))}
      </Wrapper>
    );
  }
}

export default App;
