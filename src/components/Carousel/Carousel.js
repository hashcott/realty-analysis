import * as React from "react";
import { View, ScrollView, StatusBar, SafeAreaView } from "react-native";

import Carousel, { Pagination } from "react-native-snap-carousel";
import { ENTRIES } from "../../DummyData";
import SliderEntry from "../SliderEntry/SliderEntry";
import { sliderWidth, itemWidth } from "../SliderEntry/SliderEntry.style";
import styles, { colors } from "./index.style";

const SLIDER_1_FIRST_ITEM = 0;

export default class CarouselPlace extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      slider1ActiveSlide: SLIDER_1_FIRST_ITEM,
    };
  }

  _renderItemWithParallax({ item, index }, parallaxProps) {
    return (
      <SliderEntry
        data={item}
        even={(index + 1) % 2 === 0}
        parallax={true}
        parallaxProps={parallaxProps}
      />
    );
  }

  mainExample(number, title) {
    const { slider1ActiveSlide } = this.state;

    return (
      <View style={styles.exampleContainer}>
        
        <Carousel
          ref={(c) => (this._slider1Ref = c)}
          data={ENTRIES}
          renderItem={this._renderItemWithParallax}
          sliderWidth={sliderWidth}
          itemWidth={itemWidth}
          hasParallaxImages={true}
          firstItem={SLIDER_1_FIRST_ITEM}
          inactiveSlideScale={0.94}
          inactiveSlideOpacity={0.7}
          // inactiveSlideShift={20}
          containerCustomStyle={styles.slider}
          contentContainerCustomStyle={styles.sliderContentContainer}
          loop={true}
          loopClonesPerSide={2}
          // autoplay={true}
          // autoplayDelay={500}
          // autoplayInterval={3000}
          onSnapToItem={(index) => this.setState({ slider1ActiveSlide: index })}
        />
        <Pagination
          dotsLength={ENTRIES.length}
          activeDotIndex={slider1ActiveSlide}
          containerStyle={styles.paginationContainer}
          dotColor={"rgba(255, 255, 255, 0.92)"}
          dotStyle={styles.paginationDot}
          inactiveDotColor={colors.black}
          inactiveDotOpacity={0.4}
          inactiveDotScale={0.6}
          carouselRef={this._slider1Ref}
          tappableDots={!!this._slider1Ref}
        />
      </View>
    );
  }
  render() {
    const example1 = this.mainExample(
      1,
      "Default layout | Loop | Autoplay | Parallax | Scale | Opacity | Pagination with tappable dots"
    );

    return (
      <View style={styles.container}>
        <ScrollView
          style={styles.scrollview}
          scrollEventThrottle={200}
          directionalLockEnabled={true}
        >
          {example1}
        </ScrollView>
      </View>
    );
  }
}
