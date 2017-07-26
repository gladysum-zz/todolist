import reducer from './reducer';
import {ADD, DROP, REPLACE, add, drop, replace} from './reducer';

describe('reducer', () => {

    const task = {
      id: 3,
      content: 'Buy groceries'
    };

    const task0 = {
      id: 0,
      content: 'Refactor broken tests'
    };

    const task1 = {
      id: 1,
      content: 'Write backend tests'
    };

    const task2 = {
      id: 2,
      content: 'Create a user model'
    };



    it('has a default state', () => {
        expect(reducer(undefined, {type: undefined})).toEqual({
          tasks:[]
        });
    });

    it('can handle ADD', () => {
      expect(reducer(undefined, {type: ADD, payload: task})).toEqual({
        tasks: [task]
      })
    });

    it('can handle DROP', () => {
      expect(reducer({tasks:[task0, task1, task2]}, {type: DROP, payload: 1})).toEqual({
        tasks: [task0, task2]
      })
    });

    it('can handle REPLACE', () => {
      expect(reducer({tasks:[task0, task1, task2]}, {type: REPLACE, payload: {id: 0, content: 'Refactor frontend tests'}})).toEqual({
        tasks: [{id: 0, content: 'Refactor frontend tests'}, task1, task2]
      })
    });

});

describe('action creators', () => {
  
  const task = {
    id: 3,
    content: 'Dust shelves'
  };

  it('can handle add', () => {
    expect(add(task)).toEqual({
      type: ADD,
      payload: task
    })
  });

  it('can handle drop', () => {
    expect(drop(task.id)).toEqual({
      type: DROP,
      payload: task.id
    })
  });

  it('can handle replace', () => {
    expect(replace(task.id, task.content)).toEqual({
      type: REPLACE,
      payload: {
        id: task.id,
        content: task.content
      }
    })
  });

});

