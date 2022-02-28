import * as actionTypes from "./actionTypes";

const initialState: AppState = { 
  user: {
    name: '',
    brands: [],
    expertise: []
  },
  currentPage: 0,
  totalPages: 3 
};

const reducer = (state: AppState = initialState, action: AppAction): AppState => {
  switch (action.type) {
    case actionTypes.SET_PAGE:
      const navigateTo = action.payload as number;
      return {
        ...state,
        currentPage: navigateTo,
      };

      case actionTypes.ADD_USER_NAME:
      const userName = action.payload as string;
      return {
        ...state,
        user: {...state.user, name: userName}
      };

      case actionTypes.ADD_USER_EXPERTISE:
      const expertiseList = action.payload as string[];
      return {
        ...state,
        user: {...state.user, expertise: expertiseList}
      };

      case actionTypes.ADD_USER_BRANDS:
      const brandsList = action.payload as string[];
      return {
        ...state,
        user: {...state.user, brands: brandsList}
      };
  }
  return state;
};

export default reducer;
