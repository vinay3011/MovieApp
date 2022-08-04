import React, { Component } from 'react';
import { View, Text } from 'react-native';
import CarouselImage from '../../component/CarouselImage';


class Bollywood extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <View>
        <CarouselImage />
      </View>
    );
  }
}

export default Bollywood;
