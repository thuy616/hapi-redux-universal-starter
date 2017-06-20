import React, { Component } from 'react';
import * as actions from '../actions';
import { connect } from 'react-redux';

class Home extends Component {

  constructor(props) {
    super(props)
  }

  componentWillMount() {
    this.props.fetchDynamicData();
  }

  render() {
    return (
      <div>
        <h1>Boilerplate App</h1>
        <p>{this.props.data}</p>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  data: state.dynamicContent.data
});

export default connect(mapStateToProps, actions)(Home);
