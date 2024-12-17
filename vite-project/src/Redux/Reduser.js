const initialState = {
    names: JSON.parse(localStorage.getItem('names')) || [],
  };
  
  const nameReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'ADD_NAME':
        const updatedNamesAdd = [...state.names, action.payload];
        localStorage.setItem('names', JSON.stringify(updatedNamesAdd));
        return { ...state, names: updatedNamesAdd };
  
      case 'REMOVE_NAME':
        const updatedNamesRemove = state.names.filter(name => name !== action.payload);
        localStorage.setItem('names', JSON.stringify(updatedNamesRemove));
        return { ...state, names: updatedNamesRemove };
  
      default:
        return state;
    }
  };
  
  export default nameReducer;
  