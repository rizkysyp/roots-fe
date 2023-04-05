const initialState = {
  kota: [],
};

const kotaReducer = (state = initialState, action) => {
  if (action.type === "INSERT_DATA") {
    return {
      ...state,
      kota: [...state.data, action.payload],
    };
  } else if (action.type === "UPDATE_DATA") {
    return {
      ...state,
      kota: [...state.data, action.payload],
    };
  } else if (action.type === "DELETE_DATA") {
    return {
      ...state,
      kota: [...state.data, action.payload],
    };
  } else {
    return state;
  }
};

export default kotaReducer;
