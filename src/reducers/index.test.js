import constants from "./../constants";
import * as actions from "./../actions";
import providerReducer from "./providerReducer"
import thunk from 'redux-thunk';


describe("Provider reducer", () => {
  const { defaultState, types } = constants;
  it("should return default state", () => {
    expect(providerReducer(defaultState.category, { type: "" })).toEqual(defaultState.category);
  });
  it("should return all providers", () => {
    expect(providerReducer(defaultState.providers, { type: null }).length).toEqual(100);
  });
  it("should return only Air providers", () => {
    expect(providerReducer(defaultState.providers, { type: types.GET_PROVIDERS }).length).toEqual(10);
  });
});
