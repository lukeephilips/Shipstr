import * as types from "./../constants/ActionTypes";
import providersApi from '../api/mockProvidersApi';

export const getProviders = (category) => ({
  type: types.GET_PROVIDERS,
  category
});

// Thunks

export function loadProviders() {
  return function(dispatch) {
    // dispatch(beginCall());
    return providersApi.getAllProviders().then(providers => {
      // dispatch(loadProvidersSuccess(prooviders));
    }).catch(error => {
      throw(error);
    });
  };
};
