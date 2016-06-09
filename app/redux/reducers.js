import update from 'react-addons-update';
// import * as actions from './actions';

// let iniState = {
//   url: 'https://secure.gravatar.com/avatar/052c7934382962edeada8acc311c4f06?s=240&d=https%3A%2F%2Fstatic.teamtreehouse.com%2Fassets%2Fcontent%2Fdefault_avatar-1194852ae95df3501aed27c0a96da653.png&r=pg'
// }

export function photoReducer(state = {}, action) {
  console.log(action);
  switch (action.type) {
    case 'ADDED_PHOTO':
      let newState = update(state, {$set: {url: action.url}});
      return newState;
      break;
    default:
      return state;
  }
}
