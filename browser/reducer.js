const initialState = {
  tasks:[]
}

/* ------------ REDUCER ------------------ */

const reducer = (state = initialState, action) => {
  switch(action.type) {
    case ADD:
      return Object.assign({}, state, {
        tasks: state.tasks.concat(action.payload)
      })

    default:
      return state;
  }
}

/* ----------------- ACTIONS ------------------ */

const ADD = 'ADD';

/* ------------ ACTION CREATORS ------------------ */

export const add = input => ({
  type: ADD,
  payload: input
})

/* ------------------ DEFAULT EXPORT ------------------ */

export default reducer;







