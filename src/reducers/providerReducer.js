import constants from "./../constants";

const {defaultState, types} = constants;

const providerReducer = (state = defaultState.providers, action) => {
  switch (action.type) {
    case types.GET_PROVIDERS:
      return state;
    default: return state;
  }
};

export default providerReducer;
