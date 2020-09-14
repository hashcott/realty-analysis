import React, { Component } from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import PropTypes from "prop-types";
import { ParallaxImage } from "react-native-snap-carousel";
import styles from "./SliderEntry.style";
import { FontAwesome } from "@expo/vector-icons";

export default class SliderEntry extends Component {
  static propTypes = {
    data: PropTypes.object.isRequired,
    even: PropTypes.bool,
    parallax: PropTypes.bool,
    parallaxProps: PropTypes.object,
  };

  get image() {
    const {
      data: { illustration },
      parallax,
      parallaxProps,
      even,
    } = this.props;

    return parallax ? (
      <ParallaxImage
        source={{ uri: illustration }}
        containerStyle={[
          styles.imageContainer,
          even ? styles.imageContainerEven : {},
        ]}
        style={styles.image}
        parallaxFactor={0.35}
        showSpinner={true}
        spinnerColor={even ? "rgba(255, 255, 255, 0.4)" : "rgba(0, 0, 0, 0.25)"}
        {...parallaxProps}
      />
    ) : (
      <Image source={{ uri: illustration }} style={styles.image} />
    );
  }

  render() {
    const {
      data: { diaChi, giaCa },
      even,
    } = this.props;

    const uppercaseTitle = diaChi ? (
      <Text
        style={[styles.title, even ? styles.titleEven : {}]}
        numberOfLines={2}
      >
        {diaChi.toUpperCase()}
      </Text>
    ) : (
      false
    );

    return (
      <TouchableOpacity
        activeOpacity={1}
        style={styles.slideInnerContainer}
        onPress={() => this.props.HandleClick(this.props.data)}
      >
        <View style={{ flexDirection: "row" }}>
          {/* <View style={{ width: 100, height: 100 }}>{this.image}</View> */}
          <View
            style={[styles.textContainer, even ? styles.textContainerEven : {}]}
          >
            {uppercaseTitle}
            <View style={styles.subtitleContainer}>
              <FontAwesome name="dollar" size={20} color="red" />
              <Text
                style={[styles.subtitle, even ? styles.subtitleEven : {}]}
                numberOfLines={1}
              >
                {giaCa}
              </Text>
            </View>
          </View>
        </View>
      </TouchableOpacity>
    );
  }
}
