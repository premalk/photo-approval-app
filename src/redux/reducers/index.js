import { combineReducers } from "redux";

const imageReducer = (state = [], action) => {
  switch (action.type) {
    case "ADD_IMAGE":
      return [...state, { url: action.payload.url, id: action.payload.id }];
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  images: imageReducer,
});

export default rootReducer;
