import React from "react";
import { StyleSheet, Text, View, FlatList } from "react-native";
import { createExample } from "../actions/Example";
import { connect } from "react-redux";
import { DATA } from "../DummyData";
import ItemReport from "../components/ItemReport";


const Report = ({navigation}) => {
  const HandleClick = (item) => {
    let type= item.x;
    let data= item.reportData;
    let predictText = item.predictText;
    navigation.navigate('DetailReport', {
      type,
      data,
      predictText
    });
  }
  const renderItem = ({ item, navigation }) => <ItemReport item={item} HandleClick={HandleClick} />;

  return (
    <View style={{ flex: 1, backgroundColor: "white" }}>
      <Text style={styles.subtitle}>
        Tháng 1 - Tháng 6
      </Text>
      <View style={styles.container}>
        <FlatList data={DATA} renderItem={renderItem}/>
      </View>
    </View>
  );
};

const mapStateToProps = (state) => {
  return { ...state.example };
};

export default connect(mapStateToProps, { createExample })(Report);

const styles = StyleSheet.create({
  container: {  
    flex: 1,
  },
  subtitle: { margin: 15, fontSize: 18, fontWeight: "500" },
});
