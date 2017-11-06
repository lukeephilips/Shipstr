import React from 'react';
import { connect } from "react-redux";

function Air(props) {
  let providersList;
    if(props.providers.length > 0) {
      providersList = props.providers.map(function (provider){
      return (
        <div>
          <ul>
            <div className = "panel panel-default">
              <div className= "panel-body">
                <div className = "panel-header">
                  <h3>{provider.companyName}</h3>
                </div>
                <img className="company-logo" src={provider["images"]["Company Logo"]["url"]} />
                <p>{provider.type}</p>
              </div>
            </div>
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
    providers: state.providerReducer.providers

  }
};

export default connect(mapStateToProps)(Air);
