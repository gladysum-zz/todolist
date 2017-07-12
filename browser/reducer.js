const initialState = {
  tasks:[]
}

/* ------------ REDUCER ------------------ */

const reducer = (state = initialState, action) => {
  switch(action.type) {
    case ADD:
      return Object.assign({}, state, {
        tasks: state.tasks.concat(action.payload)
      });

    case DROP:

      return Object.assign({}, state, {
        tasks: state.tasks.filter((value, index) => index !== action.payload)
      });

    default:
      return state;
  }
}

/* ----------------- ACTIONS ------------------ */

const ADD = 'ADD';
const DROP = 'DROP';

/* ------------ ACTION CREATORS ------------------ */

export const add = input => ({
  type: ADD,
  payload: input
});

export const drop = index => ({
  type: DROP,
  payload: Number(index)
});


/* ------------------ DEFAULT EXPORT ------------------ */

export default reducer;







