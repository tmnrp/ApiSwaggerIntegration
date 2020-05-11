import { combineReducers } from "redux";

const petsReducers = (pets = [], action) => {
  if (action.type === "UPDATE_PETS") {
    return action.payload;
  }
  return pets;
};

export default combineReducers({
  pets: petsReducers
});
