import constants from "./../constants";
import * as actions from "./../actions";
import providerReducer from "./providerReducer"
import thunk from 'redux-thunk';


describe("Provider reducer", () => {
  const { defaultState, types } = constants;
  it("should return default state", () => {
    expect(providerReducer(defaultState.providers, { type: null })).toEqual(defaultState.providers);
  });
  it("should return all providers", () => {
    expect(providerReducer(defaultState.providers, { type: null }).length).toEqual(100);
  });
  it("should return only Air providers", () => {
    expect(providerReducer(defaultState.providers, { type: types.GET_PROVIDERS, category: "air" }).length).toEqual(44);
  });
  it("should return only Ocean providers", () => {
    expect(providerReducer(defaultState.providers, { type: types.GET_PROVIDERS, category: "ocean" }).length).toEqual(36);
  });
  it("should return only CustomBroker providers", () => {
    expect(providerReducer(defaultState.providers, { type: types.GET_PROVIDERS, category: "customBroker" }).length).toEqual(20);
  });
});
