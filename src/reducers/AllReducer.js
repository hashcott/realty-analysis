import { GET_ALL, GET_ALL_SUCCESS, GET_ALL_FAILURE } from "../actions/type";
const initialState = {
  loading: true,
  data: [],
  error: null,
};
export default (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL:
      return state;
    case GET_ALL_SUCCESS:
      return { ...state, loading: false, data: action.payload };
    case GET_ALL_FAILURE:
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};
