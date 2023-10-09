export const logger = (store) => (next) => (action) => {
  // console.log(action)
  next(action)
}

export const featuring = (store) => (next) => (actionInfo) => {
const featured = [{name:'eddie'}, ...actionInfo.payload];
next({
  ...actionInfo,
  payload:featured
});
}