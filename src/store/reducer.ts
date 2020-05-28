export const rootReducer = (state: any, action: any) => {
  const { reducer, payplad } = action;
  if (reducer) {
    return {
      ...state,
      [reducer.name]: payplad,
    };
  } else {
    return { ...state };
  }
};
