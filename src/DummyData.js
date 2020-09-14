import {dataTest} from './containers/Loading';

export const test = dataTest;

export const graphicData = [
  { y: 30, label: "30%" },
  { y: 40, label: "40%" },
  { y: 50, label: "50%" },
  { y: 20, label: "20%" },
];

export const graphicColor = ["red", "blue", "yellow", "green", "tomato"];

export const DATA = [
  {
    id: 1,
    x: "Chung cư cao cấp",
    color: "red",
    reportData: [
      { month: 1, price: 2.0 },
      { month: 2, price: 3.4 },
      { month: 3, price: 6.0 },
      { month: 4, price: 5.0 },
      { month: 5, price: 5.7 },
      { month: 6, price: 4.0 },
    ],
    predict: "decrease",
    predictText: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmo tempor invidunt."
  },
  {
    id: 2,
    x: "Nhà cấp 4",
    color: "blue",
    reportData: [
      { month: 1, price: 5.0 },
      { month: 2, price: 2.4 },
      { month: 3, price: 4.0 },
      { month: 4, price: 2.0 },
      { month: 5, price: 6.7 },
      { month: 6, price: 5.0 },
    ],
    predict: "decrease",
    predictText: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmo tempor invidunt."
  },
  {
    id: 3,
    x: "Chung cư",
    color: "yellow",
    reportData: [
      { month: 1, price: 1.0 },
      { month: 2, price: 2.4 },
      { month: 3, price: 1.0 },
      { month: 4, price: 3.0 },
      { month: 5, price: 2.7 },
      { month: 6, price: 4.0 },
    ],
    predict: "increase",
    predictText: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmo tempor invidunt."
  },
  {
    id: 4,
    x: "Biệt thự",
    color: "green",
    reportData: [
      { month: 1, price: 7.0 },
      { month: 2, price: 8.4 },
      { month: 3, price: 6.0 },
      { month: 4, price: 9.0 },
      { month: 5, price: 4.7 },
      { month: 6, price: 8.0 },
    ],
    predict: "increase",
    predictText: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmo tempor invidunt."
  },
];

export const ENTRIES = [
  {
    title: "35 Nguyễn Trãi",
    subtitle: "2 tỷ",
    illustration: "https://i.imgur.com/UYiroysl.jpg",
    type: "Chung cu cao cap",
  },
  {
    title: "23 Hoàng Quốc Việt",
    subtitle: "3 tỷ 9",
    illustration: "https://i.imgur.com/UPrs1EWl.jpg",
    type: "Chung cu cao cap",
  },
  {
    title: "29 Lê Văn Lương",
    subtitle: "4 tỷ",
    illustration: "https://i.imgur.com/MABUbpDl.jpg",
    type: "Chung cu cao cap",
  },
  {
    title: "46 Nhật Chiêu",
    subtitle: "6 tỷ",
    illustration: "https://i.imgur.com/MABUbpDl.jpg",
    type: "Chung cu cao cap",
  },
  {
    title: "46 Nhật Chiêu",
    subtitle: "6 tỷ",
    illustration: "https://i.imgur.com/MABUbpDl.jpg",
    type: "Chung cu cao cap",
  },
];
