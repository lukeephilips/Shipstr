import * as types from "./../constants/ActionTypes";
import providersApi from '../api/mockProvidersApi';

import * as providerActions from "./";

describe("Provider actions", () => {
  describe("loadProvidersSuccess", () => {
    it("should create a getProviders action", () => {
      let action = providerActions.loadProvidersSuccess("air");
      expect(action).toEqual({
        type: types.GET_PROVIDERS,
        category: "air"
      });
    });
  });
  describe("getProviders", () => {
    it("should create a getProviders action", () => {
      let action = providerActions.getProviders("air");
      expect(action).toEqual({
        type: types.GET_PROVIDERS,
        category: "air"
      });
    });
  });
});
