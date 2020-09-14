const { GET_ALL, GET_ALL_SUCCESS, GET_ALL_FAILURE } = require("./type");

export const getAll = () => async (dispatch) => {
  dispatch({ type: GET_ALL });
  try {
    const listAll = await fetch("https://dreamkatchr.herokuapp.com/getAll");
    const data = await listAll.json();
    let dataConvert = [];
    Object.keys(data).forEach((keys) => {
      dataConvert.push(data[keys]);
    });
    console.log("done");
    dispatch({ type: GET_ALL_SUCCESS, payload: dataConvert });
  } catch (error) {
    console.log("fail");
    dispatch({ type: GET_ALL_FAILURE, payload: error.message });
  }
};
