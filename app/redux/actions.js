import fetch from 'isomorphic-fetch';
import * as secrets from '../../secrets';

export function addedPhoto(file) {
  return {
    type: 'ADDED_PHOTO',
    url: window.URL.createObjectURL(file)
  }
}
