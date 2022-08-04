import React, { Component } from 'react';
import { View, Text } from 'react-native';
import CarouselImage from '../../component/CarouselImage';

class Hollywood extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <View>
        <CarouselImage />
        <Text> Hollywood </Text>
      </View>
    );
  }
}

export default Hollywood;
