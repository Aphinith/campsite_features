import React, { Component } from 'react'
import { ALL_FEATURES } from './camp_features'
import Feature from './feature'

class MainFeatures extends Component {

  constructor(props) {
    super(props);
    this.state = {"mainFeatures": null};

  }

  // let's pretend the below method will make a call to the server to get the list of features
  componentWillMount() {
    this.setState({"mainFeatures": ALL_FEATURES})
  }

  render() {

    const mainFeatures = this.state.mainFeatures;
    let features = mainFeatures.map(function(feature) {
      return (
        <Feature feature={feature} subfeatures={feature.subfeatures} />
      );
    })


    return(
      <div>
        <ul className="feature">
          {features}
        </ul>
      </div>
    );
  }
}

export default MainFeatures;