const initialState = {
    items: [],
  };
  
  const clothsReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'SET_PRODUCTS':
        return {
          ...state,
          items: action.payload,
        };
      default:
        return state;
    }
  };
  
  export default clothsReducer;