import React from 'react';
import { connect } from "react-redux";


function Air(dispatch, providers) {
  return (
    <div>
      <h1>Air things</h1>
    </div>
  )
}
const mapStateToProps = state => {
  console.log("mapStateToProps  ", state);
  return {
    providers: state.providers
    category: state.category,

  }
};

export default connect(mapStateToProps)(Air);
