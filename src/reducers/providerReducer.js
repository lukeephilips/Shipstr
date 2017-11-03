import constants from "./../constants";

const {defaultState, types} = constants;

const providerReducer = (state = defaultState, action) => {
  switch (action.type) {
    case types.GET_PROVIDERS:
      console.log(action);
      return newState;
    default:
      let newState = state.providers.filter((provider) => {
        return provider.type === "air"
      });
      console.log(newState);
      return newState;
  }
};

export default providerReducer;
