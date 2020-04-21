import React from "react";
import '../css/card.css';

class Card extends React.Component {

   constructor(props) {
  	super(props);
   }
   

  render () {
    return <div className="card" style={{backgroundColor:this.props.cardColor}}>
                <div className="tag">
                  <p>{this.props.cardTag}</p>   
                </div>
                <div className="offerLabel">{this.props.offerLabel}</div>
                <div className="offerDesc">{this.props.offerDesc}</div>
                <div className="tnc">{this.props.tnc}</div>
                <div className="conditionLimit">{this.props.conditionLimit}</div>
                <div className="campaignEndDate">{this.props.campaignEndDate}</div>
                <div className="progressBar"></div>
                <div className="goalAchievement">{this.props.goalAchievement}</div>
           </div>
  }
}

export default Card