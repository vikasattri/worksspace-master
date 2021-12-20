import { fromJS } from "immutable";
import { SET_LIST } from "../constants/Constants";

import warehouseList from "../../warehouseList.json";

/**
 * initial state
 */
const initialState = fromJS({
  wareHouseList: warehouseList,
});
/**
 *
 * @param {*Object} state - current state
 * @param {*} action - the action to be performed
 */
function globalReducer(state = initialState, action) {
  switch (action.type) {
    case SET_LIST:
      return state.set("wareHouseList", action.payload);

    default:
      return state;
  }
}
export default globalReducer;
