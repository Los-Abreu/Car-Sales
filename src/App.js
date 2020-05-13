import React from 'react';

import Header from './components/Header';
import AddedFeatures from './components/AddedFeatures';
import AdditionalFeatures from './components/AdditionalFeatures';
import Total from './components/Total';

import { connect } from 'react-redux';
import {Add_Features, Remove_Features} from './actions/actions';

const App = (props) => {
  // const removeFeature = item => {

  // };

  // const buyItem = item => {
  //   props.Add_Features(item)
  // };

  return (
    <div className="boxes">
      <div className="box">
        <Header car={props.car} />
        <AddedFeatures car={props.car} remove_features={props.Remove_Features} />
      </div>
      <div className="box">
        <AdditionalFeatures add_features={props.Add_Features} additionalFeatures={props.additionalFeatures} />
        <Total car={props.car} additionalPrice={props.additionalPrice} />
      </div>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    additionalPrice: state.additionalPrice,
    car: state.car,
    additionalFeatures: state.additionalFeatures
  };
};

export default connect(mapStateToProps,{Add_Features, Remove_Features})(App);
