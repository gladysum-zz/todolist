import reducer from './reducer';
import {ADD, DROP, REPLACE, add, drop, replace} from './reducer';

describe('reducer', () => {

    it('has a default state', () => {
        expect(reducer(undefined, {type: undefined})).toEqual({
          tasks:[]
        });
    });

    it('can handle ADD', () => {
      expect(reducer(undefined, {type: ADD, payload: 'mop the floor'})).toEqual({
        tasks: ['mop the floor']
      })
    });

    it('can handle DROP', () => {
      expect(reducer({tasks:['task0', 'task1', 'task2']}, {type: DROP, payload: 1})).toEqual({
        tasks: ['task0', 'task2']
      })
    });

    it('can handle REPLACE', () => {
      expect(reducer({tasks:['task0', 'task1', 'task2']}, {type: REPLACE, payload: {index: 1, value: 'newtask'}})).toEqual({
        tasks: ['task0', 'newtask', 'task2']
      })
    });

});

describe('action creators', () => {

    it('can handle add', () => {
      expect(add('dust the shelves')).toEqual({
        type: ADD,
        payload: 'dust the shelves'
      })
    });

    it('can handle drop', () => {
      expect(drop('2')).toEqual({
        type: DROP,
        payload: Number('2')
      })
    });

    it('can handle replace', () => {
      expect(replace('3', 'wash dishes')).toEqual({
        type: REPLACE,
        payload: {
          index: Number('3'),
          value: 'wash dishes'
        }
      })
    });

});

