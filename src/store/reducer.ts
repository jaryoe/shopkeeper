/**
 * 公共Reducer
 * @param state
 * @param action {reducer} 是否开启保存REDUCER并设置初始值和名称
 *
 */
export default function storeReducer(state: any, action: any) {
  const { reducer } = action;
  if (reducer) {
    switch (action.type) {
      case action.type: {
        console.log("reducer", action);
        return {
          ...state,
          [action.reducer.name]: action.payload,
        };
      }

      default:
        return {
          ...state,
          [reducer.name]: reducer.init,
        };
    }
  } else {
    return state || {};
  }
}
