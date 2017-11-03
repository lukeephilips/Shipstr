import * as types from "./../constants/ActionTypes";
import providersApi from '../api/mockProvidersApi';

export const loadProvidersSuccess = (category) => ({
  type: types.GET_PROVIDERS,
  category
});


// Thunks

// export function getProviders() {
//   return function(dispatch) {
//     // dispatch(beginCall());
//     return providersApi.getAllProviders().then(providers => {
//       dispatch(loadProvidersSuccess(providers));
//     }).catch(error => {
//       throw(error);
//     });
//   };
// };

export const getProviders = (category) => {
  return (dispatch) => {
    dispatch(loadProvidersSuccess(category));
    console.log(providersApi.getAllProviders());
    return providersApi.getAllProviders()
  }
}
