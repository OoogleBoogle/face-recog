import React, { Component }from 'react';
import { connect } from 'react-redux';

const Photo = (props) => {
  return <img src={props.state.url} width='150'/>
}

function mapStateToProps(state) {
  return {
    state: state
  }
}

const Image = connect(mapStateToProps)(Photo);

export default Image;
