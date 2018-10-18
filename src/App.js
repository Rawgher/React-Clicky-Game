import React, { Component } from 'react';
import Footer from "./components/Footer";
import Header from "./components/Header";
import Jumbotron from "./components/Jumbotron";
import ImageCard from "./components/ImageCard";
import Wrapper from "./components/Wrapper"
// import logo from './logo.svg';
import images from "./images.json"
import './App.css';

class App extends Component {
  state = {
    images
  };

  removeImage = id => {
    // Filter this.state.friends for friends with an id not equal to the id being removed
    const images = this.state.images.filter(image => image.id !== id);
    // Set this.state.friends equal to the new friends array
    this.setState({ images });
  };

  render() {
    return (
      <Wrapper>
        <Header />
        <Jumbotron />
        {this.state.images.map(image => (
          <ImageCard
            removeFriend={this.removeFriend}
            id={image.id}
            key={image.id}
            name={image.name}
            image={image.image}
          />
        ))}
        <Footer />
      </Wrapper>
    );
  }
}

export default App;
