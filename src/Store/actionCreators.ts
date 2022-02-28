import * as actionTypes from "./actionTypes"


export function setPageNumber(page: number) {
    const action: AppAction = {
      type: actionTypes.SET_PAGE,
      payload: page,
    }
    return (dispatch: DispatchType) => {dispatch(action)}
  }

  export function addName(name: string) {
    const action: AppAction = {
      type: actionTypes.ADD_USER_NAME,
      payload: name,
    }
    return (dispatch: DispatchType) => {dispatch(action)}
  }


  export function updateExpertise(expertiseList: string[]) {
    const action: AppAction = {
      type: actionTypes.ADD_USER_EXPERTISE,
      payload: expertiseList,
    }
    return (dispatch: DispatchType) => {dispatch(action)}
  }

  export function updateBrands(brandsList: string[]) {
    const action: AppAction = {
      type: actionTypes.ADD_USER_BRANDS,
      payload: brandsList,
    }
    return (dispatch: DispatchType) => {dispatch(action)}
  }
