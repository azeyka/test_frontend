const buttonReducer = (state = false, action) => {
  switch (action.type) {
    case "SET":
      return action.payload;
    default:
      return false;
  }
};

export default buttonReducer;
