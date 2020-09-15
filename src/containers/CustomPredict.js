import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  ScrollView,
  TextInput,
  SafeAreaView,
  View,
} from "react-native";
import { createExample } from "../actions/Example";
import { connect } from "react-redux";
import ItemReport from "../components/ItemReport";
import SearchBar from "../components/SearchBar";
import RNPickerSelect from "react-native-picker-select";
import SelectMultiple from "react-native-select-multiple";

const CustomPredict = ({ navigation }) => {
  const [value, onChangeText] = useState("Useless Placeholder");
  const [feature, setFeature] = useState([]);

  const onSelectionsChange = (selectedFruits) => {
    // selectedFruits is array of { label, value }
    setFeature({ selectedFruits });
  };
  const HandleClick = (item) => {
    let type = item.x;
    let data = item.reportData;
    let predictText = item.predictText;
    navigation.navigate("DetailReport", {
      type,
      data,
      predictText,
    });
  };
  const renderItem = ({ item, navigation }) => (
    <ItemReport item={item} HandleClick={HandleClick} />
  );

  const handleSearch = (detail) => {
    console.log(detail);
  };

  return (
      <ScrollView style={{ flex: 1, backgroundColor: "white" }}>
        <Text style={styles.textInput}>Nhập địa điểm muốn dự đoán</Text>
        <SearchBar />
        <Text style={styles.textInput}>Chọn loại hình bất động sản</Text>
        <RNPickerSelect
          onValueChange={(value) => console.log(value)}
          items={[
            { label: "Nhà riêng", value: "Nhà riêng" },
            { label: "Nhà mặt phố", value: "Nhà mặt phố" },
            { label: "Căn hộ Cao cấp", value: "Căn hộ Cao cấp" },
            { label: "Căn hộ trung cấp", value: "Căn hộ trung cấp" },
            { label: "Nhà biệt thự", value: "Nhà biệt thự" },
            { label: "Biệt thự liền kề", value: "Biệt thự liền kề" },
            { label: "Căn hộ chung cư", value: "Căn hộ chung cư" },
            { label: "Nhà rẻ", value: "Nhà rẻ" },
            { label: "Căn hộ Tập thể", value: "Căn hộ Tập thể" },
            { label: "Căn hộ rẻ", value: "Căn hộ rẻ" },
            { label: "Khác", value: "Khác" },
          ]}
        />
        <Text style={styles.textInput}>Nhập Diện Tích</Text>
        <TextInput
          style={{ height: 40, borderColor: "gray", borderWidth: 1 }}
          onChangeText={(text) => onChangeText(text)}
          value={value}
        />
        <Text style={styles.textInput}>Tổng số tầng</Text>
        <TextInput
          style={{ height: 40, borderColor: "gray", borderWidth: 1 }}
          onChangeText={(text) => onChangeText(text)}
          value={value}
        />
        <Text style={styles.textInput}>Tổng số phòng ngủ</Text>
        <TextInput
          style={{ height: 40, borderColor: "gray", borderWidth: 1 }}
          onChangeText={(text) => onChangeText(text)}
          value={value}
        />
        <Text style={styles.textInput}>Tổng số phòng tắm</Text>
        <TextInput
          style={{ height: 40, borderColor: "gray", borderWidth: 1 }}
          onChangeText={(text) => onChangeText(text)}
          value={value}
        />
        <Text style={styles.textInput}>Pháp lý(có sổ đỏ hay không?)</Text>
        <RNPickerSelect
          onValueChange={(value) => console.log(value)}
          items={[
            { label: "Có", value: "1" },
            { label: "Không", value: "0" },
          ]}
        />
        <Text style={styles.textInput}>Đặc điểm xã hội</Text>
        <SelectMultiple
          items={[
            "Gần trường",
            "Gần bệnh viện",
            "Gần công viên",
            "Gần nhà trẻ",
            "Tiện kinh doanh",
            "Khu dân trí cao",
            "Gần chợ",
          ]}
          selectedItems={feature}
          onSelectionsChange={onSelectionsChange}
        />
        <Text style={styles.textInput}>Tiện ích kèm theo</Text>
        <SelectMultiple
          items={[
            "Chỗ để xe máy",
            "Chỗ để ôtô",
            "Trung tâm thể dục",
            "Hệ thống an ninh",
            "Nhân viên bảo vệ",
            "Hồ bơi",
            "Truyền hình cáp",
            "Internet",
          ]}
          selectedItems={feature}
          onSelectionsChange={onSelectionsChange}
        />
        <Text style={styles.textInput}>Nội Thất</Text>
        <SelectMultiple
          items={[
            "Bàn ăn",
            "Bàn trà",
            "Sofa phòng khách",
            "Kệ ti vi",
            "Giường ngủ",
            "Tủ quần áo",
            "Sàn gỗ/đá",
            "Trần thả",
            "Tủ bếp",
            "Bình nóng lạnh",
            "Điều hòa",
            "Bồn rửa mặt",
            "Bồn tắm",
          ]}
          selectedItems={feature}
          onSelectionsChange={onSelectionsChange}
        />  
        <Button
        // onPress={() => navigation.navigate("Map", { minPrice, maxPrice, minArea, maxArea, type})}
        // onPress={() =>  { route.params.handleFilter(minPrice, maxPrice, minArea, maxArea, type); 
        //   navigation.navigate("Map")}}
        title="Apply"
        color="black"
      />
      </ScrollView>

  );
};

const mapStateToProps = (state) => {
  return { ...state.example };
};

export default connect(mapStateToProps, { createExample })(CustomPredict);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#e8e8e8",
  },
  textInput: {
      fontSize: 16,
      fontWeight: '500',
  },
  subtitle: {
    marginVertical: 8,
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
  },
});
