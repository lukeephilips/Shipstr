import constants from "./../constants";

const {defaultState, types} = constants;

const providerReducer = (state = defaultState, action) => {
  switch (action.type) {
    case types.GET_PROVIDERS:
      console.log(action);
      return state;
    default:
    // console.log("default",  defaultState);

    // console.log("reducer  ", state);
      return state.providers;
  }
};

export default providerReducer;
