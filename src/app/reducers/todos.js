import {DO_NOTHING} from '../constants/ActionTypes';

const initialState = [
  {
    placeholder: 0
  }
];

export default function todos(state = initialState, action) {
  switch (action.type) {
    case DO_NOTHING:
      return state;
    default:
      return state;
  }
}
