import React from "react";
import '../css/card.css';

class Card extends React.Component {

   constructor(props) {
  	super(props);
   }
   

  render () {
    return <div className="card" style={{background:this.props.cardColor}}>
                <div className="tag" style={{background:this.props.cardTagColor}}>
                  <p>{this.props.cardTag}</p>   
                </div>
                <div className="offerLabel">{this.props.offerLabel}</div>
                <div className="offerDesc">{this.props.offerDesc}</div>
                <div className="tnc">{this.props.tnc}</div>
                <div className="conditionLimit">{this.props.conditionLimit}</div>
                <div className="campaignEndDate">{this.props.campaignEndDate}</div>
                <div className="progressBar">
                    <div className="progress" style={{width:this.props.progress,background:this.props.progressBarColor}}></div>
                </div>
                <div className="goalAchievement">{this.props.goalAchievement}</div>
                <div className="cta">Show products</div>
           </div>
  }
}

export default Card