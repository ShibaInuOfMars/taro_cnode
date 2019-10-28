import {
  SHOW_DRAWER,
  HIDE_DRAWER,
  CHANGE_CATA
} from './../constants/menu'

// 显示抽屉
const changeDrawerToTrue = () => ({
  type: SHOW_DRAWER
})

// 隐藏抽屉
const changeDrawerToFalse = () => ({
  type: HIDE_DRAWER
})

// 改变当前分类
const changeCurrentCata = (currentCata) => ({
  type: CHANGE_CATA,
  currentCata
})

// 显示抽屉
export const showDrawer = () => {
  return (dispatch) => {
    dispatch(changeDrawerToTrue())
  }
}

// 隐藏抽屉
export const hideDrawer = () => {
  return (dispatch) => {
    dispatch(changeDrawerToFalse())
  }
}

// 改变当前所在分类
export const changeCata = (currentCata) => {
  return (dispatch) => {
    dispatch(changeCurrentCata(currentCata))
  }
}
