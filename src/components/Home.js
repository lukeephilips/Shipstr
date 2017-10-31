import React from 'react';
import air from '../assets/air.svg';
import ocean from '../assets/ocean.svg';
import customs from '../assets/customs.svg';
import {Link} from 'react-router-dom';


function Home(props) {
  return(
    <div className="row">
      <div className="col-sm-4">
        <div className="panel panel-default">
          <div className="panel-body">
            <Link to="/air">
              <img className="tile-img" src={air} alt="Air" />
              <span className="tile-label">Air</span>
            </Link>
          </div>
        </div>
      </div>
      <div className="col-sm-4">
        <div className="panel panel-default">
          <div className="panel-body">
            <Link to="/ocean">
              <img className="tile-img" src={ocean} alt="Ocean" />
              <span className="tile-label">Ocean</span>
            </Link>
          </div>
        </div>
      </div>
      <div className="col-sm-4">
        <div className="panel panel-default">
          <div className="panel-body">
            <Link to="/customs">
              <img className="tile-img" src={customs} alt="Customs" />
              <span className="tile-label">Customs Brokers</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Home;
