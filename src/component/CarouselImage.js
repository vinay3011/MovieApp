import "../../ignoreWarnings";
import * as React from 'react';
import {
  Text,
  Image,
  View,
  SafeAreaView, StyleSheet
} from 'react-native';

import Carousel from '../customModules/react-native-snap-carousel';

// import at the very top of everything.



export default class CarouselImage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeIndex: 0,
      carouselItems: [
        {
          img: 'https://c8.alamy.com/comp/F762X4/indian-bollywood-hindi-film-movie-poster-of-bol-bachchan-a-rohit-shetty-F762X4.jpg',
          name: 'Bol Bachan',
        },
        {
          img: 'https://www.holidify.com/blog/wp-content/uploads/2015/06/Poster-New.jpg',
          name: 'Bernice Alvarez',
        },
        {
          img: 'https://randomuser.me/api/portraits/women/19.jpg',
          name: 'Jennie Barnett',
        },
        {
          img: 'https://randomuser.me/api/portraits/men/55.jpg',
          name: 'Matthew Wagner',
        },
        {
          img: 'https://randomuser.me/api/portraits/men/71.jpg',
          name: 'Christian Wilson',
        },
        {
          img: 'https://randomuser.me/api/portraits/women/21.jpg',
          name: 'Sophia Fernandez',
        },
        {
          img: 'https://randomuser.me/api/portraits/women/42.jpg',
          name: 'Sylvia Lynch',
        },
      ]
    }
  }

  _renderItem({ item, index }) {
    return (
      <View style={styles.container}>
        <Image style={styles.image} source={{ uri: item.img}} />
        <Text>{item.name}</Text>
      </View>
    )
  }
  render() {
    return (
      <View style={styles.carouselItem}>
        <Carousel
          layout={"default"}
          ref={ref => this.carousel = ref}
          data={this.state.carouselItems}
          sliderWidth={100}
          itemWidth={400}
          renderItem={this._renderItem}
          onSnapToItem={index => this.setState({ activeIndex: index })} />
      </View>

    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'floralwhite',
    borderRadius: 10,
    height: 250,
    padding: 0,
   
  },

  image: {
    height: 300,
    flex: 1,
    width: null,
  },
  carouselItem: {
    flex: 1, flexDirection: 'row', justifyContent: 'center',
  }
});