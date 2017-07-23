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
        tasks: state.tasks.filter((task, index) => index !== action.payload)
      });

    case REPLACE:
      let newIndex = action.payload.index;
      let newValue = action.payload.value;
      return Object.assign({}, state, {
        tasks: state.tasks.map((task, index) => index === newIndex ? newValue : task)
      });

    default:
      return state;
  }
}

/* ----------------- ACTIONS ------------------ */

export const ADD = 'ADD';
export const DROP = 'DROP';
export const REPLACE = 'REPLACE';

/* ------------ ACTION CREATORS ------------------ */

export const add = input => ({
  type: ADD,
  payload: input
});

export const drop = index => ({
  type: DROP,
  payload: Number(index)
});

export const replace = (index, value) => ({
  type: REPLACE,
  payload: {
    index: Number(index),
    value: value
  }
});


/* ------------------ DEFAULT EXPORT ------------------ */

export default reducer;







