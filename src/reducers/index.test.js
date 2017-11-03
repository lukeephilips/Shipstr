import constants from "./../constants";
import * as actions from "./../actions";
import getProviders from "./providerReducer"
import thunk from 'redux-thunk';


describe("Provider reducer", () => {
  const { defaultState, types } = constants;
  it("should return default state", () => {
    expect(getProviders(defaultState.category, { type: null })).toEqual(defaultState.category);
  });
  it("should return all providers", () => {
    expect(getProviders(defaultState.category, { type: null })).toEqual(defaultState.category);
  });
});
