export default function courseReducer(state = [], action) {
  switch (action.type) {
    case "CREATE_COURSE":
      // dont do this
      // debugger;
      //   state.push(action.course);
      // do this
      return [...state, { ...action.course }];
    //  what ever returned from reducer
    // becomes the new state
    default:
      return state;
  }
}
