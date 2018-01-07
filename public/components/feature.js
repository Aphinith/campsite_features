import React, { Component } from 'react'
import './feature.scss'
import green_check from '../assets/green_check.png'
import sad_face from '../assets/sad_face.png'
import do_not_have from '../assets/do_not_have.png'

class Feature extends Component {
  constructor(props) {
    super(props);
    this.state = { "hide": "hide"}
  }

  _featureClicked(ev) {
    if (this.state.hide === "hide") {
      this.setState({"hide": "show"})
    } else {
      this.setState({"hide": "hide"})
    }
  }

  render() {
    let subfeatures = null;

    if (this.props.subfeatures) {
      subfeatures = this.props.subfeatures.map(function(subfeature) {
        return (
          <Feature feature={subfeature} subfeatures={subfeature.subfeatures} />
        );
      })
    }

    return (
      <li>
        <span 
          onClick={ ev => this._featureClicked(ev) }
          className={this.props.feature.subfeatures.length > 0 ?
            `presence-${this.props.feature.presence} feature-title-has-subfeatures`
            : `presence-${this.props.feature.presence} feature-title`
          }
          >{this.props.feature.title}
          {this.props.feature.presence ? 
            <img src={green_check} className={`green-check`}/>
            : 
            <span>
              <img src={do_not_have} className={`do-not-have`}/>
              <img src={sad_face} className={`sad-face`}/>
            </span>}
          {this.props.feature.subfeatures.length > 0 ?
            <div className={`has-subfeatures`}>(click for more info)</div>
            : null}

        </span>
        { subfeatures ? 
          <ul className={`subfeatures ${this.state.hide}`}>{subfeatures}</ul> 
          : null}
      </li>
    );
  }
}

export default Feature