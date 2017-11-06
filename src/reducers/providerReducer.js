import constants from "./../constants";

const {defaultState, types} = constants;

const providerReducer = (state = defaultState, action) => {
  switch (action.type) {
    case types.GET_PROVIDERS:
      let newState = state.filter((provider) => {
        return provider.type === action.category
      });
      return newState;
    default:
      return state;
  }
};

export default providerReducer;
