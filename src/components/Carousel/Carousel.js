import React, { useState, useRef } from "react";
import { View, ScrollView } from "react-native";
import Carousel, { Pagination } from "react-native-snap-carousel";
import SliderEntry from "../SliderEntry/SliderEntry";
import { sliderWidth, itemWidth } from "../SliderEntry/SliderEntry.style";
import styles, { colors } from "./index.style";

const SLIDER_1_FIRST_ITEM = 0;

const CarouselPlace = (props) => {
  const carouselRef = useRef(null);

  const [slider1ActiveSlide, setslider1ActiveSlide] = useState(
    SLIDER_1_FIRST_ITEM
  );

  const renderItemWithParallax = ({ item, index }, parallaxProps) => {
    return (
      <SliderEntry
        data={item}
        even={(index + 1) % 2 === 0}
        parallax={true}
        parallaxProps={parallaxProps}
        HandleClick={props.HandleClick}
      />
    );
  };

  const mainExample = () => {
    return (
      <View style={styles.exampleContainer}>
        <Carousel
          ref={carouselRef}
          data={props.data}
          renderItem={renderItemWithParallax}
          sliderWidth={sliderWidth}
          itemWidth={itemWidth}
          hasParallaxImages={true}
          firstItem={SLIDER_1_FIRST_ITEM}
          inactiveSlideScale={0.94}
          inactiveSlideOpacity={0.7}
          containerCustomStyle={styles.slider}
          contentContainerCustomStyle={styles.sliderContentContainer}
          loop={true}
          loopClonesPerSide={2}
          onSnapToItem={(index) => setslider1ActiveSlide(index)}
        />
        <Pagination
          dotsLength={props.data.length}
          activeDotIndex={slider1ActiveSlide}
          containerStyle={styles.paginationContainer}
          dotColor={"rgba(255, 255, 255, 0.92)"}
          dotStyle={styles.paginationDot}
          inactiveDotColor={colors.black}
          inactiveDotOpacity={0.4}
          inactiveDotScale={0.6}
          carouselRef={carouselRef}
          tappableDots={!!carouselRef}
        />
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <ScrollView
        style={styles.scrollview}
        scrollEventThrottle={200}
        directionalLockEnabled={true}
      >
        {mainExample()}
      </ScrollView>
    </View>
  );
};

export default CarouselPlace;
