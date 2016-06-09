import fetch from 'isomorphic-fetch';
import * as secrets from '../../secrets';

export function addedPhoto(file) {
  // console.log(secrets);
  // fetch('http://flickr.com/services/auth/?api_key=' + secrets.FLICKR_API_KEY + '&perms=write&' + secrets.FLICKR_API_SECRET, {
  //   mode: 'no-cors'
  // })
  // .then((response) => {
  //   console.log(response);
  // })
  return (dispatch) => {
    let reader = new FileReader();
    reader.onload = (e) => {
      // console.log(e);
      dispatch(gotPhoto('ADDED_PHOTO', e))
    }
    reader.readAsDataURL(file);
  }
}

function gotPhoto(type, url) {
  return {
    type,
    url
  }
}
