import * as types from "./../constants/ActionTypes";
import providersApi from '../api/mockProvidersApi';

export const loadProvidersSuccess = (providers) => ({
  type: types.GET_PROVIDERS,
  providers
});

// Thunks

export function getProviders() {
  return function(dispatch) {
    // dispatch(beginCall());
    return providersApi.getAllProviders().then(providers => {
      dispatch(loadProvidersSuccess(providers));
    }).catch(error => {
      throw(error);
    });
  };
};
