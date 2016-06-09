import React, {Component} from 'react';
import Image from './image';
import { connect } from 'react-redux';
import { addedPhoto } from '../redux/actions';


class Form extends Component {
  constructor(props) {
    super(props);
    this.getImage = this.getImage.bind(this);
  }
  getImage(event) {
    // event.preventDefault();
    // console.log(event.target.files[0]);
    this.props.onSubmit(event.target.files[0]);
  }
  render() {
    return (
       <form>
          <input type="file" onChange={this.getImage}></input>
          {/*<button type="submit" onClick={this.getImage}>Add Photo</button>*/}
          <Image />
       </form>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onSubmit: (file) => {
      dispatch(addedPhoto(file))
    }
  }
}

const Main = connect(null, mapDispatchToProps)(Form);

export default Main;
