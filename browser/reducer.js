const initialState = {
  tasks:[]
};

/* ------------ REDUCER ------------------ */

const reducer = (state = initialState, action) => {
  switch(action.type) {
    case ADD:
      return Object.assign({}, state, {
        tasks: state.tasks.concat(action.payload)
      });

    case DROP:
      return Object.assign({}, state, {
        tasks: state.tasks.filter((task) => task.id !== action.payload)
      });

    case REPLACE:
      let newId = action.payload.id;
      let newTask = action.payload;
      return Object.assign({}, state, {
        tasks: state.tasks.map((task) => task.id === newId ? newTask : task)
      });

    case LOAD_TASKS:
      return Object.assign({}, state, {
        tasks: action.payload
      });
 

    default:
      return state;
  }
};

/* ----------------- ACTIONS ------------------ */

export const ADD = 'ADD';
export const DROP = 'DROP';
export const REPLACE = 'REPLACE';
export const LOAD_TASKS = 'LOAD_TASKS';

/* ------------ ACTION CREATORS ------------------ */

export const add = newTask => ({
  type: ADD,
  payload: newTask
});

export const drop = id => ({
  type: DROP,
  payload: Number(id)
});

export const replace = (id, content) => ({
  type: REPLACE,
  payload: {
    id: Number(id),
    content: content
  }
});

export const load_tasks = tasks => ({
  type: LOAD_TASKS,
  payload: tasks
})


/* ------------------ DEFAULT EXPORT ------------------ */

export default reducer;







