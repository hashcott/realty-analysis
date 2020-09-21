import React, {useState} from "react";
import { StyleSheet, Text, View, FlatList } from "react-native";
import { createExample } from "../actions/Example";
import { connect } from "react-redux";
import ItemReport from "../components/ItemReport";
import SearchBar from "../components/SearchBar";


const Report = ({navigation}) => {
  const [listData, setListData] = useState([]);

  const HandleClick = (item) => {
    console.log(item);
    let type= item.loai;
    let data= item.reportData;
    let predictText = item.trend;
    navigation.navigate('DetailReport', {
      type,
      data,
      predictText
    });
  }
  const renderItem = ({ item, navigation }) => <ItemReport item={item} HandleClick={HandleClick} />;

  const handleSearch = (detail) => {
    const address = detail.formatted_address;
    const temp = address.split(', ');
    const district = temp[temp.length - 3];
    const locationSearch = detail.geometry.location;
    const latitude= locationSearch.lat;
    const longitude= locationSearch.lng;
    
    fetch('https://dreamkatchr.herokuapp.com/predictByType/' + district + '/' + longitude + '/'+ latitude)
      .then((response) => response.json())
      .then((data) => {
        let dataConvert = [];
        for (var value of Object.values(data)) {
          dataConvert.push(value)
      }
        setListData(dataConvert);
      })
      .catch((error) => {
        console.error(error);
      });
  }
  
  return (
    <View style={{ flex: 1, backgroundColor: "white" }}>
      <Text style={styles.subtitle}>
        Tháng 1 - Tháng 6
      </Text>
      <SearchBar styling={{}} handleSearch={handleSearch}/>
      <View style={styles.container}>
        <FlatList data={listData} renderItem={renderItem}/>
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
