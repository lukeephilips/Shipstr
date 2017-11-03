import React from 'react';
import { connect } from "react-redux";

function Air(props) {
  let providersList;
    if(props.providers.length > 0) {
      providersList = props.providers.map(function (provider){
      return (
        <div>
          <ul>
            <li>{provider.companyName}
            </li>
          </ul>
        </div>
      )
  });
}

  return (
    <div>
      <h1>Air things</h1>
      {providersList}
    </div>
  )
}
const mapStateToProps = state => {
  return {
    providers: state.providerReducer,
    category: state.category

  }
};

export default connect(mapStateToProps)(Air);
