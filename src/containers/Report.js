import React from "react";
import { StyleSheet, Text, View, FlatList } from "react-native";
import { createExample } from "../actions/Example";
import { connect } from "react-redux";
import { DATA } from "../DummyData";
import ItemReport from "../components/ItemReport";
import SearchBar from "../components/SearchBar";


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

  const handleSearch = (detail) => {
    console.log(detail);
  }
  
  return (
    <View style={{ flex: 1, backgroundColor: "white" }}>
      <Text style={styles.subtitle}>
        Tháng 1 - Tháng 6
      </Text>
      <SearchBar styling={{}} handleSearch={handleSearch}/>
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
    backgroundColor : "#e8e8e8"
  },

  subtitle: { marginVertical: 8 , fontSize: 18, fontWeight: "bold", textAlign: "center" },
});
